import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ConfirmationMessageComponent } from './components/ui/confirmation-message/confirmation-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { PopularNowComponent } from './components/explore/popular-now/popular-now.component';
import { PopularPostComponent } from './components/explore/popular-post/popular-post.component';
import { MainComponent } from './components/explore/main/main.component';
import { NearEventsComponent } from './components/explore/near-events/near-events.component';
import { GoogleMapComponent } from './components/explore/google-map/google-map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmationMessageComponent,
    PopularNowComponent,
    PopularPostComponent,
    MainComponent,
    NearEventsComponent,
    GoogleMapComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo73cODrVrhwYpmhegeL8ptJUmO_I-M04',
      libraries : ['places']
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
