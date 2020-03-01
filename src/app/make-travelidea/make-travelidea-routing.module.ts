import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeTravelideaPage } from './make-travelidea.page';

const routes: Routes = [
  {
    path: '',
    component: MakeTravelideaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeTravelideaPageRoutingModule {}
