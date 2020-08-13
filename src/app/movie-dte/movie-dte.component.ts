import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataFechingService} from '../data-feching.service' 
import { from } from 'rxjs';
@Component({
  selector: 'app-movie-dte',
  templateUrl: './movie-dte.component.html',
  styleUrls: ['./movie-dte.component.scss']
})
export class MovieDteComponent implements OnInit {
  simlierMovie:any =[];
  movieDetails:any;
  id:string;
  imgPath:string ="https://image.tmdb.org/t/p/w500";
  constructor( public _ActivatedRoute:ActivatedRoute, public _DataFechingService:DataFechingService) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    _DataFechingService.getMovieDetails(this.id).subscribe(data=>{
      this.movieDetails = data;
    }, err=>{
      console.log(err)
    });

    _DataFechingService.smilierMovies(this.id).subscribe(data=>{
      for(let i =0; i<6 ; i++){
        this.simlierMovie.push(data.results[i])
        console.log(this.simlierMovie)
      }
    })
   }

  ngOnInit(): void {
  }

}
