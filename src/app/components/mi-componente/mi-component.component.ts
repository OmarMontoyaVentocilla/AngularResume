import {Component} from '@angular/core';

@Component({
   selector: 'mi-componente',
   // template: `<h1>
   //             Este es mi componenete
   //             <span>{{ titulo }} app is {{comentario}}</span>
   //             </h1>`
   templateUrl: './mi-component.html',
   // styleUrls: ['./app.component.css']
 })

 export class MiComponente {
   public titulo:string;
   public comentario:string;
   public year:number;

   constructor(){
      this.titulo='Hola mundo';
      this.comentario="Hola osoy un comentario";
      this.year=2020;
      console.log("componenete cargado");
   }
 }