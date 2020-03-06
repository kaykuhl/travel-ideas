import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MakeTripPageRoutingModule } from './make-trip-routing.module';

import { MakeTripPage } from './make-trip.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MakeTripPageRoutingModule
  ],
  declarations: [MakeTripPage]
})
export class MakeTripPageModule {}