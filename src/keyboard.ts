const keyboardElm = document.getElementById('keyboard') as HTMLDivElement

const key = (index: string) => {
  const elm = document.createElement('div')
  elm.className = 'key'
  elm.setAttribute('keynum', index)
  return elm
}

export const generateKeys = () => {
  for(let i = 0; i <= 16; i++) {
    keyboardElm.appendChild(key(i.toString()))
  }
}

const playBtn = document.getElementById('play') as HTMLButtonElement
playBtn.onclick = () => {
  window.sixSynth.play()
}