/*
const modalWraper = document.querySelector('.modal-wraper')
const modalMessage = document.querySelector('.modal h2 span')

const btnClose = document.querySelector('.modal .close')
*/


// Estruturando dados do modal para ficar mais facil de dar manutenção e melhor legibilidade
export const Modal = {
    wraper: document.querySelector('.modal-wraper'),
    message: document.querySelector('.modal h2 span'),
    buttonClose: document.querySelector('.modal .close'), 
    
    open(){
        Modal.wraper.classList.add('open')
    },
    close(){
        Modal.wraper.classList.remove('open')
    }
}


// função com evento para fechar quando clicar no botão 
Modal.buttonClose.onclick = function(){
    //chamando a function da estrutura do Modal la de cima
   Modal.close()
}


window.addEventListener('keydown', handleClick)


function handleClick(event){
    event.key
    if(event.key === 'Escape'){
        Modal.close()
    }
}