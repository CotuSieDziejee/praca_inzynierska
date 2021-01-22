import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  sideBarOpen = true;


  @Output() toggleSideBarOutput: EventEmitter<any> = new EventEmitter();
  toggleSideBar() {
    this.toggleSideBarOutput.emit();
  }
  sideBarToogler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  getUrl() {
    return "url('../assets/mountaineer.png')";
  }
}
