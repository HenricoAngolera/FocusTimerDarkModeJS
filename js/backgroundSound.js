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
    } else {
      buttonForest.classList.remove('selected')
      sounds.forest.pause()
    }
  }

  function rainSound() {
    if (!buttonRain.classList.contains('selected')) {
      buttonRain.classList.add('selected')
      sounds.rain.play()
    } else {
      buttonRain.classList.remove('selected')
      sounds.rain.pause()
    }
  }

  function coffeeShopSound() {
    if (!buttonCoffee.classList.contains('selected')) {
      buttonCoffee.classList.add('selected')
      sounds.coffee.play()
    } else {
      buttonCoffee.classList.remove('selected')
      sounds.coffee.pause()
    }
  }

  function firePlaceSound() {
    if (!buttonFirePlace.classList.contains('selected')) {
      buttonFirePlace.classList.add('selected')
      sounds.fire.play()
    } else {
      buttonFirePlace.classList.remove('selected')
      sounds.fire.pause()
    }
  }

  return {
    forestSound,
    rainSound,
    coffeeShopSound,
    firePlaceSound
  }
}
