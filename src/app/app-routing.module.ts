import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { HeaderBlackComponent } from './header-black/header-black.component';
import { FooterBlackComponent } from './footer-black/footer-black.component';
import { PartyComponent } from './party/party.component';
import { RunComponent } from './run/run.component';
import { BlogComponent } from './blog/blog.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'party', component: PartyComponent },
  { path: 'run', component: RunComponent },
  { path: 'features', component: BlogComponent },
  { path: 'schedules', component: ScheduleComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}