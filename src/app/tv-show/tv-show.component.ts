import { Component, OnInit } from '@angular/core';
import { DataFechingService } from '../data-feching.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  tvDetails: any;
  imgPath: string = "https://image.tmdb.org/t/p/w500";
  constructor(private _DataFechingService: DataFechingService) {
    _DataFechingService.getTrendingTv().subscribe(data=>{
      this.tvDetails= data.results
    }, err=>{
      console.log(err)
    })
  }

  ngOnInit(): void {
  }

}
