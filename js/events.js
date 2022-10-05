import {
  buttonForestSvg,
  buttonRainSvg,
  buttonCoffeeSvg,
  buttonFirePlaceSvg,
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonMinusFive,
  lightButton,
  darkButton,
} from './elements.js'
import Sound from './sounds.js'
import DarkMode from './darkMode.js'

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

  // dark mode
  lightButton.addEventListener('click', function(){
    DarkMode().darkModeOn()
  })

  darkButton.addEventListener('click', function(){
    DarkMode().darkModeOff()
  })
}
