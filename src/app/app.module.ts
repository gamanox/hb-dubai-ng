import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderBlackComponent } from './header-black/header-black.component';
import { FooterBlackComponent } from './footer-black/footer-black.component';
import { AppRoutingModule } from './app-routing.module';
import { PartyComponent } from './party/party.component';
import { RunComponent } from './run/run.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderWhiteComponent } from './header-white/header-white.component';
import { FooterWhiteComponent } from './footer-white/footer-white.component';
import { MediumFeedComponent } from './medium-feed/medium-feed.component';
import { FeedService } from './feed.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderBlackComponent,
    FooterBlackComponent,
    PartyComponent,
    RunComponent,
    BlogComponent,
    HeaderWhiteComponent,
    FooterWhiteComponent,
    MediumFeedComponent,
    ScheduleComponent,
    AboutComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
