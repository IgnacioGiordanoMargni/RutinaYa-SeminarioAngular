import { Component } from '@angular/core';
import { Ejercicios } from './Ejercicios';
import { RutinaDataService } from '../rutina-data.service';
import { RutinaComponent } from '../rutina/rutina.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ejercicios-list',
  templateUrl: './app-ejercicios-list.component.html',
  styleUrl: './app-ejercicios-list.component.scss'
})

export class AppEjerciciosListComponent {
 Ejercicios : Ejercicios[] =[ {
  Name:"Flexiones",
  Grupo:"Pecho",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Press de banca",
  Grupo:"Pecho",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Cables",
  Grupo:"Pecho",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Sentadilla",
  Grupo:"Piernas",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Peso muerto",
  Grupo:"Piernas",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Curl de bicep",
  Grupo:"Brazos",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Jalón en polea",
  Grupo:"Brazos",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Hip thrust",
  Grupo:"Gluteos",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Extension de cuadricep",
  Grupo:"Piernas",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Press en banco inclinado",
  Grupo:"Pecho",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Dominada",
  Grupo:"Espalda",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Jalón al pecho",
  Grupo:"Espalda",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Press militar",
  Grupo:"Hombro",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Elevacion lateral",
  Grupo:"Hombro",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
 {
  Name:"Crunch",
  Grupo:"Abdomen",
  Series:0,
  Repeticiones:0,
  Agregado:false,
 },
]


  Rutina$: Observable <Ejercicios[]>;
  constructor(private rutina: RutinaDataService){
  this.Rutina$= rutina.ListaEjercicios.asObservable();
}

ngOnInit(){
  
}

AnadirALaRutina(ejercicio: Ejercicios){
  this.rutina.AnadirALaRutina(ejercicio);
}
ChangeBoolean(ejercicio: any, property: string): void {
  if(ejercicio[property]){
    ejercicio[property]=false;
  } else {
    ejercicio[property]=true;
  }
}

EliminarEjercicio(ejercicio: Ejercicios){
    this.rutina.EliminarEjercicio(ejercicio);
}

}


