import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor() { }
  sideBarOpen = true;
  @Output() toggleSideBarOutput: EventEmitter<any> = new EventEmitter();
  toggleSideBar() {
    this.toggleSideBarOutput.emit();
  }
  sideBarToogler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit() {
  }

}
