import Sound from './sounds.js'
import Timer from './timer.js'
import BackgroundSound from './backgroundSound.js'
import {
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFirePlace,
  minutesDisplay,
  secondsDisplay
} from './elements.js'
import Event from './events.js'

const sounds = Sound()
const timer = Timer({
  minutesDisplay,
  secondsDisplay
})
const backgroundSound = BackgroundSound({
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFirePlace,
  sounds
})
Event({ timer, backgroundSound })
