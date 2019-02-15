import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  @ViewChild("ad") a: ElementRef;

  constructor(private rd: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.style();
  }

  slides = [
    {
      img:"http://t3.gstatic.com/images?q=tbn:ANd9GcSsaMDp_xKXPXpnHwJzv_SpU79Egd15wd7KccS3OSr4l917Fwwq"
    },
    { 
      img: "https://contentserver.com.au/assets/661558_p15674164_v_v8_ac.jpg" 
    },
    {
      img:"http://www.gstatic.com/tv/thumb/v22vodart/12858314/p12858314_v_v8_aa.jpg"
    }
  ];
  slideConfig = {
    arrows: true,
    daptiveHeight: 0,
    prevArrow: `<div class="arr-left"></div>`,
    nextArrow: `<div class="arr-right"></div>`
  };

  slickInit(e) {
    console.log("slick initialized");
  }

  breakpoint(e) {
    console.log("breakpoint");
  }

  afterChange(e) {
    console.log("afterChange");
  }

  beforeChange(e) {
    console.log("beforeChange");
  }

  style() {
    $(".arr-left").css({
      width: " 150px",
      height: " 500px",
      position: "Absolute",
      "z-index": "1",
      top: "30px",
      left: "-450px",
      transform: "rotateY(45deg)",
      "transform-style": "preserv-3d",
      "background-image": "url(https://contentserver.com.au/assets/661558_p15674164_v_v8_ac.jpg)",
      "background-size": "cover"
    });
    $(".arr-right").css({
      width: " 150px",
      height: " 500px",
      position: "Absolute",
      "z-index": "1",
      top: "30px",
      left: "700px",
      transform: "rotateY(-45deg)",
      "transform-style": "preserv-3d",
      "background-image":
        "url(https://contentserver.com.au/assets/661558_p15674164_v_v8_ac.jpg)",
      "background-size": "cover"
    });
  }
  
}
