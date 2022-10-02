import Sound from './sounds.js'
import Timer from './timer.js'
import BackgroundSound from './backgroundSound.js'
import {
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFirePlace,
  minutesDisplay,
  secondsDisplay,
  forestVolume,
  rainVolume,
  coffeeVolume,
  fireVolume
} from './elements.js'
import Event from './events.js'

const sounds = Sound()

forestVolume.addEventListener('change', function () {
  const { forest } = sounds;
  forest.volume = forestVolume.value / 100
});

rainVolume.addEventListener('change', function(){
  const { rain } = sounds;
  rain.volume = rainVolume.value / 100
})

coffeeVolume.addEventListener('change', function(){
  const { coffee } = sounds;
  coffee.volume = coffeeVolume.value / 100
})

fireVolume.addEventListener('change', function(){
  const { fire } = sounds;
  fire.volume = fireVolume.value / 100
})


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
