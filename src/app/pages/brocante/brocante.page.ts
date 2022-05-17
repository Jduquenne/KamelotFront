import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'
import {NavController} from '@ionic/angular';
import brocantesData from '../../../assets/data/brocantes.json';
import {Brocante} from '../../interfaces/brocante';

@Component({
  selector: 'app-brocante',
  templateUrl: './brocante.page.html',
  styleUrls: ['./brocante.page.scss'],
})
export class BrocantePage implements OnInit {
  @Input() title = '';
  brocante: Brocante;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      if (!param.has('id')){
        this.navCtrl.navigateBack('/brocantes');
        return;
      }
      this.brocante = brocantesData.find(brocante => brocante.id === param.get('id'));
    });
  }

  back(): void {
    this.location.back();
  }

  toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('fr-FR', {
      month: 'long',
    });
  }

}
