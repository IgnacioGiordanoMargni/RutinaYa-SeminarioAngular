import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEjerciciosListComponent } from './app-ejercicios-list/app-ejercicios-list.component';

import { InputQuantityComponent } from './input-quantity/input-quantity.component';
import { FormsModule } from '@angular/forms';
import { RutinaComponent } from './rutina/rutina.component';

@NgModule({
  declarations: [
    AppComponent,
    AppEjerciciosListComponent,
    InputQuantityComponent,
    RutinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
