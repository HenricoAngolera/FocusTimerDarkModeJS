import {
    lightButton,
    darkButton,
    body
  } from './elements.js'
  
  export default function DarkMode(){
  
    function darkModeOn(){
      body.classList.add('dark')
      lightButton.classList.add('hide')
      darkButton.classList.remove('hide')
    }
  
    function darkModeOff(){
      body.classList.remove('dark')
      lightButton.classList.remove('hide')
      darkButton.classList.add('hide')
    }
  
    return {
      darkModeOn,
      darkModeOff
    }
  
  }
  
  