import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarOutput: EventEmitter<any> = new EventEmitter();

  userDetails;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  toggleSideBar() {
    this.toggleSideBarOutput.emit();
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
