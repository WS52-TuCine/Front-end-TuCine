import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ConfirmationMessageComponent } from './components/ui/confirmation-message/confirmation-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FilmsComponent } from './components/films/films.component';

import { SearchBarComponent } from './components/films/components/search-bar/search-bar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MoviePosterComponent } from './components/films/components/movie-poster/movie-poster.component';
import { ProfileComponent } from './components/movies/profile/profile.component';
import { WeeklyFilmComponent } from './components/films/components/weekly-film/weekly-film.component';
import { HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { FilterBarComponent } from './components/films/components/filter-bar/filter-bar.component';
import { FormsModule } from '@angular/forms';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

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
    FilmsComponent,
    SearchBarComponent,
    MoviePosterComponent,
    WeeklyFilmComponent,
    FilterBarComponent,
    ProfileComponent,
    PopularNowComponent,
    PopularPostComponent,
    MainComponent,
    NearEventsComponent,
    GoogleMapComponent,


  ],
  imports: [
    MatDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo73cODrVrhwYpmhegeL8ptJUmO_I-M04',
      libraries : ['places']
    }),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
