import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
        data: { title: 'Accueil' }
      },
      {
        path: 'brocantes',
        loadChildren: () => import('../brocantes/brocantes.module').then(m => m.BrocantesPageModule),
        data: { title: 'Brocantes' }
      },
      {
        path: 'kamelotes',
        loadChildren: () => import('../kamelotes/kamelotes.module').then(m => m.KamelotesPageModule),
        data: { title: 'Kamelotes' }
      },
      {
        path: 'achievements',
        loadChildren: () => import('../achievements/achievements.module').then(m => m.AchievementsPageModule),
        data: { title: 'Succés' }
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule),
        data: { title: 'Profil' }
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
