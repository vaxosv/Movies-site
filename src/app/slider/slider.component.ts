import { Component, OnInit } from '@angular/core';
import { Margin } from "../../common metods/marginTop";
import * as $ from "jquery";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Margin.margin(".mainslider");
  }
  
  
  


  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = {};

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }


}
