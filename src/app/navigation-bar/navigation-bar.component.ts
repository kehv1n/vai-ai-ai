import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  mode: Number = 1;

  constructor() { }

  ngOnInit() {
  }

  // changing component 'mode' from delivery to pickup;
  changeMode(toThis) { 
    if (toThis === 1) { 
      // change mode to delivery
      this.mode = 1;
      console.log('Mode change to D');
    } 
    if (toThis === 0) {
      // change mode to pickup
      this.mode = 0
      console.log('Mode change to P');
    }
  }

  getTheMode(){
    console.log('got to the nav component and brought back mode to service');
    return this.mode;
  }
}
