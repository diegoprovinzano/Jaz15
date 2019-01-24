import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { LoungeComponent } from './lounge/lounge.component';
import { GuestComponent } from './guest/guest.component';
import { HostComponent } from './host/host.component';
import * as $ from 'jquery';
import { AppGlobal } from './app.global';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QrComponent } from './qr/qr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    TableComponent,
    LoungeComponent,
    GuestComponent,
    HostComponent,
    QrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [GuestComponent],
  providers: [AppGlobal],
  bootstrap: [AppComponent]
})
export class AppModule { }
