import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrocantePage } from './brocante.page';

const routes: Routes = [
  {
    path: '',
    component: BrocantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrocantePageRoutingModule {}
