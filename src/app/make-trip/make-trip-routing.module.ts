import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeTripPage } from './make-trip.page';

const routes: Routes = [
  {
    path: '',
    component: MakeTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeTripPageRoutingModule {}
