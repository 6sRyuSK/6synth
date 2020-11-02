const waveForm = document.getElementById('vco') as HTMLFormElement

waveForm.onchange = () => {
  window.sixSynth.changeWave(waveForm.wave.value)
}