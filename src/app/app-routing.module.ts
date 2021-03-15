import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from './components/services/services.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
