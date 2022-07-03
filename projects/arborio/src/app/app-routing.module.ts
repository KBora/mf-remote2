import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { 
    path: 'arborio', 
    loadChildren: () => import('./arborio/arborio.module').then(m => m.ArborioModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
