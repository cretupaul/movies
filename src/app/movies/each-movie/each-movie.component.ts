import { Component, Input } from '@angular/core';

import {Movie} from '../movie';
export const frontPosterUrl = 'https://image.tmdb.org/t/p/w780/';
@Component({
  selector: 'app-each-movie',
  templateUrl: './each-movie.html',
  styleUrls: ['./each-movie.css'],
})

export class EachMovieComponent {
  @Input() movie: Movie;
  @Input() index: number;
  frontPosterUrl = frontPosterUrl;
}
