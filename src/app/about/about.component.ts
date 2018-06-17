import { Component, OnInit } from '@angular/core';
import { HeaderWhiteComponent } from '../header-white/header-white.component';
import { FooterWhiteComponent } from '../footer-white/footer-white.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.setHeroHeight();
  }

  setHeroHeight(): void {
    var hero = $('[full-page-hero]');
    var headerHeight = $('#page-header').outerHeight();
    var heightToSet = $(window).height();
    heightToSet = Math.max(heightToSet, 600);
    heightToSet = Math.min(heightToSet, 1000);
    // $hero.css('min-height', heightToSet);
    // $hero.css('min-height', heightToSet - headerHeight+'px');
    $('.navbar .nav-link').removeClass('active');
    $('#menu-about').addClass('active');
  }
}
