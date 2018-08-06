import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { InformationComponent } from './information/information.component';
import { ResultComponent } from './result/result.component';
import {HttpClientModule} from '@angular/common/http';
import {EstimationService} from './services/estimation.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InformationComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EstimationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
