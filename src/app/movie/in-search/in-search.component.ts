import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-in-search',
  templateUrl: './in-search.component.html',
  styleUrls: ['./in-search.component.scss']
})
export class InSearchComponent implements OnInit {
@Input() name: string
@Input() year: number
@Input() imgsrc: number
  constructor() { }

  ngOnInit() {
  }

}
