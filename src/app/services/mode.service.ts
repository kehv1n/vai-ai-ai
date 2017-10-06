import { Injectable } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Injectable()
export class ModeService {

  constructor(
    public myBar : NavigationBarComponent
  ) { }

  getMode(){
    return (this.myBar.getTheMode());
  } 

}
