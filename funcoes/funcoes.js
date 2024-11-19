//Função que seleciona fruta de forma aleatória:
function selecionarFrutas(frutas) {
    const frutasSelecionada = frutas[Math.floor(Math.random(0, 1) * frutas.length)];
    return frutasSelecionada;
}

//Função responsável por ocultar as demais letras da fruta selecionada e apresentar apenas a primeira letra:
function ocultarPalavra(frutas) {
    const frutaPrimeiraLetra = frutas[0];
    const underline = "_".repeat(frutas.length - 1);
    return frutaPrimeiraLetra + underline;
}

export { selecionarFrutas, ocultarPalavra };