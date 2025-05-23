import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { HomepageComponent } from './home/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // default route
  
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadComponent: () => {
  //     return import('./home/user/user.component').then((u) => u.UserComponent)
  //   },
  // }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {

// }
