import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { ProfileComponent } from './components/movies/profile/profile.component';
import { MainComponent } from './components/explore/main/main.component';
import { HomeComponent } from './components/cineclubs/home/home.component';
import { ProfilecrudComponent } from './components/movies/profilecrud/profilecrud.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'explorar'},
  { path: 'peliculas', component: FilmsComponent },
  { path: 'peliculas/pelicula/:id', component: ProfileComponent },
  { path: 'peliculas/pelicula/:id', component: ProfilecrudComponent },
  { path: 'explorar', component: MainComponent },
  { path: 'cineclubs', component: HomeComponent },
  // {path:'**',pathMatch:'full',redirectTo:'explorar'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
