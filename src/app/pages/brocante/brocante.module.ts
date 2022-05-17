import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrocantePageRoutingModule } from './brocante-routing.module';

import { BrocantePage } from './brocante.page';
import {HeaderModule} from '../../components/header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BrocantePageRoutingModule,
        HeaderModule
    ],
  declarations: [BrocantePage]
})
export class BrocantePageModule {}
