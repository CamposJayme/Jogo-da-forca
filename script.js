// import entradaDados from 'readline-sync';
import listaDeFrutas from './dados/frutas.js';
import {selecionarFrutas, ocultarPalavra} from './funcoes/funcoes.js';



//------------------------ WORKSPACE -------------------------//
console.log("------------JOGO DA FORCA------------\n");

const frutaSelecionada = selecionarFrutas(listaDeFrutas); //Armazena fruta aleatória selecionada
console.log(`Adivinhe o nome da fruta com ${frutaSelecionada.length} letras`);
console.log("\nFruta: " + ocultarPalavra(frutaSelecionada));
