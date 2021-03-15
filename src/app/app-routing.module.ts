import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {GuardService} from './guard.service';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate: [GuardService] },
  // { path: '**', redirectTo: ''},
  {path: 'nav', component: NavbarComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
