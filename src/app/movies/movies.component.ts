import { Component, OnInit } from '@angular/core';

import { GenreMovie } from './genreMovie';
import { MdDialog } from '@angular/material';
import { Movie } from './movie';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.html',
  styleUrls: ['./movies.css'],
  providers: [MovieService]
})

export class MovieComponent implements OnInit  {
  private selectedGenre: GenreMovie;
  private movieTotal: number;
  private movies: Movie[];
  private generes: object;
  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this._movieService.getAllGeneres().subscribe(generes =>  {
      this.generes = generes['genres'];
      this.changeMovieType(this.generes[0]);
    })
  }

  changeMovieType(selectedGenre) {
    this.selectedGenre = selectedGenre;
    this._movieService.getMovies(this.selectedGenre.id).subscribe(actionMovies =>  {
      this.movies = actionMovies['results'];
      this.movieTotal = actionMovies['results'].length;
    })
  }

  changeGenre(event) {
    this.changeMovieType(event);
  }
}
