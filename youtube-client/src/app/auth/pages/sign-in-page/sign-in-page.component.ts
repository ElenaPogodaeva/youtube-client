import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent {
  token: string = 'some-token';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.token);
  }
}
