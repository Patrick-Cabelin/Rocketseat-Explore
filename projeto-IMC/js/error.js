
export const error= {
    error: document.querySelector('.error'),
 
    open() {
       error.error.classList.toggle('open')
    },
    close() {
        error.error.classList.remove('open')
    }
}

