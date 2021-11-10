import { escapar } from "../decorators/escapar.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View< Negociacoes>{    

    
    protected template(model: Negociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `<tr>
                        <td>${this.formatarData(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>`                   
                    
                }).join('')}
            </tbody>
        </table>
        `
    }

    private formatarData(data: Date){
        return new Intl.DateTimeFormat()
        .format(data)
    }

    public update(model: Negociacoes): void{
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}