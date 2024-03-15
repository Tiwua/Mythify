import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AllComponent } from './all/all.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    AllComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateComponent,
    EditComponent,
    AllComponent,
  ]
})
export class MythModule { }
