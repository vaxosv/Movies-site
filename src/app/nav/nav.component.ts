import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  
})
export class NavComponent implements OnInit {
  user: boolean;
  constructor(private data: DataService, private elementRef: ElementRef) {}

  clickMe() {
    // console.dir(this.elementRef.nativeElement.childNodes[0].clientHeight);
  }

  ngOnInit() {
    this.user = this.data.signedin;
    window.addEventListener("scroll", this.jqNavScroll, true);
    this.jqNavScroll()
  }

  scrollEvent = (event: any): void => {
    // console.log(event.srcElement.scrollingElement.scrollTop);
  };

  onSearchChange(searchValue: string) {
    this.data.getusers().subscribe(data => {
      data = JSON.parse(data);
      console.log(data);
    });
    console.log(searchValue);
  }


  jqNavScroll(){
      let height = $("header").height();
      var scroll = $(window).scrollTop();

    // if (scroll) {
      $("header").css({ 
        top: 0,
        position: "fixed"
       });
    //   console.log("trans");
    // } else {
    //   $("header").css({ 
    //     position: "absolute",
    //   });
    //   console.log("red");
    // }
  }
  
  
  
}
