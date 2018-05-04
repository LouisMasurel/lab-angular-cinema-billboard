import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie, movieList } from '../movies-details/sample-movies';
import { MoviesService } from '../movies-selected/movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  
  movieId: number;
  movieInfo: Movie;

  constructor(
    private reqThang: ActivatedRoute,
    public movieTruc: MoviesService,
    private resThang: Router
  ) { }

  ngOnInit() {
    this.reqThang.paramMap
      .subscribe((myParams) => {
                  // { path: 'contact/:blahId', ... }
        this.movieId = Number(myParams.get('blahId'));
                         // req.params.blahId

        this.movieInfo = this.movieTruc.getMovie(this.movieId);
      });
  }

}
