import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { NavbarComponent } from './navbar/navbar.component';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { MovieDteComponent } from './movie-dte/movie-dte.component';
import { TvDteComponent } from './tv-dte/tv-dte.component'
import {ReactiveFormsModule} from '@angular/forms';
import { JoinComponent } from './join/join.component';
import { LogInComponent } from './log-in/log-in.component';
@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    NavbarComponent,
    MoviesComponent,
    TvShowComponent,
    MovieDteComponent,
    TvDteComponent,
    JoinComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
