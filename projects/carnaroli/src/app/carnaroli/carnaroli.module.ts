import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarnaroliRoutingModule } from './carnaroli-routing.module';
import { CarnaroliComponent } from './carnaroli.component';


@NgModule({
  declarations: [
    CarnaroliComponent
  ],
  imports: [
    CommonModule,
    CarnaroliRoutingModule
  ]
})
export class CarnaroliModule { }
