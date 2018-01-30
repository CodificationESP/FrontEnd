import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentification/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  connected = false;
  constructor(private router: Router, private authenticationService: AuthenticationService) {}
  isConnected(){
    if (localStorage.getItem('currentUser')) {
        // logged in so return true
       return true;
    }
    else
      return false;
}

logout()
  {
    this.authenticationService.logout();
    this.router.navigate(['/authentification']);
  }

}
