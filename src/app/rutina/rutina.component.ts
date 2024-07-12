import { Component, Injectable } from '@angular/core';
import { RutinaDataService } from '../rutina-data.service';
import { Ejercicios } from '../app-ejercicios-list/Ejercicios';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrl: './rutina.component.css'
})


export class RutinaComponent {
Rutina$: Observable <Ejercicios[]>;
constructor(private rutina: RutinaDataService){
  this.Rutina$= rutina.ListaEjercicios.asObservable();
}


EliminarEjercicio(ejercicio: Ejercicios){
  this.rutina.EliminarEjercicio(ejercicio);
}




}
