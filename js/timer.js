import Sound from './sounds.js'

// Factory
export default function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut
  let floatMinutes = Number(minutesDisplay.textContent)

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      if (minutes <= 0 && seconds <= 0) {
        Sound().timeEnd()
        stopRestart()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        minutes--
      }
      floatMinutes = minutes
      updateDisplay(minutes, seconds - 1)
      countdown()
    }, 1000)
  }

  function plusFiveMinutes() {
    let newMinutes = floatMinutes + 5
    updateDisplay(newMinutes, secondsDisplay.textContent)
  }

  function minusFiveMinutes() {
    if (floatMinutes > 5) {
      let newMinutes = floatMinutes - 5
      updateDisplay(newMinutes, secondsDisplay.textContent)
      Sound().pressButton()
    }
  }

  function stopRestart() {
    clearTimeout(timerTimeOut)
    updateDisplay(25, 0)
  }

  return {
    countdown,
    plusFiveMinutes,
    minusFiveMinutes,
    stopRestart
  }
}
