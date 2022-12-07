export function Timer(
  
  {
      minutes,
      seconds,
      timeTimerOut,
      resetControl,
  }

  )
  {

  function updateTimer(MinutesNew, seconds) {
      MinutesNew = MinutesNew === undefined? minutes: MinutesNew 
      seconds= seconds === undefined? 0: seconds
      countMinutes.textContent = String(minutes).padStart(2, "0")
      countSeconds.textContent = String(seconds).padStart(2, "0")
    }

  function reset() {
      updateTimer(minutes, 0)
      clearTimeout(timeTimerOut)
  }

  function countdown(){
    timeTimerOut = setTimeout(

        function() {
        let seconds =  Number(countSeconds.textContent)
        let minutes = Number(countMinutes.textContent)

        countSeconds.textContent = "00"
    
        if (minutes <= 0 && seconds <= 0) {
          restControl()
          updateTimer()
          return
        }
        
        if( seconds <= 0 ) {
          seconds = 60
          --minutes
        }
        
        updateTimer(minutes, String(seconds - 1))
        
        countdown()
      }, 1000)
  }

  return {
    countdown,
    reset,
    updateTimer,
  }

}