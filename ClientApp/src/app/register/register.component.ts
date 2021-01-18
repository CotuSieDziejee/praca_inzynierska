import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

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


  constructor(public service: UserService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('');

    this.resetForm();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          console.log("Tworzenie użytkownika zakończone sukcesem");
          alert("Tworzenie użytkownika zakończone sukcesem");
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                console.log("Błąd, użytkowik instnieje");
                alert("Błąd, użytkowik instnieje");
                break;

              default:
                alert("Błąd");
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
