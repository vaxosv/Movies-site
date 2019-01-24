import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit() {}

  onSearchChange(searchValue: string) {
    this.data.getusers().subscribe(data => {
      data = JSON.parse(data)
      console.log(data);
    });
    console.log(searchValue);
  }
}
