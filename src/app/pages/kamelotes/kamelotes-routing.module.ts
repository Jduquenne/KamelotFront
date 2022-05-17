import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KamelotesPage } from './kamelotes.page';

const routes: Routes = [
  {
    path: '',
    component: KamelotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KamelotesPageRoutingModule {}
