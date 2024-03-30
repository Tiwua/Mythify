import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { CurrentMythComponent } from './current-myth/current-myth.component';
import { AuthActivate } from '../guard/auth.activate';


const routes: Routes = [
  { path:'myths', children: [
    { path:'all', component: AllComponent },
    { path:'create', component: CreateComponent, canActivate: [AuthActivate] },
    { path:':mythId/edit', component: EditComponent, canActivate: [AuthActivate] },
    { path: ':mythId/details', component: CurrentMythComponent, pathMatch: 'full', },
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
