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
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MoviePosterComponent } from './components/films/components/movie-poster/movie-poster.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmationMessageComponent,
    FilmsComponent,
    SearchBarComponent,
    MoviePosterComponent,

  ],
  imports: [
    MatDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
