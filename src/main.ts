import { generateKeys } from './keyboard'
import { Oscillator } from './oscillator'

window.onload = () => {
  const acceptAudio = window.confirm('再生を許可しますか？')
  if(acceptAudio) {
    window.sixSynth = new Oscillator()
  }
}

window.addEventListener('DOMContentLoaded', () => {
  generateKeys()
})