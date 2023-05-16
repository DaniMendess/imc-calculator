
import { Modal} from "./modal.js"
import { AlertErro } from "./alert-error.js"


// Variáveis 

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

console.log(inputHeight)









// maneira de criar e atribuir função a um evento
form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    const result = IMC(weight,height)
    


    const alertError = notNumber(weight) || notNumber(height)
    //condição se nao tiver numeros no input, aparecer msg de erro
    if(alertError){
        AlertErro.open()
        return;
    }
    AlertErro.close()
    
   const message = `Seu IMC é de ${result}`
   Modal.message.innerText = message

   //chamando a function da estrutura do Modal la de cima
   Modal.open()


}


function notNumber(value){
    return isNaN(value) || value == ""
}




function IMC(weigth,heigth){
    return (weigth / ((heigth / 100) ** 2)).toFixed(2)
}

// Fechar janela de erro ao digitar no input
inputHeight.oninput = function(){
    AlertErro.close()
}

inputWeight.oninput = function(){
    AlertErro.close()
}