import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdSelectModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EachMovieComponent } from './movies/each-movie/each-movie.component';
import { MovieComponent } from './movies/movies.component';
import { MoviePopupComponent } from './movies/movie-popup/movie-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    EachMovieComponent,
    MovieComponent,
    MoviePopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdSelectModule,
    MdDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MoviePopupComponent]
})

export class AppModule { }
