import { Component } from "@angular/core"

@Component({
    selector: "contador-app",
    template: `
        <h1>Hola Mundo</h1>
        <h3>{{base}}</h3>
        <button (click) ="acomular(base)"> {{base}} </button>

        <span> {{numero}} </span>

        <button (click)="acomular(base * -1)"> {{base * -1}} </button>

    `

    

})

export class contador{
    title = 'bases';
    numero: number = 10;
    base: number = 5;
  
  
   acomular(numero: number){
   this.numero += numero
   }

}