import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTravelideaPageRoutingModule } from './edit-travelidea-routing.module';

import { EditTravelideaPage } from './edit-travelidea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditTravelideaPageRoutingModule
  ],
  declarations: [EditTravelideaPage]
})
export class EditTravelideaPageModule {}
