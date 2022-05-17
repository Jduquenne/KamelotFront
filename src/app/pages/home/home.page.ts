import {Component, Input, OnInit} from '@angular/core';
import brocantesData from '../../../assets/data/brocantes.json';
import sectionsData from '../../../assets/data/sections.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @Input() title = '';
  sections = sectionsData;
  brocantes = brocantesData;
  constructor() {}

  ngOnInit() {
  }

}
