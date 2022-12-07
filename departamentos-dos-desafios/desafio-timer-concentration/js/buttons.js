export function Buttons(){

    const playClock = document.querySelector('.play')
    const stopClock = document.querySelector('.stop')
    const moreTime = document.querySelector('.more')
    const lessTime = document.querySelector('.less')
    // Botões Ambiente

    const florest = document.querySelector('.florest')
    const rain = document.querySelector('.rain')
    const coffeeshop = document.querySelector('.coffeeShop')
    const bonfire = document.querySelector('.bonfire')

    return {
        playClock,
        stopClock,
        moreTime,
        lessTime,
        florest,
        rain,
        coffeeshop,
        bonfire
    }
}
