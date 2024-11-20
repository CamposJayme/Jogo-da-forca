import entradaDados from 'readline-sync';

import listaDeFrutas from './dados/frutas.js';

import {
    selecionarFrutas, 
    ocultarPalavra, 
    validarLetraDigitada, 
    verificarJogoGanho,
    verificarLetraNaPalavraEscolhida,
    atualizarJogadasRestantes,
    atualizarPalavraOculta,
    exibirMensagemFimDeJogo
} from './funcoes/funcoes.js';


function jogarForca() {

    //------------------------ INTERFACE -------------------------//
    console.log("------------JOGO DA FORCA------------\n");
    const frutaSelecionada = selecionarFrutas(listaDeFrutas); //Armazena fruta aleatória selecionada
    console.log(`Adivinhe o nome da fruta com ${frutaSelecionada.length} letras`);
    let palavraOculta = ocultarPalavra(frutaSelecionada);
    //------------------------ INTERFACE -------------------------//

    let erros = 0;
    let statusJogo = 'andamento';
    while (statusJogo === 'andamento') {
        console.log("\nFruta: " + palavraOculta);
        const valorInserido = entradaDados.question('Digite uma letra: ').toLowerCase();
        
        if (validarLetraDigitada(valorInserido)) {
            if (verificarLetraNaPalavraEscolhida(valorInserido, frutaSelecionada)) {
                palavraOculta = atualizarPalavraOculta(valorInserido, palavraOculta, frutaSelecionada);
                if (verificarJogoGanho(palavraOculta, frutaSelecionada)) {
                    statusJogo = 'venceu';
                }
            } else {
                erros++;

                const chances = atualizarJogadasRestantes(erros);

                if (chances > 0) { 
                    console.log(`OPÇÃO ERRADA! Você ainda tem ${chances} chance(s)!`);
                } else {
                    statusJogo = 'perdeu';
                }
            }
        } else {
            console.log("\nPor favor, digite uma letra válida.");  
        }

    }
    exibirMensagemFimDeJogo(statusJogo);
    console.log(`Palavra final: ${frutaSelecionada}`);

}

jogarForca();