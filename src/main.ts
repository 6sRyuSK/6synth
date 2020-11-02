import { generateKeys } from './keyboard'
import { Oscillator } from './oscillator'
import './controllPanel'

window.onload = () => {
  window.sixSynth = new Oscillator()
}

window.addEventListener('DOMContentLoaded', () => {
  generateKeys()
})