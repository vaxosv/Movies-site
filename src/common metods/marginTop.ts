import * as $ from "jquery";


export class Margin {
  static margin(a: string) {
    let mar = $("header").height();
    $(a).css({ "margin-top": `${mar}px` });
  }

}
