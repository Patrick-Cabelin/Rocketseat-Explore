import { Modal } from './modal.js';
import { error } from './error.js'
import { IMC , notNumber } from "./utils.js";

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit= (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    const result = IMC(weight, height)
    const IMCmessage = `Seu IMC é de ${result}`

    const showError = notNumber(weight) || notNumber(height)

    if(showError){
        return error.open()
    }

    error.close()
    Modal.open()
    Modal.message.innerHTML = IMCmessage
}

inputWeight.oninput = () => error.close()
inputHeight.oninput = () => error.close()