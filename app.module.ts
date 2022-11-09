import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RatingPipe } from './pipes/rating.pipe';
import { FilmComponent } from './film/film.component';
import { FilmsearchComponent } from './filmsearch/filmsearch.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RatingPipe,
    FilmComponent,
    FilmsearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
