import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LocationComponent } from './location/location.component';
import { DateComponent } from './date/date.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'book/location', component: LocationComponent },
  { path: 'book/dates', component: DateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
