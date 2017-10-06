import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LocationComponent } from './location/location.component';
import { DateComponent } from './date/date.component';
import { LocDeliverComponent } from './loc-deliver/loc-deliver.component';
import { LocPickupComponent } from './loc-pickup/loc-pickup.component';

import { ModeService } from './services/mode.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationBarComponent,
    LocationComponent,
    DateComponent,
    LocDeliverComponent,
    LocPickupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
