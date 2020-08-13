import { Component, OnInit } from '@angular/core';
import {DataFechingService} from '../data-feching.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesDetails:any;
  imgPath:string ="https://image.tmdb.org/t/p/w500";
  constructor(private _DataFechingService:DataFechingService) {
    _DataFechingService.getTrendingMovies().subscribe(data=>{
      this.moviesDetails = data.results;
    }, err=>{
      console.log(err)
    })
   }

  ngOnInit(): void {
  }

}
