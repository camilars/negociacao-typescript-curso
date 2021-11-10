import { View } from "./view.js";

export class MensagemView extends View<string>{

    protected template(model: string): string{
        return`
            <p calss="alert alert-info"> ${model}</p>
        `
    }    

    public update(model: string): void{
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
