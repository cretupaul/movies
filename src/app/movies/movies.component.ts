import { Component, OnInit } from '@angular/core';

import { GenreMovie } from './genreMovie';
import { MdDialog } from '@angular/material';
import { Movie } from './movie';
import { MovieService } from './movies.service';
import { MoviePopupComponent } from './movie-popup/movie-popup.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.html',
  styleUrls: ['./movies.css'],
  providers: [MovieService]
})

export class MovieComponent implements OnInit  {
  private selectedGenre: GenreMovie;
  private movieTotal: number;
  private movies: Array<Movie>;
  private generes: object;
  constructor(private movieService: MovieService, public dialog: MdDialog) {}

  ngOnInit() {
    this.movieService.getAllGeneres().subscribe(generes =>  {
      this.generes = generes['genres'];
      this.changeMovieType(this.generes[0]);
    })
  }

  changeMovieType(selectedGenre) {
    this.selectedGenre = selectedGenre;
    this.movieService.getMovies(this.selectedGenre.id).subscribe(actionMovies =>  {
      this.movies = actionMovies['results'];
      this.movieTotal = actionMovies['results'].length;
    })
  }

  changeGenre(event) {
    this.changeMovieType(event);
  }

  openDialog(movieId: number) {
    this.movieService.getSpecificMovie(movieId).subscribe(movieDetails =>  {
      console.log(movieDetails);
      this.dialog.open(
        MoviePopupComponent,
        {
          data: movieDetails,
          height: '850px',
          width: '600px'
        }
      );
    })
  }
}
