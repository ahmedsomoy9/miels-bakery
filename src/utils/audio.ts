/**
 * Procedural ambient sound generator for miel's bakery.
 * Zero external audio files — uses Web Audio API oscillators and filtered brown noise.
 */

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private oscNode1: OscillatorNode | null = null;
  private oscNode2: OscillatorNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtxClass) {
      this.ctx = new AudioCtxClass();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    try {
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 2.0);
      this.masterGain.connect(this.ctx.destination);

      // Warm brown noise generator (like gentle room air and soft cafe ambiance)
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 1.5;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      this.noiseNode.connect(filter);
      filter.connect(this.masterGain);
      this.noiseNode.start();

      // Soft harmonic drone (Warm chords: C3 and G3 very quiet)
      this.oscNode1 = this.ctx.createOscillator();
      this.oscNode1.type = 'sine';
      this.oscNode1.frequency.setValueAtTime(130.81, this.ctx.currentTime); // C3

      this.oscNode2 = this.ctx.createOscillator();
      this.oscNode2.type = 'sine';
      this.oscNode2.frequency.setValueAtTime(196.00, this.ctx.currentTime); // G3

      const oscGain = this.ctx.createGain();
      oscGain.gain.setValueAtTime(0.015, this.ctx.currentTime);

      this.oscNode1.connect(oscGain);
      this.oscNode2.connect(oscGain);
      oscGain.connect(this.masterGain);

      this.oscNode1.start();
      this.oscNode2.start();

      this.isPlaying = true;
    } catch {
      // Audio autoplay restriction handling
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.ctx || !this.masterGain) return;
    try {
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        try {
          this.noiseNode?.stop();
          this.noiseNode?.disconnect();
          this.oscNode1?.stop();
          this.oscNode2?.stop();
          this.oscNode1?.disconnect();
          this.oscNode2?.disconnect();
          this.masterGain?.disconnect();
        } catch {
          // ignore cleanup errors
        }
        this.isPlaying = false;
      }, 550);
    } catch {
      this.isPlaying = false;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambientSound = new AmbientSoundEngine();
