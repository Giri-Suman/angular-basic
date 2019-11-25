import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import '../polyfills';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InboxComponent } from './inbox/inbox.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { DataTablesModule } from 'angular-datatables';
import { InboxService } from './inbox/inbox.service';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule,MatExpansionModule,MatCardModule} from '@angular/material';
import { ArchiveService } from './archive/archive.service';

import { RequestMrrComponent } from './request/MRR/request-mrr.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestMrrComponent,
    InboxComponent,
    HeaderComponent,
    FooterComponent,
    ArchiveComponent,
    RequestMrrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [InboxService,ArchiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
