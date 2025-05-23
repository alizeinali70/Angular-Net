import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  template: `
    <!-- <app-homepage /> -->
     <app-login/>
    <router-outlet />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular-Net';
}
