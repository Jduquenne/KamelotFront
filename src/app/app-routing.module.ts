import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'brocante/:id',
    loadChildren: () => import('./pages/brocante/brocante.module').then( m => m.BrocantePageModule),
    data: { title: 'Informations' }
  },
  {
    path: 'kamelote/:id',
    loadChildren: () => import('./pages/kamelote/kamelote.module').then( m => m.KamelotePageModule),
    data: { title: 'Kamelote' }
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    IonicModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
