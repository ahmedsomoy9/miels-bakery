import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, Sparkles, Coffee, Heart, CheckCircle2 } from 'lucide-react';
import { TiramisuLayer } from '../../types/dessert';

const LAYERS_DATA: TiramisuLayer[] = [
  {
    id: 'cocoa',
    name: 'Dutch Cocoa Cloud',
    subname: 'Layer 5 · The Crown',
    description: 'Generous dusting of 100% pure unsweetened Dutched cocoa powder with deep, earthy roasted notes that balance the sweetness.',
    tastingNote: 'Rich, bittersweet aroma on first bite',
    color: '#3B1F12',
    heightOffset: 2.1,
  },
  {
    id: 'cream-top',
    name: 'Velvety Mascarpone Swirl',
    subname: 'Layer 4 · The Cream',
    description: 'Silky, airy zabaglione cream folded gently with imported Italian mascarpone, Madagascar vanilla bean, and organic egg yolks.',
    tastingNote: 'Cloud-like melt with delicate vanilla warmth',
    color: '#FAF3E5',
    heightOffset: 1.5,
  },
  {
    id: 'sponge-mid',
    name: 'Espresso-Soaked Savoiardi',
    subname: 'Layer 3 · The Heart',
    description: 'Artisanal ladyfingers hand-dipped in freshly brewed dark roast Dhaka specialty espresso with a hint of warm roasted chicory notes.',
    tastingNote: 'Deep espresso punch, perfectly moist, never soggy',
    color: '#5C381E',
    heightOffset: 0.95,
  },
  {
    id: 'cream-mid',
    name: 'Chilled Mascarpone Custard',
    subname: 'Layer 2 · The Body',
    description: 'The foundation cream layer, gently settled overnight to marry with the espresso aromatics.',
    tastingNote: 'Smooth, creamy decadence',
    color: '#F4ECD8',
    heightOffset: 0.45,
  },
  {
    id: 'base-tub',
    name: 'Espresso Biscuit Foundation & Kraft Tub',
    subname: 'Layer 1 · The Foundation',
    description: 'Crushed espresso biscuit crumb nestled inside miel’s signature recyclable artisanal kraft paper tub, finished on a speckled ceramic stoneware base.',
    tastingNote: 'Subtle crunch, buttery warmth & warm kraft presentation',
    color: '#C69C6D',
    heightOffset: 0.0,
  },
];

export default function ExplodedTiramisuScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [separation, setSeparation] = useState(0.5); // 0 = assembled, 1 = fully exploded
  const [selectedLayer, setSelectedLayer] = useState<string>('cocoa');
  const [isRotating, setIsRotating] = useState(true);
  const targetSeparationRef = useRef(0.5);

  // Sync ref with state
  useEffect(() => {
    targetSeparationRef.current = separation;
  }, [separation]);

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

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 520;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x29180F, 0.035);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 1.8, 5.2);
    camera.lookAt(0, 0.7, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Studio Lights for Dark Cinematic Section
    const keyLight = new THREE.DirectionalLight(0xffecd0, 3.2);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = !isSoftwareGl;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xc8a783, 1.5);
    fillLight.position.set(-4, 3, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffdfb8, 2.5);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(0xfff5ea, 0x29180f, 0.8);
    scene.add(hemiLight);

    // Procedural textures
    const createGranularTexture = (bgColor: string, speckColor: string) => {
      const cv = document.createElement('canvas');
      cv.width = 256;
      cv.height = 256;
      const cx = cv.getContext('2d')!;
      cx.fillStyle = bgColor;
      cx.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 8000; i++) {
        cx.fillStyle = Math.random() > 0.5 ? speckColor : 'rgba(0,0,0,0.2)';
        cx.fillRect(Math.random() * 256, Math.random() * 256, Math.random() * 2, Math.random() * 2);
      }
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    const cocoaTex = createGranularTexture('#351b0e', '#1e0d06');
    const coffeeTex = createGranularTexture('#52321a', '#3a200d');
    const creamTex = createGranularTexture('#fbf5e7', '#f0e3cc');

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Base Dish and Kraft Tub
    const baseGroup = new THREE.Group();
    // Stoneware Plate
    const plateGeo = new THREE.CylinderGeometry(1.9, 1.6, 0.12, 48);
    const plateMat = new THREE.MeshStandardMaterial({ color: 0xded2c4, roughness: 0.6 });
    const plate = new THREE.Mesh(plateGeo, plateMat);
    plate.position.y = -0.06;
    baseGroup.add(plate);

    // Kraft Tub Collar
    const tubGeo = new THREE.CylinderGeometry(1.36, 1.3, 0.45, 48, 1, true);
    const tubMat = new THREE.MeshStandardMaterial({ color: 0xb98f62, roughness: 0.85, side: THREE.DoubleSide });
    const tub = new THREE.Mesh(tubGeo, tubMat);
    tub.position.y = 0.22;
    baseGroup.add(tub);
    mainGroup.add(baseGroup);

    // Layer 1: Biscuit Crumb Foundation
    const l1Geo = new THREE.CylinderGeometry(1.28, 1.28, 0.18, 48);
    const l1Mat = new THREE.MeshStandardMaterial({ map: coffeeTex, roughness: 0.85 });
    const l1Mesh = new THREE.Mesh(l1Geo, l1Mat);
    mainGroup.add(l1Mesh);

    // Layer 2: Chilled Mascarpone Cream
    const l2Geo = new THREE.CylinderGeometry(1.29, 1.28, 0.22, 48);
    const l2Mat = new THREE.MeshStandardMaterial({ map: creamTex, roughness: 0.5 });
    const l2Mesh = new THREE.Mesh(l2Geo, l2Mat);
    mainGroup.add(l2Mesh);

    // Layer 3: Espresso-Soaked Savoiardi
    const l3Geo = new THREE.CylinderGeometry(1.29, 1.29, 0.2, 48);
    const l3Mat = new THREE.MeshStandardMaterial({ map: coffeeTex, roughness: 0.8 });
    const l3Mesh = new THREE.Mesh(l3Geo, l3Mat);
    mainGroup.add(l3Mesh);

    // Layer 4: Top Mascarpone Cream Swirls
    const l4Group = new THREE.Group();
    const l4Geo = new THREE.CylinderGeometry(1.3, 1.29, 0.22, 48);
    const l4Mesh = new THREE.Mesh(l4Geo, l2Mat);
    l4Group.add(l4Mesh);

    // Delicate piped dollops on top layer
    const dollopGeo = new THREE.SphereGeometry(0.12, 12, 12);
    dollopGeo.scale(1, 0.7, 1);
    for (let i = 0; i < 18; i++) {
      const angle = (i / 18) * Math.PI * 2;
      const r = 0.9;
      const d = new THREE.Mesh(dollopGeo, l2Mat);
      d.position.set(Math.cos(angle) * r, 0.14, Math.sin(angle) * r);
      l4Group.add(d);
    }
    for (let i = 0; i < 9; i++) {
      const angle = (i / 9) * Math.PI * 2;
      const r = 0.45;
      const d = new THREE.Mesh(dollopGeo, l2Mat);
      d.position.set(Math.cos(angle) * r, 0.15, Math.sin(angle) * r);
      l4Group.add(d);
    }
    mainGroup.add(l4Group);

    // Layer 5: Dutch Cocoa Cloud Dusting
    const l5Geo = new THREE.CylinderGeometry(1.3, 1.3, 0.04, 48);
    const l5Mat = new THREE.MeshStandardMaterial({ map: cocoaTex, roughness: 0.95 });
    const l5Mesh = new THREE.Mesh(l5Geo, l5Mat);
    mainGroup.add(l5Mesh);

    // Floating delicate cocoa motes
    const moteCount = 35;
    const moteGeo = new THREE.BufferGeometry();
    const motePos = new Float32Array(moteCount * 3);
    for (let i = 0; i < moteCount; i++) {
      motePos[i * 3] = (Math.random() - 0.5) * 3.5;
      motePos[i * 3 + 1] = Math.random() * 3.5;
      motePos[i * 3 + 2] = (Math.random() - 0.5) * 3.5;
    }
    moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3));
    const moteMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xc8a783,
      transparent: true,
      opacity: 0.6,
    });
    const motes = new THREE.Points(moteGeo, moteMat);
    scene.add(motes);

    // Animation & Smooth Damping Variables
    let currentSeparation = targetSeparationRef.current;
    let clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Exponential smooth damping towards target slider value
      currentSeparation = THREE.MathUtils.damp(currentSeparation, targetSeparationRef.current, 5, delta);

      // Height offsets per layer based on separation
      const sep = currentSeparation;
      baseGroup.position.y = 0;
      l1Mesh.position.y = 0.1 + sep * 0.25;
      l2Mesh.position.y = 0.35 + sep * 0.65;
      l3Mesh.position.y = 0.6 + sep * 1.15;
      l4Group.position.y = 0.85 + sep * 1.7;
      l5Mesh.position.y = 1.05 + sep * 2.3;

      if (isRotating) {
        mainGroup.rotation.y += delta * 0.35;
      }

      // Gentle floating hover
      mainGroup.position.y = Math.sin(time * 1.5) * 0.05 - 0.4;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      plateGeo.dispose();
      tubGeo.dispose();
      l1Geo.dispose();
      l2Geo.dispose();
      l3Geo.dispose();
      l4Geo.dispose();
      l5Geo.dispose();
      dollopGeo.dispose();
      moteGeo.dispose();
      cocoaTex.dispose();
      coffeeTex.dispose();
      creamTex.dispose();
    };
  }, [isRotating]);

  const activeLayerData = LAYERS_DATA.find((l) => l.id === selectedLayer) || LAYERS_DATA[0];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* 3D Viewport on the left */}
      <div className="lg:col-span-7 relative bg-[#20120B] rounded-3xl border border-[#4B2E1F]/60 overflow-hidden shadow-2xl p-4 sm:p-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#4B2E1F]/40 text-xs font-typewriter text-[#C8A783]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8A783] animate-pulse"></span>
            3D EXPLODED ARCHITECTURE
          </span>
          <span className="hidden sm:inline">SEPARATION: {Math.round(separation * 100)}%</span>
        </div>

        {/* The 3D Canvas */}
        <div
          ref={mountRef}
          className="w-full h-[360px] sm:h-[460px] cursor-grab active:cursor-grabbing flex items-center justify-center"
          aria-label="Interactive 3D exploded view of tiramisu layers"
        />

        {/* Collapsible / Floating Layer Explode Slider */}
        <div className="mt-4 bg-[#29180F]/90 backdrop-blur-md rounded-2xl p-4 border border-[#4B2E1F]/80 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Layers className="w-4 h-4 text-[#C8A783] shrink-0" />
            <span className="text-xs uppercase tracking-wider text-[#F7F1E7]/80 font-medium whitespace-nowrap">
              Explode Layers
            </span>
          </div>

          <div className="flex items-center gap-3 w-full flex-1 max-w-xs">
            <span className="text-[11px] text-[#C8A783] font-typewriter">Assembled</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={separation}
              onChange={(e) => setSeparation(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-[#4B2E1F] rounded-lg appearance-none cursor-pointer accent-[#C8A783]"
            />
            <span className="text-[11px] text-[#C8A783] font-typewriter">Exploded</span>
          </div>

          <button
            onClick={() => setIsRotating(!isRotating)}
            className="text-xs font-mono text-[#F7F1E7]/70 hover:text-[#C8A783] px-3 py-1 rounded-md border border-[#4B2E1F] hover:border-[#C8A783] transition-colors whitespace-nowrap"
          >
            {isRotating ? 'Pause Spin' : 'Resume Spin'}
          </button>
        </div>
      </div>

      {/* Interactive Layer Breakdown & Tasting Notes on the right */}
      <div className="lg:col-span-5 flex flex-col gap-4 text-[#F7F1E7]">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A783] font-semibold">
          <Sparkles className="w-4 h-4 text-[#C8A783]" />
          <span>Interactive Tasting Architecture</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-editorial font-normal leading-tight text-[#FFFCF6]">
          Every layer tells a story.
        </h3>

        <p className="text-sm text-[#F7F1E7]/80 leading-relaxed">
          Crafted slowly in small batches in Dhaka. Each element is balanced to create harmony between deep roasted espresso, rich Italian mascarpone, and unsweetened Dutch cocoa.
        </p>

        {/* Layer Selection Chips */}
        <div className="flex flex-col gap-2.5 mt-2">
          {LAYERS_DATA.map((layer) => {
            const isSelected = selectedLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => {
                  setSelectedLayer(layer.id);
                  // Auto adjust separation slightly to highlight
                  if (separation < 0.3) setSeparation(0.5);
                }}
                className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isSelected
                    ? 'bg-[#4B2E1F]/90 border-[#C8A783] shadow-lg translate-x-1.5'
                    : 'bg-[#20120B]/60 border-[#4B2E1F]/50 hover:bg-[#20120B] hover:border-[#765039]'
                }`}
              >
                <div
                  className="w-3.5 h-3.5 rounded-full mt-1 shrink-0 border border-white/20"
                  style={{ backgroundColor: layer.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#C8A783]">{layer.subname}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A783]" />}
                  </div>
                  <h4 className="text-base font-editorial text-[#FFFCF6] font-medium tracking-wide">
                    {layer.name}
                  </h4>
                  {isSelected && (
                    <div className="mt-2 text-xs text-[#F7F1E7]/85 space-y-1.5 animate-fadeIn">
                      <p>{layer.description}</p>
                      <div className="inline-flex items-center gap-1.5 text-[#C8A783] font-typewriter text-[11px] pt-1">
                        <Heart className="w-3 h-3 text-[#C8A783]" />
                        <span>{layer.tastingNote}</span>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Quick CTA */}
        <div className="pt-2">
          <a
            href="https://www.instagram.com/miels.bakes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C8A783] hover:bg-[#dbb58e] text-[#29180F] font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            <Coffee className="w-4 h-4 text-[#29180F]" />
            <span>Order This Tiramisu on Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
