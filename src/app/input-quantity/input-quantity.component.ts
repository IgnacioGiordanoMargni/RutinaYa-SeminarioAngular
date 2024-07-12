import { Component, Input, input, Output } from '@angular/core';
import { EventEmitter } from 'node:stream';
import { Ejercicios } from '../app-ejercicios-list/Ejercicios';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrl: './input-quantity.component.css'
})
export class InputQuantityComponent {
@Input() ejercicio: Ejercicios;
@Input() tipo: string;




  UpQuantity( ): void {
    this.ejercicio[this.tipo]++;
   
  }
  
  DownQuantity(){
    if( this.ejercicio[this.tipo] >0)
      this.ejercicio[this.tipo]--;
      
  }


}
