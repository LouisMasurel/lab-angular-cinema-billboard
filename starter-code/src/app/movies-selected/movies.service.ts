import { Injectable } from '@angular/core';
import { Movie, movieList } from '../movies-details/sample-movies';

@Injectable()
export class MoviesService {

  movies : Array<Movie> = [...movieList];

  constructor() { }

  getMovie (id : number) {
    let movieInfo;

    this.movies.forEach((oneMovie) =>{
      if(oneMovie.id === id){
        movieInfo = oneMovie;
      }
    });
    return movieInfo; 
  }

}
