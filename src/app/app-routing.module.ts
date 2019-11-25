import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { ArchiveComponent } from './archive/archive.component';
import { RequestMrrComponent } from './request/MRR/request-mrr.component';


const routes: Routes = [

  { path: '', redirectTo: '/inbox', pathMatch: 'full' },
 // { path: 'home', pathMatch: 'full', component: InboxComponent },
  { path: 'inbox', pathMatch: 'full', component: InboxComponent },
  { path: 'archive', pathMatch: 'full', component: ArchiveComponent },
  { path: 'request/MRR', pathMatch: 'full', component: RequestMrrComponent },
  
 // { path: 'error', pathMatch: 'full', component: ErrorPageComponent },
  
 /* {
     path: 'prospects',
  //   loadChildren: 'app/prospects/prospects.module#ProspectsModule'
  //   loadChildren: () => ProspectsModule
  } */

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
