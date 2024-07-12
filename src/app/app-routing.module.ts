import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import path from 'path';

import { AppEjerciciosListComponent } from './app-ejercicios-list/app-ejercicios-list.component';
import { RutinaComponent } from './rutina/rutina.component';
const routes: Routes = [
  {
   path:'',
   redirectTo:'Home',
   pathMatch:'full'

   
  },
  {
  path:'Home',
  component:AppEjerciciosListComponent
  },
  {
    path:'Rutina',
    component:RutinaComponent
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
