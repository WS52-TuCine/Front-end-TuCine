import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../views/shared/landing-page/landing-page.component';
import { AuthPageComponent } from '../views/shared/auth-page/auth-page.component';
import { UserElectionComponent } from '../views/shared/user-election/user-election.component';

const routes: Routes = [

  { path: '',component:LandingPageComponent},
  { path: 'landingPage',component:LandingPageComponent},
  {path: 'user-election',component:UserElectionComponent},
  {path: 'authPage',component:AuthPageComponent},
  {path: 'authPage/register/:owner',component:AuthPageComponent},
  {path: 'authPage/register/:cinephile',component:AuthPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
