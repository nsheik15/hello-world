import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';

  payload = {};

  constructor(private auth: AuthenticationService) { }

  data = {
    message: 'Success',
    status: 400,
    token: '121321.9879798.798798798'
  }

  ngOnInit(): void {
  }

  login() {
    this.payload = {
      userName: this.userName,
      password: this.password
    }
    this.auth.login(this.payload).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data['token']);
    }, error => {
      console.log(error);
      localStorage.setItem('token', this.data.token);
    })
  }

}
