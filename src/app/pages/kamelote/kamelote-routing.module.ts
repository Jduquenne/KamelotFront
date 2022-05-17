import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KamelotePage } from './kamelote.page';

const routes: Routes = [
  {
    path: '',
    component: KamelotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KamelotePageRoutingModule {}
