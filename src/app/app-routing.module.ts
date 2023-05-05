import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGroupComponent } from './components/groups/new-group/new-group.component';
import { MyGroupComponent } from './components/groups/my-group/my-group.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'explorar'},
  // { path: 'peliculas', component: FilmsComponent },
  // { path: 'peliculas/pelicula/:id', component: ProfileComponent },
  // { path: 'explorar', component: MainComponent },
  // { path: 'cineclubs', component: HomeComponent },
  { path: 'crear-grupo', component: NewGroupComponent },
  { path: 'mis-grupos', component: MyGroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
