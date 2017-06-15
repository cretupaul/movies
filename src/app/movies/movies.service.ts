import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Movie} from './movie';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

const apiKey = 'e9f4531f9e8426fd5c6fbbea84c6eef7';
const defaultGeneres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

@Injectable()
export class MovieService {
    private movies;
    constructor(private http: Http) {

    }
    getSpecifiedGenreLink(genId: number) {
        // tslint:disable-next-line:max-line-length
        return `https://api.themoviedb.org/3/genre/${genId}/movies?api_key=${apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc`;
    }

    getSpecificMovieDetails(movieId: number) {
        // tslint:disable-next-line:max-line-length
        return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    }

    getMovies(genre): Observable<Movie[]> {
        return this.http.get(this.getSpecifiedGenreLink(genre))
        .map(result => result.json());
    }

    getSpecificMovie(movieId): Observable<Movie[]> {
        return this.http.get(this.getSpecificMovieDetails(movieId))
        .map(result => result.json());
    }

    getAllGeneres(): Observable<Movie[]> {
        return this.http.get(defaultGeneres)
        .map(result => result.json());
    }
}