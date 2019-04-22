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
  mouseoverLogin;
  loginInvalid = false;
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues){
    this.auth.loginUser(formValues.userName, formValues.password).subscribe(res => {
      if(!res) {
        this.loginInvalid = true;
      }
      else {
        this.router.navigate(['events'])
      }
    })
  }

  cancel(){
    this.router.navigate(['events']);
  }
}
