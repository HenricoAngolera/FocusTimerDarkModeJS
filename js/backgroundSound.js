import {
  forestVolume,
  rainVolume,
  coffeeVolume,
  fireVolume
} from './elements.js'

export default function backgroundSound({
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFirePlace,
  sounds
}) {
  function forestSound() {
    if (!buttonForest.classList.contains('selected')) {
      buttonForest.classList.add('selected')
      sounds.forest.play()
      toggleForestVolume()
    } else {
      buttonForest.classList.remove('selected')
      sounds.forest.pause()
    }
  }

  function rainSound() {
    if (!buttonRain.classList.contains('selected')) {
      buttonRain.classList.add('selected')
      sounds.rain.play()
      toggleRainVolume()
    } else {
      buttonRain.classList.remove('selected')
      sounds.rain.pause()
    }
  }

  function coffeeShopSound() {
    if (!buttonCoffee.classList.contains('selected')) {
      buttonCoffee.classList.add('selected')
      sounds.coffee.play()
      toggleCoffeeVolume()
    } else {
      buttonCoffee.classList.remove('selected')
      sounds.coffee.pause()
    }
  }

  function firePlaceSound() {
    if (!buttonFirePlace.classList.contains('selected')) {
      buttonFirePlace.classList.add('selected')
      sounds.fire.play()
      toggleFireVolume()
    } else {
      buttonFirePlace.classList.remove('selected')
      sounds.fire.pause()
    }
  }

  function toggleForestVolume() {
    forestVolume.addEventListener('change', function () {
      const { forest } = sounds;
      forest.volume = forestVolume.value / 100
    });
  }

  function toggleRainVolume() {
    rainVolume.addEventListener('change', function () {
      const { rain } = sounds;
      rain.volume = rainVolume.value / 100
    });
  }

  function toggleCoffeeVolume() {
    coffeeVolume.addEventListener('change', function () {
      const { coffee } = sounds;
      coffee.volume = coffeeVolume.value / 100
    });
  }

  function toggleFireVolume() {
    fireVolume.addEventListener('change', function () {
      const { fire } = sounds;
      fire.volume = fireVolume.value / 100
    });
  }

  return {
    forestSound,
    rainSound,
    coffeeShopSound,
    firePlaceSound
  }
}
