import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KamelotePageRoutingModule } from './kamelote-routing.module';

import { KamelotePage } from './kamelote.page';
import {HeaderModule} from "../../components/header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KamelotePageRoutingModule,
        HeaderModule
    ],
  declarations: [KamelotePage]
})
export class KamelotePageModule {}
