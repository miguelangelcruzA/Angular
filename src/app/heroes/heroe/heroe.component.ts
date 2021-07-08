import { Component } from "@angular/core";


@Component({

    selector: "app-heroe",
    templateUrl: "heroe.component.html"

})


export class HeroeComponent{

    nombre: string  = "Ironman";
    edad: number = 34;


    cambiarNombre(): void {

        this.nombre = "Captain America";


    }

    cambiarEdad(): void {

        this.edad = 74;


    }



}
