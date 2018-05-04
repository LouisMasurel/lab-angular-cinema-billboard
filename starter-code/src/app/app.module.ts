import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MoviesSelectedComponent } from './movies-selected/movies-selected.component';
import { MoviesService } from './movies-selected/movies.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesSelectedComponent,
    NotFoundComponent,
    LandingPageComponent,
    MoviesDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [  
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
