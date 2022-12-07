import {Control} from './controls.js';
import { Timer } from './timer.js'

const buttonPlay = document.querySelector('#play')
const buttonConfigWatch = document.querySelector('#stopWatch')
const buttonPause = document.querySelector('#pause')
const buttonStop = document.querySelector('#stop')
const buttonSound = document.querySelector('#sound')
const buttonMute = document.querySelector('#mute')

let countMinutes= document.querySelector("#minutes")
let countSeconds= document.querySelector("#seconds")
let minutes
let timeTimerOut

let control = Control(
  {
    buttonPlay,
    buttonPause,
    buttonSound,
    buttonConfigWatch,
  }
)
let timer = Timer(
  {
    minutes,
    seconds,
    timeTimerOut,
    reset: control.rest
  }
)


buttonPlay.addEventListener("click", control.play)

buttonPlay.addEventListener("click", timer.countdown())

buttonPause.addEventListener("click", control.pause)

buttonStop.addEventListener("click", control.rest)

buttonConfigWatch.addEventListener("click", ()=>{
  let newMinutes = control.configWatch()

  if(!newMinutes){
    timer.reset()
    return
  }

  minutes = newMinutes
  timer.updateTimer(minutes,0)
})

buttonSound.addEventListener("click", control.sound)

buttonMute.addEventListener("click", control.sound)

