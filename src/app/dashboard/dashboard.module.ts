import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import{ MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatIcon, MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class DashboardModule { }
