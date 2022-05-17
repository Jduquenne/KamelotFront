import { Component, Input, OnInit } from '@angular/core';
import kamelotesData from '../../../assets/data/kamelotes.json';
import brocantesData from '../../../assets/data/brocantes.json';
import { Kamelote } from '../../interfaces/kamelote';
import {Brocante} from '../../interfaces/brocante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kamelotes',
  templateUrl: './kamelotes.page.html',
  styleUrls: ['./kamelotes.page.scss'],
})
export class KamelotesPage implements OnInit {
  @Input() title = '';
  router: Router;
  kamelotes: Array<Kamelote> = kamelotesData;
  brocantes: Array<Brocante> = brocantesData;

  constructor() { }

  ngOnInit() {
    console.log(this.kamelotes);
  }

  getKameloteLocationWithEventId(eventId) {
    const brocanteFind = this.brocantes.find(brocante => brocante.id === eventId);
    if (brocanteFind) {
      return `${brocanteFind.name} - ${brocanteFind.adress.town}.`;
    } else {
      return 'Aucune brocante lié à cette Kamelote ...';
    }
  }
}
