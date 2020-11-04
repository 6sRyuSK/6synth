export class Oscillator {
  audioctx: AudioContext;
  osc!: OscillatorNode;
  waveType: waveType = 'sine'
  analyser: AnalyserNode
  lfo: OscillatorNode;
  depth: GainNode;
  constructor() {
    this.audioctx = new AudioContext()
    this.analyser = new AnalyserNode(this.audioctx)
    this.analyser.connect(this.audioctx.destination)
    this.analyser.fftSize = 128
    this.lfo = new OscillatorNode(this.audioctx)
    this.depth = new GainNode(this.audioctx)
  }

  play(frequency?: number) {
    this.osc = new OscillatorNode(this.audioctx)
    this.osc.connect(this.analyser)
    this.osc.type = this.waveType
    if(frequency) this.osc.frequency.setValueAtTime(frequency, this.audioctx.currentTime)
    // this.osc.detune.setValueAtTime(100, this.audioctx.currentTime)
    this.lfo.connect(this.depth).connect(this.osc.frequency)
    this.osc.start(this.audioctx.currentTime)
    this.lfo.start()
  }

  stop() {
    this.osc.stop(this.audioctx.currentTime)
  }

  changeWave(type: waveType) {
    this.waveType = type
  }

  changeLFORate(value: number) {
    console.log('Rate',value)
    this.lfo.frequency.value = value
  }

  changeLFODepth(value: number) {
    console.log('Depth',value)
    this.depth.gain.value = value
  }
}

type waveType = 'sine' | 'square' | 'sawtooth' | 'triangle'