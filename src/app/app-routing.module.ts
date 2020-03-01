import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'make-travelidea',
    loadChildren: () => import('./make-travelidea/make-travelidea.module').then( m => m.MakeTravelideaPageModule)
  },
  {
    path: 'edit-travelidea/:id',
    loadChildren: () => import('./edit-travelidea/edit-travelidea.module').then( m => m.EditTravelideaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }