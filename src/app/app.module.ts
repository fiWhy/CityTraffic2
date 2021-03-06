import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";
import { NgModule } from '@angular/core';
import { NguiMapModule } from '@ngui/map';

import { GoogleMapsConfig } from "./config/googlemaps.config";

import { StatesModule } from "./states/states.module";

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    NguiMapModule.forRoot({ apiUrl: `https://maps.google.com/maps/api/js?key=${GoogleMapsConfig.API_KEY}&libraries=${GoogleMapsConfig.LIBRARIES.join(",")}` }),
    StatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
