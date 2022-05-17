import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Location} from '@angular/common';
import kamelotesData from '../../../assets/data/kamelotes.json';
import { Kamelote } from '../../interfaces/kamelote';
import {Brocante} from "../../interfaces/brocante";
import brocantesData from "../../../assets/data/brocantes.json";

@Component({
  selector: 'app-kamelote',
  templateUrl: './kamelote.page.html',
  styleUrls: ['./kamelote.page.scss'],
})
export class KamelotePage implements OnInit {
  @Input() title = '';
  kamelote: Kamelote;
  brocantes: Array<Brocante> = brocantesData;
  mainKameloteImg: string;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      if (!param.has('id')){
        this.navCtrl.navigateBack('/kamelotes');
        return;
      }
      this.kamelote = kamelotesData.find(kamelote => kamelote.id === param.get('id'));
    });
    this.mainKameloteImg = this.kamelote.img[0];
  }

  back(): void {
    this.location.back();
  }

  getKameloteLocationWithEventId(eventId) {
    return this.brocantes.find(brocante => brocante.id === eventId);
  }

  switchMainKameloteImg(id) {
    if (id !== this.mainKameloteImg) {
      this.mainKameloteImg = id;
    }
  }

}
