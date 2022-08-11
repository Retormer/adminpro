import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from '../app-routing.module';
//Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
