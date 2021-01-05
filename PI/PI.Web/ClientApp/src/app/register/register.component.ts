import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);
  surname = new FormControl('', [Validators.required, Validators.minLength(1)]);
  name = new FormControl('', [Validators.required, Validators.minLength(1)]);
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
  getErrorMessageSurname() {
    if (this.surname.hasError('required')) {
      return 'To pole jest wymagane';
    }
    else if (this.surname.hasError('minLength(1)')) {
      return 'Za mało znaków';
    }
    return this.buttonstatus = false;
  }
  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'To pole jest wymagane';
    }
    else if (this.name.hasError('minLength(1)')) {
      return 'Za mało znaków';
    }
    return this.buttonstatus = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
