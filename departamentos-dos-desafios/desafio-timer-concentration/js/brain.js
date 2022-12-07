export {Brain}

function Brain( { 
    minuteHand,
    secondHand,
    timerOut,
    setButtons
    }   
) {

    let Minutes = Number(minuteHand.textContent)
    let Seconds = Number(secondHand.textContent)
    function starterClock(){
        
        function counter(){
            let EndCicle = Minutes <= 0 && Seconds <= 0 
            
            secondHand.textContent="00"

            if(Seconds <=0){
                Seconds = 60
                --Minutes
            }

            if(EndCicle){
                finishClock()
                return
            }
            --Seconds
            
            clockDisplay(Minutes,Seconds)

            starterClock()
        }
        
        timerOut = setTimeout(counter, 1000)
    }
    
    function clockDisplay(Minutes, Seconds) {
        minuteHand.textContent = String(Minutes).padStart(2, '0')
        secondHand.textContent = String(Seconds).padStart(2, '0')
    }

    function finishClock() {
        minuteHand.textContent = '00'
        secondHand.textContent = '00'
        clearTimeout(timerOut)
    }
    
    function controlTime(){
        let moreORless= event.path[1].classList.value == "less"
        clearTimeout(timerOut)
        
        if(moreORless){
            Minutes= Minutes - 5
            clockDisplay(Minutes, Seconds)
            return
        }
        Minutes = Minutes + 5
        clockDisplay(Minutes,Seconds)

    }

        const cardSound ={
            florest: setButtons.florest,
            rain: setButtons.rain,
            coffeeShop:setButtons.coffeeshop,
            bonfire: setButtons.bonfire,
        }
        function changes(cardOne, cardTwo, cardThree){
            cardOne.classList.remove('select')
            cardTwo.classList.remove('select')
            cardThree.classList.remove('select')
        }

        function selectFlorest(){
            changes(cardSound.rain, cardSound.coffeeShop, cardSound.bonfire)
            cardSound.florest.classList.add('select')
        }
        function selectRain(){
            changes(cardSound.florest, cardSound.coffeeShop, cardSound.bonfire)
            cardSound.rain.classList.add('select')
        }
         function selectCoffeeShop(){
            changes(cardSound.rain, cardSound.florest, cardSound.bonfire)
            cardSound.coffeeShop.classList.add('select')
        }
        function selectBonfire(){
            changes(cardSound.rain, cardSound.coffeeShop, cardSound.florest)
            cardSound.bonfire.classList.add('select')
        }

     
    return {
        starterClock,
        finishClock,
        clockDisplay,
        controlTime,
        selectFlorest,
        selectRain,
        selectCoffeeShop,
        selectBonfire
    }
}