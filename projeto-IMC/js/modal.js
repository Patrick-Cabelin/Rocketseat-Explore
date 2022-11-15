export const Modal = {
    Wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-wrapper .title span'),
    buttonClose: document.querySelector('.modal h2 button.close'),
 

    open() { 
        Modal.Wrapper.classList.toggle('open')
    },
    close() {
        Modal.Wrapper.classList.toggle('open')
    }, 
    
}

Modal.buttonClose.onclick = () =>{
    Modal.close()
}

const esc = event => {
    if(event.key === 'Escape'){
    Modal.close()
}

}

window.addEventListener('keydown', esc)