import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ModeService {

  // STATES
  // 1 = Delivery State
  // 2 = Pickup State

  state: BehaviorSubject<Number> = new BehaviorSubject(1);

  constructor(
  ) { }


  // Changes our state using next
  setState(toThis){ 
    return this.state.next(toThis);
  }

  getState() {
    return this.state;
  }


}
