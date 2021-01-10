import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { User } from '../shared/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  hide = true;

  buttonstatus: boolean = true;

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: ""
    }
  }


  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

}
