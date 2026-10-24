import { lerArquivo } from './Read.js';
import Interpretador from './Interpretador.js';

const caminho = process.argv[2];

if (!caminho) {
  console.error('Uso: node --experimental-default-type=module teste.js <arquivo.json>');
  process.exitCode = 1;
} else {
  try {
    const arquivo = lerArquivo(caminho);
    const programa = Interpretador(arquivo, { verbose: true });

    console.log(`Programa: ${programa.nome}`);
    console.log(`Resultado: ${programa.resultado}`);
    console.log(`Estado: ${programa.estado}`);
  } catch (erro) {
    console.error(`Erro: ${erro.message}`);
    process.exitCode = 1;
  }
}
