import entradaDados from 'readline-sync';
import listaDeFrutas from './dados/frutas.js';
import {selecionarFrutas, ocultarPalavra, atualizarPalavraOculta, validarLetraDigitada} from './funcoes/funcoes.js';


//------------------------ WORKSPACE INTERFACE -------------------------//
console.log("------------JOGO DA FORCA------------\n");

const frutaSelecionada = selecionarFrutas(listaDeFrutas); //Armazena fruta aleatória selecionada
console.log(`Adivinhe o nome da fruta com ${frutaSelecionada.length} letras`);
console.log("\nFruta: " + ocultarPalavra(frutaSelecionada));

const valorInserido = entradaDados.question('Digite uma letra: ');
const validarLetra = validarLetraDigitada(valorInserido);
console.log(validarLetra);

let frutaAtualizada = atualizarPalavraOculta(valorInserido, ocultarPalavra(frutaSelecionada), frutaSelecionada);
console.log(frutaAtualizada);