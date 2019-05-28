import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoundRoutingModule } from './sound-routing.module';
import { SoundListComponent } from './sound-list/sound-list.component';

@NgModule({
  declarations: [SoundListComponent],
  imports: [
    CommonModule,
    SoundRoutingModule
  ]
})
export class SoundModule { }
