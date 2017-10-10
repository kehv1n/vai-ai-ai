import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { ModeService } from '../services/mode.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  
})
export class LocationComponent implements OnInit {

  locationMode: Number;

  constructor(
    public modeService : ModeService
  ) { }

  ngOnInit() {
    this.getStateInfo();
  }

  // Subscribe to the state and set that to locationMode variable;
  getStateInfo(){ 
    this.modeService.getState().subscribe((value) => { 
      console.log('the value is now ' + value + ' inside the location component');
      this.locationMode = value;
    });

  }




}
