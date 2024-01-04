import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean=false;
  constructor() { }
  login(AdminAccessCode:string){
    this.isLoggedIn=AdminAccessCode=="vicky123";
  }
  logout(){
    this.isLoggedIn=false;
  }
}
