export class Oscillator {
  audioctx: AudioContext;
  osc!: OscillatorNode;
  waveType: waveType = 'sine'
  analyser: AnalyserNode
  constructor() {
    this.audioctx = new AudioContext()
    this.analyser = new AnalyserNode(this.audioctx)
    this.analyser.connect(this.audioctx.destination)
    this.analyser.fftSize = 128
  }

  play(frequency?: number) {
    this.osc = new OscillatorNode(this.audioctx)
    this.osc.connect(this.analyser)
    this.osc.type = this.waveType
    if(frequency) this.osc.frequency.setValueAtTime(frequency, this.audioctx.currentTime)
    // this.osc.detune.setValueAtTime(100, this.audioctx.currentTime)
    this.osc.start(this.audioctx.currentTime)
  }

  stop() {
    this.osc.stop(this.audioctx.currentTime)
  }

  changeWave(type: waveType) {
    this.waveType = type
  }
}

type waveType = 'sine' | 'square' | 'sawtooth' | 'triangle'