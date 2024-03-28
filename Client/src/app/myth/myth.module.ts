import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AllComponent } from './all/all.component';
import { CurrentMythComponent } from './current-myth/current-myth.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { DeleteComponent } from './delete/delete.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    AllComponent,
    CurrentMythComponent,
    LikeComponent,
    DeleteComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  exports: [
    CreateComponent,
    EditComponent,
    AllComponent,
  ]
})
export class MythModule { }
