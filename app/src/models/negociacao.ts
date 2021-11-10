import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number,
    ){ }

    get data():Date {
        const data = new Date(this._data.getTime())
        return data;
    }

    public paraTexto(): string{
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `
    }

    get volume():number{
        return this.quantidade * this.valor;
    }

    public static criaNegociacao(dataString: string, valorString: string, quantidadeString: string) : Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(valorString);
        const valor = parseFloat(quantidadeString);
        return new Negociacao(date, quantidade, valor)

    }
    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}