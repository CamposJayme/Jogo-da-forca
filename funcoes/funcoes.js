//Função que seleciona fruta de forma aleatória:
function selecionarFrutas(fruta) {
    const frutaSelecionada = fruta[Math.floor(Math.random(0, 1) * fruta.length)];
    return frutaSelecionada;
}

//Função responsável por ocultar as demais letras da fruta selecionada e apresentar apenas a primeira letra:
function ocultarPalavra(fruta) {
    const frutaPrimeiraLetra = fruta[0];
    const underline = "_".repeat(fruta.length - 1);
    return frutaPrimeiraLetra + underline;
}

//Função que vai atualizar a palavra oculta caso o usuário acerte a letra:
function atualizarPalavraOculta(valorInserido, frutaOcultada, fruta) {
    const frutaOcultadaSplit = frutaOcultada.split("");

    for(let i = 0; i < fruta.length; i++) {
        if (valorInserido == fruta[i]) {
            frutaOcultadaSplit[i] = valorInserido;
        }
    }

    return frutaOcultadaSplit.join('')
}

//Função responsável por validar valor inserido (deve validar apenas um caracter entre a - z):
function validarLetraDigitada(valorInserido) {
    if (valorInserido.length === 1 && valorInserido.match(/[a-z]/)) {
        return true
    } else {
        return false
    }
}

export { selecionarFrutas, ocultarPalavra, atualizarPalavraOculta, validarLetraDigitada };