import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmailValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    EmailValidatorDirective
  ]
})
export class SharedModule { }
