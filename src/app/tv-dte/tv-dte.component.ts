import { Component, OnInit } from '@angular/core';
import {DataFechingService} from '../data-feching.service';
import {ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-tv-dte',
  templateUrl: './tv-dte.component.html',
  styleUrls: ['./tv-dte.component.scss']
})
export class TvDteComponent implements OnInit {
  simlierTv:any =[];
  tvDetails:any;
  id:string;
  imgPath:string ="https://image.tmdb.org/t/p/w500";
  constructor(public _DataFechingService:DataFechingService, public _ActivatedRoute:ActivatedRoute) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    _DataFechingService.getTvDetails(this.id).subscribe(data=>{
      this.tvDetails=data;
    }, err=>{
      console.log(err)
    });

    _DataFechingService.smilierTvs(this.id).subscribe(data=>{
      for(let i=0;i<6; i++){
        this.simlierTv.push(data.results[i])
      }
      console.log(this.simlierTv)
    })
   }

  ngOnInit(): void {
  }

}
