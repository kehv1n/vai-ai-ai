import { Component, OnInit } from '@angular/core';
import {  ModeService } from '../services/mode.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  // The mode keeps track of whether the info is for delivery or pickup

  // STATES
  // 1 = Delivery State
  // 2 = Pickup Stat

  localState: Number = 1;


  constructor(
    private stateServ: ModeService
  ) { }

  ngOnInit() {
  }

  // changing component 'mode' from delivery to pickup;
  changeMode(toThis) {
    console.log(`Changing state... to: ${toThis}`);
    this.stateServ.setState(toThis);
  }

  // Mode getter
  getTheMode(){
   this.stateServ.getState();
  }
}
