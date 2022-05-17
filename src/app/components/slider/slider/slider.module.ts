import { NgModule } from '@angular/core';
import {SliderComponent} from './slider.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SliderItemModule} from '../slider-item/slider-item.module';

@NgModule({
  exports: [
    IonicModule,
    SliderComponent
  ],
  imports: [
    CommonModule,
    SliderItemModule
  ],
  declarations: [SliderComponent]
})
export class SliderModule {}
