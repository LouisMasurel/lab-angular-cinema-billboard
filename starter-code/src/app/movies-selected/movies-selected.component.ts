import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies-selected',
  templateUrl: './movies-selected.component.html',
  styleUrls: ['./movies-selected.component.css']
})
export class MoviesSelectedComponent implements OnInit {

  constructor() { }
  public movieTruc : MoviesService

  ngOnInit() {
  }

}
