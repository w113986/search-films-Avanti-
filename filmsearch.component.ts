import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmsearch',
  templateUrl: './filmsearch.component.html',
  styleUrls: ['./filmsearch.component.scss']
})
export class FilmsearchComponent implements OnInit {
  @Input()films:any;
  constructor() { }

  ngOnInit(): void {
  }

}
