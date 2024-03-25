import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserActivate } from '../guard/user.activate';

const routes: Routes = [
  { path:'login', component: LoginComponent, canActivate: [UserActivate] },
  { path:'register', component: RegisterComponent, canActivate: [UserActivate] },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
