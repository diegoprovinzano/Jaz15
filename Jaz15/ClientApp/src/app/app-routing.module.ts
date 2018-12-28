import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoungeComponent } from './lounge/lounge.component';
import { HostComponent } from './host/host.component';
import { GuestComponent } from './guest/guest.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lounge', component: LoungeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'host', component: HostComponent },
  { path: 'guest/:id', component: GuestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
