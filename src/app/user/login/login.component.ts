import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password;
  userName;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(formValues){
    this.auth.loginUser(formValues.userName, formValues.password);
  }
}
