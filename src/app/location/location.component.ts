import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { ModeService } from '../services/mode.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {



  constructor(
    public modeService : ModeService
  ) { }

  ngOnInit() {
    this.modeService.getMode()
  }


}
