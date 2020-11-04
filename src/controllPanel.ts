const vco = document.getElementById('vco') as HTMLFormElement
const lfoRange = document.getElementById('rate') as HTMLInputElement
const lfoDepth = document.getElementById('depth') as HTMLInputElement

vco.onchange = () => {
  window.sixSynth.changeWave(vco.wave.value)
}

lfoRange.addEventListener('input', (event: any) => {
  window.sixSynth.changeLFORate(Number(event.target.value))
})

lfoDepth.addEventListener('input', (event: any) => {
  window.sixSynth.changeLFODepth(Number(event.target.value))
})

const waveform = document.getElementById('waveform') as HTMLCanvasElement
const canvasContext = waveform.getContext('2d') as CanvasRenderingContext2D
const intervalid = window.setInterval(function() {
  // Get data for drawing sound wave
  const times = new Uint8Array(window.sixSynth.analyser.fftSize);
  window.sixSynth.analyser.getByteTimeDomainData(times);
  // Clear previous data
  canvasContext.clearRect(0, 0, waveform.width, waveform.height);
  // Draw sound wave
  canvasContext.beginPath();
  for (var i = 0; i < times.length; i++) {
      var x = (i / times.length) * waveform.width;
      var y = (1 - (times[i] / 255)) * waveform.height;
      if (i === 0) {
          canvasContext.moveTo(x, y);
      } else {
          canvasContext.lineTo(x, y);
      }
  }
  canvasContext.stroke();
}, 1000 / 24);