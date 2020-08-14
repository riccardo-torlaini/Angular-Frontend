import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      // after coming from homepage, page is scrolled down (bug?)
      // therefore, scroll to top at start
      window.scrollTo(0, 0);

      const magazineDiv = $("#magazine");

      const windowWidth = magazineDiv.parent().width();
      const windowHeight = magazineDiv.parent().height();
      let display = "";
      let width = 0;
      let height = 0;

      // Magazine page size: 1039 x 1476  (width x height)
      // So the ratio is:       1 : 1.42
      // Or:                 0.70 : 1

      // Screen width: medium (md), large (lg)
      if (windowWidth >= 940) {
          display = "double";

          if (windowWidth >= windowHeight * 0.70 * 2) {
              width  = windowHeight * 0.70 * 2;
              height = windowHeight;
          } else {
              width  = windowWidth;
              height = windowWidth * 1.42 / 2;
          }
      }

      // Screen width: extra small (xs), small (sm)
      else {
          display = "single";

          if (windowWidth >= windowHeight * 0.70) {
              width  = windowHeight * 0.70;
              height = windowHeight;
          } else {
              width = windowWidth;
              height = windowWidth * 1.42;
          }
      }

      // @ts-ignore
      magazineDiv.turn({
          width,
          height,
          autoCenter: false,
          display,
          acceleration: false
      });

  }

}
