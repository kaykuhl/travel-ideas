import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTravelideaPage } from './edit-travelidea.page';

const routes: Routes = [
  {
    path: '',
    component: EditTravelideaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTravelideaPageRoutingModule {}
