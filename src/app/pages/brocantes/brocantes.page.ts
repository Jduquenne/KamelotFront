import { Component, Input, OnInit } from '@angular/core';
import brocantesData from '../../../assets/data/brocantes.json';
import $ from 'jquery';
import { Router } from '@angular/router';
import {Brocante} from '../../interfaces/brocante';

@Component({
  selector: 'app-brocantes',
  templateUrl: './brocantes.page.html',
  styleUrls: ['./brocantes.page.scss'],
})
export class BrocantesPage implements OnInit {
  @Input() title = '';
  router = Router;
  categories = ['Tout', 'Particulier', 'Professionnel'];
  sectionDefault = 'Tout';
  brocantes: Array<Brocante> = brocantesData;
  gridColumnFullWitdh = false;
  filterTerm: string;

  constructor() {}

  ngOnInit() {}

  resizeFullOnClick() {
    if (this.gridColumnFullWitdh) {
      $( '.row-item' ).toggleClass('gtc-fullscreen');
      this.gridColumnFullWitdh = !this.gridColumnFullWitdh;
    } else {
      $( '.row-item' ).toggleClass('gtc-fullscreen');
      this.gridColumnFullWitdh = !this.gridColumnFullWitdh;
    }
  }

  getBrocantesWithCategory(category) {
    if (category.detail.value === 'Tout') {
      this.brocantes = brocantesData;
    } else {
      this.brocantes = brocantesData.filter(brocante => brocante.sellers.type === category.detail.value);
    }
  }
}
