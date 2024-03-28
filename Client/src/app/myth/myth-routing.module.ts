import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { CurrentMythComponent } from './current-myth/current-myth.component';
import { AuthActivate } from '../guard/auth.activate';
import { DeleteComponent } from './delete/delete.component';
import { LikeComponent } from './like/like.component';


const routes: Routes = [
  { path:'myths', children: [
    { path:'all', component: AllComponent },
    { path:'create', component: CreateComponent, canActivate: [AuthActivate] },
    { path:':mythId/edit', component: EditComponent, canActivate: [AuthActivate] },
    { path: ':mythId/details', component: CurrentMythComponent, pathMatch: 'full', },
    
    { path: ':mythId/delete', component: DeleteComponent, pathMatch: 'full', },
    { path: ':mythId/like', component: LikeComponent, pathMatch: 'full', },
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
