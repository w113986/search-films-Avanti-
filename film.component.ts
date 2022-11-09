import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor() { }
@Input()films:any;
@Input()loggedIn:any;

  ngOnInit(): void {
    console.log(this.films);
  }

}
