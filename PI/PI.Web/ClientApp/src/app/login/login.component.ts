import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);
  buttonstatus: boolean = true;

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'To pole jest wymagane';
    }
    else if (this.email.hasError('email')) {
      return 'Błędny adres email';
    }
    return this.buttonstatus = false;
  }
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'To pole jest wymagane';
    }
    else if (this.password.hasError('minLength(3)')) {
      return 'Błędne hasło';
    }
    return this.buttonstatus = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
