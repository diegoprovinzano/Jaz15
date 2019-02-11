import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoungeComponent } from './lounge/lounge.component';
import { HostComponent } from './host/host.component';
import { GuestComponent } from './guest/guest.component';
import { QrComponent } from './qr/qr.component';
import { FoodComponent } from './food/food.component';
import { ContactComponent } from './contact/contact.component';
import { GiftComponent } from './gift/gift.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'food', component: FoodComponent },
  { path: 'gift', component: GiftComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lounge', component: LoungeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'host', component: HostComponent },
  { path: 'guest/:id', component: GuestComponent },
  { path: 'table/:tablename', component: TableComponent },
  { path: 'qr', component: QrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
