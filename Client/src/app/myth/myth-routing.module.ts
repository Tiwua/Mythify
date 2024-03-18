import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { CurrentMythComponent } from './current-myth/current-myth.component';


const routes: Routes = [
  { path:'myths', children: [
    { path:'all', component: AllComponent },
    { path:'create', component: CreateComponent },
    { path:'edit', component: EditComponent },
    { path: ':mythId/details', component: CurrentMythComponent, pathMatch: 'full' },
  ]}
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
export class MythRoutingModule { }
