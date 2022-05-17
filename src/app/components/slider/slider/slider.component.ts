import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() dataList = [];
  opts = {
    freeMode: true,
    breakpoints: {
      360: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2.8,
        spaceBetween: 10
      },
      1080: {
        slidesPerView: 4.2,
        spaceBetween: 10
      },
      1980: {
        slidesPerView: 5.2,
        spaceBetween: 10
      }
    }
  };

  constructor() { }

  ngOnInit() {}

}
