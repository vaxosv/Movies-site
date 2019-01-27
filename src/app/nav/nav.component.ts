import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { movie } from 'src/interfaces/movie';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {

  user: boolean;
  search: boolean = false;
  searchlist: any[]= []
  
  constructor(private data: DataService,) {}


  ngOnInit() {
    this.user = this.data.signedin;
  }


  onSearchChange(searchValue: string) {
    this.data.getusers().subscribe(data => {
      let sh = searchValue;
      var tempwar: object[] = JSON.parse(data);  

      this.searchlist = tempwar.filter((a: movie) => a.id == sh)
      
      
      this.ifelse(this.searchlist)
    });
    
  }

  ifelse(a){
    if (a.length > 0) {
      this.search = true
    } else {
      this.search = false
    }
  }

  
}
