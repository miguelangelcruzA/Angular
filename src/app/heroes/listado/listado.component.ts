import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  listado: string[] = ["capitan America","Thor","Hulk","Hawk Eye","Spiderman"];

  heroeBorrado: string = '';

  BorrarHeroe(){

    this.heroeBorrado = this.listado.shift();

    console.log("deleting....")
  }


}
