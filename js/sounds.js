
export default function () {
  const forest = new Audio('./audio/Floresta.wav')
  const rain = new Audio('./audio/Chuva.wav')
  const coffee = new Audio('./audio/Cafeteria.wav')
  const fire = new Audio('./audio/Lareira.wav')

  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  forest.loop = true
  rain.loop = true
  coffee.loop = true
  fire.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    forest,
    rain,
    coffee,
    fire,
    pressButton,
    timeEnd,
  }
}
