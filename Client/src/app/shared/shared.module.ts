import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    EmailValidatorDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    EmailValidatorDirective,
    LoaderComponent
  ]
})
export class SharedModule { }
