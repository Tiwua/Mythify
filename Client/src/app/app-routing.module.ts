import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error/error.component';

const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: '/home' },
   { path: 'home', component: HomeComponent },
   { 
     path: 'myth', loadChildren: () => import('./myth/myth.module').then((m) => m.MythModule)
   },
   { 
    path: 'user', loadChildren: () => import('./user/user.module').then((u) => u.UserModule)
   },
   { path: '**', redirectTo: '/404' },
   { path: '404', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
