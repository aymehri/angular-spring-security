import { AuthServerProvider } from './auth-session.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authServerProvider: AuthServerProvider) {

  }
  click(){
    const credentials = {
      username: 'user',
      password: 'password',
      rememberMe: false
    }
    this.authServerProvider.login(credentials).subscribe(result => console.log(result));
  }
}
