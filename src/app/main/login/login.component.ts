import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  a = 0;

  log() {
    this.a = 0;
  }
  register() {
    this.a = 1;
  }
  forgot() {
    this.a = 2;
  }

  constructor() { }
  onSubmit(data){
    console.warn(data);
  }
}
