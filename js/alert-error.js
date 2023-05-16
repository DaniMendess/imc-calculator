export const AlertErro = {
    message: document.querySelector('.alert-error'),

    open(){
        AlertErro.message.classList.add('open')
    },

    close(){
        AlertErro.message.classList.remove('open')
    }
}