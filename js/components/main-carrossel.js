// Acessar a Janela (browser)
// Pegar o HTML
// Pegar o botão
// Saber que está sendo clicado no botão


// const não pode se mudar o valor = constante
const buttonRight = window.document.querySelector('.button-arrow.-right');  //Pode se usar o Window.document ou só document
const buttonLeft = window.document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
// let pode mudar o valor da variavel 
let pixel = 0;

// console.log(buttonRight)  MOSTRA NO CONSOLE DO INSPECIONAR ELEMENTO SE ESTA CERTO

buttonRight.addEventListener('click', function() 
{
    pixel = pixel + 50;
    elements.style = `transform: translateX(${pixel}px);`;
});

buttonLeft.addEventListener('click', function () 
{
    pixel = pixel - 50;
    elements.style = `transform: translateX(${pixel}px);`;
});