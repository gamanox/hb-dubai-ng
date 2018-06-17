import { Component, OnInit } from '@angular/core';
import { HeaderWhiteComponent } from '../header-white/header-white.component';
import { FooterWhiteComponent } from '../footer-white/footer-white.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.setHeroHeight();
  }
  setHeroHeight(): void {
    var hero = $('[full-page-hero]');
    var headerHeight = $('#page-header').outerHeight();
    var heightToSet = $(window).height();
    // heightToSet = Math.max(heightToSet, 600);
    // heightToSet = Math.min(heightToSet, 1000);
    // $hero.css('min-height', heightToSet);
    // $hero.css('min-height', heightToSet - headerHeight+'px');
    hero.css('min-height', heightToSet);

    $('.navbar .nav-link').removeClass('active');
    $('#menu-schedule').addClass('active');
  }

}
