import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { BrocantesPageRoutingModule } from './brocantes-routing.module';

import { BrocantesPage } from './brocantes.page';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    BrocantesPageRoutingModule,
    HeaderModule
  ],
  declarations: [BrocantesPage]
})
export class BrocantesPageModule {}
