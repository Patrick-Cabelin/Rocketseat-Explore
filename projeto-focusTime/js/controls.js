export {Control}
 
function Control(
  {
    buttonStop,
    buttonPlay,
    buttonPause,
    buttonConfigWatch,
    buttonMute,
    buttonSound
  }
) {

  function rest() {
      buttonPlay.classList.remove('off')
      buttonPause.classList.add('off')
      buttonConfigWatch.classList.remove('off')
      buttonStop.classList.add('off')
    }

    function play() {
      buttonPlay.classList.add("off")
      buttonPause.classList.remove("off")
      buttonConfigWatch.classList.add("off")
      buttonStop.classList.remove("off")
    }
    

    function pause() {
    buttonPlay.classList.remove("off")
    buttonPause.classList.add("off")
    
    clearTimeout(timerTimeout)
    }
    
    function sound() {
      buttonSound.classList.toggle("off")
      buttonMute.classList.toggle("off")
    }

    function configWatch() {
      
      let newMinutes = prompt("Quantos minutos deseja ?") || 0
      countMinutes.textContent = String(minutes).padStart(2, "0")
    
      if(!newMinutes){
        return false
      }
    
      return newMinutes
    
    }
    return {
      play,
      pause,
      sound,
      rest,
      configWatch
    }


}


