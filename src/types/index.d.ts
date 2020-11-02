import { Oscillator } from '../oscillator'

declare global {
  interface Window {
    sixSynth: Oscillator
  }
}