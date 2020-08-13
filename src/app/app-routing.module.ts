import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { MoviesComponent } from './movies/movies.component';
import { TvDteComponent } from './tv-dte/tv-dte.component';
import { MovieDteComponent } from './movie-dte/movie-dte.component';
import { JoinComponent } from './join/join.component';
import { LogInComponent } from './log-in/log-in.component';


const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home", component:TrendingComponent},
  {path:"movies", component:MoviesComponent},
  {path:"tvShow", component:TvShowComponent},
  {path:"movieDte/:id", component:MovieDteComponent},
  {path:"tvDet/:id", component:TvDteComponent},
  {path:"join", component:JoinComponent},
  {path:"login", component:LogInComponent},
  {path:"**", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
