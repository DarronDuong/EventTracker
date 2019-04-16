import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  currentUser: IUser;

  loginUser(userName: string, password: string){
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Trung',
      lastName: 'Duong'
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }
}
