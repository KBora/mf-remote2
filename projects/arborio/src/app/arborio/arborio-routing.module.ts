import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArborioComponent } from './arborio.component';

const routes: Routes = [{ path: '', component: ArborioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArborioRoutingModule { }
