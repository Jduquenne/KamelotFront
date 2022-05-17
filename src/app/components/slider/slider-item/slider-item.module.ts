import { NgModule } from '@angular/core';
import { SliderItemComponent } from './slider-item.component';
import {RouterModule} from "@angular/router";

@NgModule({
    exports: [
        SliderItemComponent
    ],
    imports: [
        RouterModule
    ],
    declarations: [SliderItemComponent]
})
export class SliderItemModule {}
