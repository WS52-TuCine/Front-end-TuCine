import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { ProfileComponent } from './components/movies/profile/profile.component';

const routes: Routes = [
  { path: 'peliculas', component: FilmsComponent },
  { path: 'pelicula/:id', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
