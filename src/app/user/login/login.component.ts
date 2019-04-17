import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password;
  userName;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues){
    this.auth.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }
}
