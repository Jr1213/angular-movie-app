import { Component, OnInit } from '@angular/core';
import {DataFechingService} from '../data-feching.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  terndingMovies:[];
  terndingTv:[];
  tvDetails:[];
  imgPath:string ="https://image.tmdb.org/t/p/w500";
  
  constructor(public _DataFechingService:DataFechingService) {
    _DataFechingService.getTrendingMovies().subscribe(data=>{
      this.terndingMovies = data.results;
    }, err=>{
      console.log(err)
    })

    _DataFechingService.getTrendingTv().subscribe(data=>{
      this.terndingTv = data.results;
    }, err=>{
      console.log(err)
    })

    

    
   }

  ngOnInit(): void {
  }

}
