import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataFechingService {

  constructor(public _HttpClient: HttpClient) {
  }
  getTrendingMovies(): Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=a6597fba17728098dccdc6f73ce4f1bb');
  };
  smilierMovies(id): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=a6597fba17728098dccdc6f73ce4f1bb&language=en-US&page=1`)
  };
  getMovieDetails(id): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a6597fba17728098dccdc6f73ce4f1bb&language=en-US`);
  };




  getTrendingTv(): Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=a6597fba17728098dccdc6f73ce4f1bb');
  };

  getTvDetails(id): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=a6597fba17728098dccdc6f73ce4f1bb&language=en-US`);
  };

  smilierTvs(id): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=a6597fba17728098dccdc6f73ce4f1bb&language=en-US&page=1`)
  };

}
