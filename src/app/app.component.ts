import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = '';
  constructor(private route: Router){
    this.initializeApp();
  }
  setHeader() {
    const path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);
  }
  initializeApp() {}
}
