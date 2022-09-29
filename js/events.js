import {
  buttonForestSvg,
  buttonRainSvg,
  buttonCoffeeSvg,
  buttonFirePlaceSvg,
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonMinusFive,
  forestVolume,
  rainVolume,
  coffeeVolume,
  fireVolume
} from './elements.js'
import Sound from './sounds.js'

export default function Event({ timer, backgroundSound }) {
  // botões de controle
  buttonPlay.addEventListener('click', function () {
    timer.countdown()
    Sound().pressButton()
  })

  buttonStop.addEventListener('click', function () {
    timer.stopRestart()
    Sound().pressButton()
  })

  buttonPlusFive.addEventListener('click', function () {
    timer.plusFiveMinutes()
    Sound().pressButton()
  })

  buttonMinusFive.addEventListener('click', function () {
    timer.minusFiveMinutes()
  })

  // sons da floresta
  buttonForestSvg.addEventListener('click', function () {
    backgroundSound.forestSound()
  })

  buttonRainSvg.addEventListener('click', function () {
    backgroundSound.rainSound()
  })

  buttonCoffeeSvg.addEventListener('click', function () {
    backgroundSound.coffeeShopSound()
  })

  buttonFirePlaceSvg.addEventListener('click', function () {
    backgroundSound.firePlaceSound()
  })

  forestVolume.addEventListener('input', function () {
    Sound().setForestVolume(forestVolume.value)
    console.log(Sound().forest.volume)
  })
}
