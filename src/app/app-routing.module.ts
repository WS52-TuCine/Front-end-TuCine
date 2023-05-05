import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { ProfileComponent } from './components/movies/profile/profile.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'explorar'},
  { path: '', component: FilmsComponent },
  { path: 'peliculas', component: FilmsComponent },
  { path: 'pelicula/:id', component: ProfileComponent },
  {path:'**',pathMatch:'full',redirectTo:'home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
