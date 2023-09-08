import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamerasRoutingModule } from './cameras-routing.module';
import { CamerasComponent } from './cameras.component';


@NgModule({
  declarations: [
    CamerasComponent
  ],
  imports: [
    CommonModule,
    CamerasRoutingModule
  ]
})
export class CamerasModule { }
