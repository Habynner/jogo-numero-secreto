let listaNumerosSort = [];
const qntNumeros = 10;
function exibirMsgInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolher um número entre 1 & 10');
}
exibirMsgInicial();
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function gerarNumeroAleatorio(numeroMax){
let numEscolhido = parseInt(Math.random() * numeroMax + 1);
let qntElementosLista = listaNumerosSort.length;
console.log(listaNumerosSort);
if(qntElementosLista == numeroMax){
    console.log(qntElementosLista);
 listaNumerosSort = [];
}
if(listaNumerosSort.includes(numEscolhido)){
    return gerarNumeroAleatorio();
}else{
    listaNumerosSort.push(numEscolhido);
    console.log(listaNumerosSort);
    return numEscolhido;
}
}

let numeroAleatorio = gerarNumeroAleatorio(qntNumeros);
let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numeroAleatorio);
    if(chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou !!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        const msgTentativa = `Parabéns você acertou o número secreto com ${tentativas} ${palavraTentativa} !`;
        exibirTextoNaTela('p', msgTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
     }else{
        if(chute > numeroAleatorio){
            exibirTextoNaTela('h1', 'Tente novamente, ainda não foi desta vez.');
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('h1', 'Tente novamente, ainda não foi desta vez.');
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        tentativas++;
        limparCampo();
    }
    return chute;
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    exibirMsgInicial();
    tentativas = 1;
    numeroAleatorio = gerarNumeroAleatorio(qntNumeros);
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}