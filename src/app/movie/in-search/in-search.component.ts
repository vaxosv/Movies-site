import { Component, OnInit, Input } from '@angular/core';
import { movie } from 'src/interfaces/movie';

@Component({
  selector: 'app-in-search',
  templateUrl: './in-search.component.html',
  styleUrls: ['./in-search.component.scss']
})
export class InSearchComponent implements OnInit {
@Input() movie: movie
  constructor() { }

  ngOnInit() {
  }

}
