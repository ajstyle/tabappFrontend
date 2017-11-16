import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialDesignModule} from './material-design/material-design.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { YouTubeComponent } from './you-tube/you-tube.component';
import { ApiService } from './api.service';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  declarations: [
    AppComponent,
    YouTubeComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
