import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { OverviewComponent } from '../overview/overview.component';
import { CarnaroliComponent } from './carnaroli.component';

const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateComponent,
    pathMatch: 'full'
  },
  { path: '', component: CarnaroliComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarnaroliRoutingModule { }
