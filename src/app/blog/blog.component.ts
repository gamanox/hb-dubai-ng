import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { HeaderWhiteComponent } from '../header-white/header-white.component';
import { FooterWhiteComponent } from '../footer-white/footer-white.component';
import {Observable} from 'rxjs/Rx';
import * as $ from 'jquery';

declare var google;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  public feeds;
  // feeds: Array<item>;
  constructor(private _feedService: FeedService) { }

  ngOnInit() {
  	this.setHeroHeight();
  	this.getFeed();
  }
  setHeroHeight():void {
  	
  	
  	
  	
      // console.log(feed);
      var hero = $('[full-page-hero]');
      var headerHeight = $('#page-header').outerHeight();
      var heightToSet = $(window).height();
      // heightToSet = Math.max(heightToSet, 600);
      heightToSet = Math.min(heightToSet, 1000);
      // $hero.css('min-height', heightToSet);
      // $hero.css('min-height', heightToSet - headerHeight+'px');
      $('.navbar .nav-link').removeClass('active');
      $('#menu-blog').addClass('active');
  }
    getFeed() {
   this._feedService.getFeed().subscribe(
      data => { this.feeds = data["items"]; },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

}
