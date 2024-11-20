// 1) Função que seleciona fruta de forma aleatória:
function selecionarFrutas(fruta) {
    const frutaSelecionada = fruta[Math.floor(Math.random(0, 1) * fruta.length)];
    return frutaSelecionada;
}

// 2) Função responsável por ocultar as demais letras da fruta selecionada e apresentar apenas a primeira letra:
function ocultarPalavra(fruta) {
    const frutaPrimeiraLetra = fruta[0];
    const underline = "_".repeat(fruta.length - 1);
    return frutaPrimeiraLetra + underline;
}

// 3) Função responsável por validar valor inserido (deve validar apenas um caracter entre a - z):
function validarLetraDigitada(valorInserido) {
    if (valorInserido.length === 1 && valorInserido.match(/[a-z]/)) {
        return true;
    } else {
        return false;
    }
}

// 4)
function verificarJogoGanho(palavraOculta, fruta) {
    if (palavraOculta === fruta) {
        return true;
    } else {
        return false;
    }
}

// 5)
function verificarLetraNaPalavraEscolhida(valorInserido, fruta) {
    if (fruta.includes(valorInserido)) {
        return true;
    } else {
        return false;
    }
}

// 6)
function atualizarJogadasRestantes(erros) {
    return 4 - erros;
}


// 7) Função que vai atualizar a palavra oculta caso o usuário acerte a letra:
function atualizarPalavraOculta(valorInserido, frutaOcultada, fruta) {
    const frutaOcultadaSplit = frutaOcultada.split("");

    for(let i = 0; i < fruta.length; i++) {
        if (valorInserido == fruta[i]) {
            frutaOcultadaSplit[i] = valorInserido;
        }
    }

    return frutaOcultadaSplit.join('')
}

// 8)
function exibirMensagemFimDeJogo(statusJogo) {
    if (statusJogo === 'venceu') {
        console.log("\n--------------VOCÊ VENCEU!!-------------");
    } else {
        console.log("\n--------------VOCÊ PERDEU!!-------------");
    }
}

export { 
    selecionarFrutas, 
    ocultarPalavra, 
    validarLetraDigitada, 
    verificarJogoGanho,
    verificarLetraNaPalavraEscolhida,
    atualizarJogadasRestantes,
    atualizarPalavraOculta, 
    exibirMensagemFimDeJogo
};