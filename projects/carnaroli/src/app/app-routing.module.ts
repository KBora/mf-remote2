import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'carnaroli', loadChildren: () => import('./carnaroli/carnaroli.module').then(m => m.CarnaroliModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
