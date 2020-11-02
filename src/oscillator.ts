export class Oscillator {
  audioctx: AudioContext;
  osc: OscillatorNode;
  constructor() {
    this.audioctx = new AudioContext()
    this.osc = new OscillatorNode(this.audioctx)
    this.osc.connect(this.audioctx.destination)
  }

  play() {
    this.osc.start()
  }

  stop() {
    this.osc.stop()
  }

  changeWave(type: waveType) {
    this.osc.type = type
  }
}

type waveType = 'sine' | 'square' | 'sawtooth' | 'triangle'