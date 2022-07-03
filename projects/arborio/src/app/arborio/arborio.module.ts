import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArborioRoutingModule } from './arborio-routing.module';
import { ArborioComponent } from './arborio.component';


@NgModule({
  declarations: [
    ArborioComponent
  ],
  imports: [
    CommonModule,
    ArborioRoutingModule
  ]
})
export class ArborioModule { }
