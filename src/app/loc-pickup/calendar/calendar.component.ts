import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
declare var Materialize: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],

})
export class CalendarComponent implements OnInit {

  birthDate: string;
  birthTime: string;

  birthDateActions = new EventEmitter<string|MaterializeAction>();
  birthTimeActions = new EventEmitter<string|MaterializeAction>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.birthDate = '03/12/2017';
    this.birthTime = '12:36';
    this.form = this.fb.group({
      'fromDate': new FormControl('06/07/2017'),
      'fromTime': new FormControl('08:30')
    });
  }
    ngOnInit() {
    }

  openDatePicker() {
      // actions are open or close
      this.birthDateActions.emit({action: 'pickadate', params: ['open']});
  }

  setTime(time) {
      this.birthTime = time;
  }
  openTimePicker() {
      // actions are show or hide
      this.birthTimeActions.emit({action: 'pickatime', params: ['show']});
  }
}
