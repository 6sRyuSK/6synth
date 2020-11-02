const waveForm = document.getElementById('vco') as HTMLFormElement

waveForm.onchange = () => {
  window.sixSynth.changeWave(waveForm.wave.value)
}

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
  for (var i = 0, len = times.length; i < len; i++) {
      var x = (i / len) * waveform.width;
      var y = (1 - (times[i] / 255)) * waveform.height;
      if (i === 0) {
          canvasContext.moveTo(x, y);
      } else {
          canvasContext.lineTo(x, y);
      }
  }
  canvasContext.stroke();
}, 1000 / 24);