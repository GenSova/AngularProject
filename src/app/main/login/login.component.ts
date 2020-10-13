import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  a = 0;

  login() {
    this.a = 0;
  }
  register() {
    this.a = 1;
  }
  forgot() {
    this.a = 2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
