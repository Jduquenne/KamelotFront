import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {
  @Input() title = '';
  constructor() { }

  ngOnInit() {
  }

}
