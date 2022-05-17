import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tabPages = [
    {
      title: 'Accueil',
      tab: 'home',
      icon: 'home'
    },
    {
      title: 'Brocantes',
      tab: 'brocantes',
      icon: 'glasses'
    },
    {
      title: 'Kamelotes',
      tab: 'kamelotes',
      icon: 'cube'
    },
    {
      title: 'Compte',
      tab: 'profile',
      icon: 'person'
    }
  ];

  constructor() {}
}
