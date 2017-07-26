import { Component } from '@angular/core';

import { fallIn } from '../shared/animations/fall-in.animation';

import { AuthService } from '../shared/providers/auth/auth.service';

@Component({
	selector: 'login-component',
	styleUrls: ['./login.component.css'],
    animations: [fallIn],
	templateUrl: './login.component.html'
})
export class LoginComponent {
     constructor(private authService: AuthService) {}

     login(): void {
         this.authService.loginWithGoogle();
     }
}
