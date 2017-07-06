import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from "@angular/material";
import { NguiMapModule } from '@ngui/map';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NguiMapModule,
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class StatesModule { }
