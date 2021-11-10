import { Imprimivel } from '../utils/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Imprimivel {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);

    }

    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }

    public paraTexto(): string{
        return `
            Negociações: ${this.negociacoes}
        `
    }
}
