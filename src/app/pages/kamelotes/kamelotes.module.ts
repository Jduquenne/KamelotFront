import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KamelotesPageRoutingModule } from './kamelotes-routing.module';

import { KamelotesPage } from './kamelotes.page';
import {HeaderModule} from '../../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KamelotesPageRoutingModule,
    HeaderModule
  ],
  declarations: [KamelotesPage]
})
export class KamelotesPageModule {}
