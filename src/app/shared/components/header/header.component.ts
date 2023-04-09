import { Component, inject } from '@angular/core';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  authService = inject(AuthService);

  ngOnInit(){
    setTimeout(() => {
      this.authService.isLoggedIn = true;
    }, 3000)
  }

  handleLogin(){
    this.authService.isLoggedIn = !this.authService.isLoggedIn;
  }
}
