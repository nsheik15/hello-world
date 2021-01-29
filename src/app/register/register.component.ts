import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName = '';
  password = '';

  payload = {};

  data = {
    message: 'Success',
    status: 400,
    token: '121321.9879798.798798798'
  }

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  signUp() {
    this.payload = {
      userName: this.userName,
      password: this.password
    }
    this.auth.register(this.payload).subscribe(data => {
    console.log(data);
  }, error => {
    console.log(error);
    localStorage.setItem('token', this.data.token);
  })
  }

}
