import { Injectable } from '@angular/core';
import { Ejercicios } from './app-ejercicios-list/Ejercicios';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutinaDataService {

  private _ListaEjercicios: Ejercicios[]=[];
  ListaEjercicios: BehaviorSubject<Ejercicios[]>= new BehaviorSubject(this._ListaEjercicios);
  constructor() { }

  AnadirALaRutina(ejercicio: Ejercicios) {
    if(!this._ListaEjercicios.find(v1 => v1.Name == ejercicio.Name)){
      this._ListaEjercicios.push(ejercicio);
    }
    
    console.log(this._ListaEjercicios)
    this.ListaEjercicios.next(this._ListaEjercicios);
  }

  EliminarEjercicio(ejercicio: Ejercicios){
 this._ListaEjercicios= this._ListaEjercicios.filter(v1=> v1.Name !== ejercicio.Name);
  console.log(this._ListaEjercicios);
  }

  
}
