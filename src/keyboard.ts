import Frequency from './constants/frequency'
const keyboardElm = document.getElementById('keyboard') as HTMLDivElement

type KeyArgs = {frequency: number, name: string}
const key = (keyArgs: KeyArgs) => {
  const elm = document.createElement('div')
  elm.className = 'key'
  elm.innerText = keyArgs.name
  elm.setAttribute('frequecy', keyArgs.frequency.toString())
  elm.ontouchstart = (e) => {
    e.preventDefault()
    window.sixSynth.play(keyArgs.frequency)
  }
  elm.ontouchend = (e) => {
    e.preventDefault()
    window.sixSynth.stop()
  }
  elm.onmousedown = () => window.sixSynth.play(keyArgs.frequency)
  elm.onmouseup = () => window.sixSynth.stop()
  return elm
}

export const generateKeys = () => {
  for(let i = 0; i <= 25; i++) {
    keyboardElm.appendChild(key({frequency: Frequency[i+16][0], name: Frequency[i+16][1]}))
  }
}
