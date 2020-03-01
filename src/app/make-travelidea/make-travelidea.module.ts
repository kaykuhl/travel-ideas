import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MakeTravelideaPageRoutingModule } from './make-travelidea-routing.module';

import { MakeTravelideaPage } from './make-travelidea.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MakeTravelideaPageRoutingModule
  ],
  declarations: [MakeTravelideaPage]
})
export class MakeTravelideaPageModule {}
