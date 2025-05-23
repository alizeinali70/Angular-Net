import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  //{ path: '', component: LoginComponent }, // default route
   {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((u) => u.HomeComponent)
    },
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadComponent: () => {
  //     return import('./login/login.component').then((u) => u.LoginComponent)
  //   },
  // }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {

// }
