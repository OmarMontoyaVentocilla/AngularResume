import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  status="ANTES DE ENVIAR";
  nombre="omar montoya";
  defaultName="nombre x defecto";
  resultado:number;
  displayPassword=true;
  lightStatus="GREEN";
  textoMostrar="hola mundo soy omar";
  names=['omar','montoya','ventocilla'];

  courses=[];
  errorMessage='';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courses=this.courseService.getCourses();
    // console.log(this.courses);
    this.courseService.getCourses().subscribe(data => this.courses=data, 
                                              error => this.errorMessage=error);
  }

  @Input() parentDataToChild

  onSendForm(){
    this.status="Formulario enviado";
  }

  onDefaultForm(){
    this.defaultName="a cambiado mi nombre";
  }

  onSumaForm(numero1,numero2){
     this.resultado=parseInt(numero1)+parseInt(numero2);
     console.log(this.resultado);
     return this.resultado;
  }

}
