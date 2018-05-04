import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MoviesSelectedComponent } from './movies-selected/movies-selected.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';

const routes: Routes = [
  // router.get('/', ...
  { path: '', component: LandingPageComponent },

  // router.get('/contacts', ...
  { path: 'movies', component: MoviesSelectedComponent },

  // router.get('/contact/:blahId', ...
  { path: 'movies/:blahId', component: MoviesDetailsComponent },

  
  // Handle all other URLs (MUST BE LAST)
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
