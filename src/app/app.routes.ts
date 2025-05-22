import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  //{ path: '', component: HomepageComponent }, // default route
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Home/homepage/homepage.component').then((m) => m.HomepageComponent)
    },
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Home/user/user.component').then((u) => u.UserComponent)
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
