import { UserService } from '../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }
  constructor(private service: UserService, private router: Router) { }


  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('application/home');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('application/home');
      },
      err => {
        if (err.status == 400)
          alert('Bład logowania, Sprawdź poprawność danych.');
        else
          console.log(err);
      }
    );
  }
}
