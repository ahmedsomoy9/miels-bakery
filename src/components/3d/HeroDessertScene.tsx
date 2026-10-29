import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, Sparkles, Layers } from 'lucide-react';

interface HeroDessertSceneProps {
  onToggleExploded?: () => void;
}

export default function HeroDessertScene({ onToggleExploded }: HeroDessertSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [activeHighlight, setActiveHighlight] = useState<'all' | 'cocoa' | 'cream' | 'espresso'>('all');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xF7F1E7, 0.04);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 2.2, 4.8);
    camera.lookAt(0, 0.2, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Procedural Textures Generation (Zero external dependencies)
    // 1. Cocoa Powder Noise Texture
    const createCocoaTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#3a1f11';
      ctx.fillRect(0, 0, 512, 512);

      // Cocoa granules and dusting variations
      for (let i = 0; i < 40000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const radius = Math.random() * 1.6;
        const shade = Math.random();
        ctx.fillStyle = shade > 0.6 ? '#231209' : shade > 0.3 ? '#4d2b17' : '#5a341d';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(2, 2);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    // 2. Kraft Paper Texture
    const createKraftTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#c79d6e';
      ctx.fillRect(0, 0, 512, 512);

      // Kraft fibers
      for (let i = 0; i < 5000; i++) {
        ctx.strokeStyle = Math.random() > 0.5 ? '#b28657' : '#dbb386';
        ctx.lineWidth = Math.random() * 1.5;
        ctx.beginPath();
        const sx = Math.random() * 512;
        const sy = Math.random() * 512;
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + (Math.random() - 0.5) * 20, sy + (Math.random() - 0.5) * 8);
        ctx.stroke();
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    // 3. Ceramic Speckled Plate Texture
    const createSpeckledPlateTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#E8DFD5';
      ctx.fillRect(0, 0, 512, 512);

      // Brown speckles
      for (let i = 0; i < 800; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const r = Math.random() * 2.2 + 0.5;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(75, 46, 31, 0.45)' : 'rgba(118, 80, 57, 0.35)';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    const cocoaTex = createCocoaTexture();
    const kraftTex = createKraftTexture();
    const plateTex = createSpeckledPlateTexture();

    // Lighting Rig (Balanced 3-point Studio Rig)
    // Key Light (Warm Caramel directional)
    const keyLight = new THREE.DirectionalLight(0xfff3df, 2.8);
    keyLight.position.set(3.5, 5, 3.5);
    keyLight.castShadow = !isSoftwareGl;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 15;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Fill Light (Cool sky / cream fill)
    const fillLight = new THREE.DirectionalLight(0xf1e5d5, 1.2);
    fillLight.position.set(-4, 3, 2);
    scene.add(fillLight);

    // Rim / Back Light (Crisp golden edge)
    const rimLight = new THREE.DirectionalLight(0xffdfb0, 2.0);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Ambient Hemisphere
    const hemiLight = new THREE.HemisphereLight(0xfff8ee, 0x4b2e1f, 0.9);
    scene.add(hemiLight);

    // Hero Group
    const heroGroup = new THREE.Group();
    scene.add(heroGroup);

    // Contact Shadow Ground Plane
    const shadowGeo = new THREE.PlaneGeometry(4.5, 4.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x2b180d,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.02;
    scene.add(shadowMesh);

    // 1. Ceramic Stoneware Dish (Composite part 1)
    const plateGeo = new THREE.CylinderGeometry(1.95, 1.6, 0.14, 48);
    const plateMat = new THREE.MeshStandardMaterial({
      map: plateTex,
      roughness: 0.65,
      metalness: 0.05,
    });
    const plateMesh = new THREE.Mesh(plateGeo, plateMat);
    plateMesh.position.y = 0.07;
    plateMesh.receiveShadow = !isSoftwareGl;
    heroGroup.add(plateMesh);

    // Plate Lip
    const plateLipGeo = new THREE.TorusGeometry(1.92, 0.07, 16, 48);
    const plateLipMesh = new THREE.Mesh(plateLipGeo, plateMat);
    plateLipMesh.rotation.x = Math.PI / 2;
    plateLipMesh.position.y = 0.14;
    heroGroup.add(plateLipMesh);

    // 2. Artisanal Kraft Paper Collar/Tub (Composite part 2)
    const tubGeo = new THREE.CylinderGeometry(1.35, 1.28, 0.85, 48, 1, true);
    const tubMat = new THREE.MeshStandardMaterial({
      map: kraftTex,
      roughness: 0.8,
      metalness: 0.02,
      side: THREE.DoubleSide,
    });
    const tubMesh = new THREE.Mesh(tubGeo, tubMat);
    tubMesh.position.y = 0.55;
    tubMesh.castShadow = !isSoftwareGl;
    tubMesh.receiveShadow = !isSoftwareGl;
    heroGroup.add(tubMesh);

    // Tub Rolled Rim
    const tubRimGeo = new THREE.TorusGeometry(1.35, 0.035, 16, 48);
    const tubRimMat = new THREE.MeshStandardMaterial({
      color: 0xb58c5f,
      roughness: 0.75,
    });
    const tubRimMesh = new THREE.Mesh(tubRimGeo, tubRimMat);
    tubRimMesh.rotation.x = Math.PI / 2;
    tubRimMesh.position.y = 0.98;
    heroGroup.add(tubRimMesh);

    // 3. Tiramisu Core Body & Cocoa Top (Composite part 3 & 4)
    // Tiramisu filling cylinder
    const cakeGeo = new THREE.CylinderGeometry(1.3, 1.25, 0.78, 48);
    const cakeMat = new THREE.MeshStandardMaterial({
      color: 0xF2E6D0, // Mascarpone cream tone
      roughness: 0.7,
      metalness: 0.0,
    });
    const cakeMesh = new THREE.Mesh(cakeGeo, cakeMat);
    cakeMesh.position.y = 0.52;
    heroGroup.add(cakeMesh);

    // Top Rich Cocoa Powder Surface
    const topCocoaGeo = new THREE.CircleGeometry(1.3, 48);
    const topCocoaMat = new THREE.MeshStandardMaterial({
      map: cocoaTex,
      roughness: 0.92,
      metalness: 0.0,
    });
    const topCocoaMesh = new THREE.Mesh(topCocoaGeo, topCocoaMat);
    topCocoaMesh.rotation.x = -Math.PI / 2;
    topCocoaMesh.position.y = 0.92;
    heroGroup.add(topCocoaMesh);

    // Sliced Wedge revealing the interior layers! (Like authentic Dhaka photo)
    const wedgeGroup = new THREE.Group();
    // Inner slice faces showing espresso-soaked savoiardi and velvet mascarpone
    const sliceGeo = new THREE.PlaneGeometry(1.28, 0.76);
    // Procedural cross-section texture
    const crossSectionCanvas = document.createElement('canvas');
    crossSectionCanvas.width = 256;
    crossSectionCanvas.height = 128;
    const csCtx = crossSectionCanvas.getContext('2d')!;
    // Layer 1: Coffee soaked sponge base
    csCtx.fillStyle = '#613c23';
    csCtx.fillRect(0, 95, 256, 33);
    // Layer 2: Cream
    csCtx.fillStyle = '#f5ecd8';
    csCtx.fillRect(0, 65, 256, 30);
    // Layer 3: Coffee soaked ladyfingers
    csCtx.fillStyle = '#5c371e';
    csCtx.fillRect(0, 35, 256, 30);
    // Layer 4: Mascarpone top layer
    csCtx.fillStyle = '#faf3e3';
    csCtx.fillRect(0, 5, 256, 30);
    // Layer 5: Cocoa line
    csCtx.fillStyle = '#2d180b';
    csCtx.fillRect(0, 0, 256, 5);

    const crossSectionTex = new THREE.CanvasTexture(crossSectionCanvas);
    crossSectionTex.colorSpace = THREE.SRGBColorSpace;

    const crossSectionMat = new THREE.MeshStandardMaterial({
      map: crossSectionTex,
      roughness: 0.75,
    });

    const face1 = new THREE.Mesh(sliceGeo, crossSectionMat);
    face1.position.set(0.64, 0.52, 0);
    face1.rotation.y = 0;
    wedgeGroup.add(face1);

    const face2 = new THREE.Mesh(sliceGeo, crossSectionMat);
    face2.position.set(0, 0.52, 0.64);
    face2.rotation.y = Math.PI / 2;
    wedgeGroup.add(face2);

    heroGroup.add(wedgeGroup);

    // 4. Coffee Beans on Plate (Part 5 - Instanced / Grouped Procedural)
    const beanGeo = new THREE.SphereGeometry(0.085, 12, 12);
    beanGeo.scale(1.4, 0.7, 0.85);
    const beanMat = new THREE.MeshStandardMaterial({
      color: 0x3d2011,
      roughness: 0.35,
      metalness: 0.1,
    });

    const beanPositions = [
      [1.45, 0.15, 0.5, 0.4, 0.8],
      [1.52, 0.15, 0.32, -0.6, 1.2],
      [1.62, 0.15, 0.62, 0.9, -0.3],
      [1.38, 0.15, 0.75, -0.2, 0.5],
      [1.68, 0.15, 0.45, 0.3, -0.9],
      [1.48, 0.15, 0.92, -0.7, 0.4],
    ];

    beanPositions.forEach(([x, y, z, rx, ry]) => {
      const bean = new THREE.Mesh(beanGeo, beanMat);
      bean.position.set(x, y, z);
      bean.rotation.set(rx, ry, Math.random() * 0.5);
      bean.castShadow = !isSoftwareGl;
      heroGroup.add(bean);
    });

    // 5. Floating Cocoa Dust Particles (Floating subtle motes)
    const particleCount = isSoftwareGl ? 25 : 60;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 4;
      particlePositions[i * 3 + 1] = Math.random() * 3 + 0.3;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 4;

      particleVelocities[i * 3] = (Math.random() - 0.5) * 0.003;
      particleVelocities[i * 3 + 1] = (Math.random() * 0.002) + 0.001;
      particleVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Warm golden-cocoa particle texture
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 64;
    particleCanvas.height = 64;
    const pCtx = particleCanvas.getContext('2d')!;
    const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(215, 175, 130, 0.9)');
    grad.addColorStop(0.4, 'rgba(120, 75, 45, 0.6)');
    grad.addColorStop(1, 'rgba(75, 46, 31, 0)');
    pCtx.fillStyle = grad;
    pCtx.fillRect(0, 0, 64, 64);
    const particleTex = new THREE.CanvasTexture(particleCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      opacity: 0.75,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Parallax Interaction State
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = nx * 0.35;
      mouse.targetY = ny * 0.25;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // Animation Loop with Exponential Damping
    let frameId = 0;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Damped mouse parallax
      mouse.x = THREE.MathUtils.damp(mouse.x, mouse.targetX, 4, delta);
      mouse.y = THREE.MathUtils.damp(mouse.y, mouse.targetY, 4, delta);

      // Hero rotation & floating
      if (isRotating) {
        heroGroup.rotation.y += delta * 0.45;
      }
      heroGroup.rotation.x = mouse.y * 0.4 + Math.sin(time * 0.8) * 0.03;
      heroGroup.rotation.z = -mouse.x * 0.3;
      heroGroup.position.y = Math.sin(time * 1.2) * 0.06;

      // Particles gentle drift
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        arr[i * 3 + 1] += particleVelocities[i * 3 + 1];
        arr[i * 3] += Math.sin(time + i) * 0.0015;
        // loop back if too high
        if (arr[i * 3 + 1] > 3.5) {
          arr[i * 3 + 1] = 0.2;
        }
      }
      posAttr.needsUpdate = true;

      // Key light subtle highlight follow
      keyLight.position.x = 3.5 + mouse.x * 2;
      keyLight.position.y = 5 + mouse.y * 1.5;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      plateGeo.dispose();
      tubGeo.dispose();
      cakeGeo.dispose();
      topCocoaGeo.dispose();
      sliceGeo.dispose();
      beanGeo.dispose();
      particleGeo.dispose();
      cocoaTex.dispose();
      kraftTex.dispose();
      plateTex.dispose();
      crossSectionTex.dispose();
    };
  }, [isRotating]);

  return (
    <div 
      className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D WebGL Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
        aria-label="Interactive 3D model of miel's signature tiramisu"
      />

      {/* Subtle Floating Annotation Badges */}
      <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 bg-[#FFFCF6]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C8A783]/30 shadow-sm text-xs font-typewriter text-[#4B2E1F]">
        <Sparkles className="w-3.5 h-3.5 text-[#C8A783]" />
        <span>real-time 3d · drag or hover</span>
      </div>

      <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 bg-[#FFFCF6]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C8A783]/30 shadow-sm text-xs font-typewriter text-[#4B2E1F]">
        <span className="w-2 h-2 rounded-full bg-[#765039]"></span>
        <span>artisanal kraft tub · dhaka</span>
      </div>

      {/* Minimal Ergonomic Controls Dock (Zero viewport occlusion) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#FFFCF6]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#C8A783]/40 shadow-lg text-xs font-sans text-[#4B2E1F]">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
            isRotating ? 'bg-[#4B2E1F] text-[#FFFCF6]' : 'bg-[#F7F1E7] text-[#4B2E1F] hover:bg-[#ebdcc8]'
          }`}
          title={isRotating ? 'Pause rotation' : 'Start rotation'}
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          <span>{isRotating ? 'Auto Rotate' : 'Paused'}</span>
        </button>

        {onToggleExploded && (
          <button
            onClick={onToggleExploded}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F7F1E7] text-[#4B2E1F] hover:bg-[#4B2E1F] hover:text-[#FFFCF6] transition-all"
            title="Inspect 3D layers in exploded view"
          >
            <Layers className="w-3.5 h-3.5 text-[#C8A783]" />
            <span>Explode Layers</span>
          </button>
        )}
      </div>
    </div>
  );
}
