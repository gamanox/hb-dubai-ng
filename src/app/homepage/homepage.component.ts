import { Component, OnInit } from '@angular/core';
import { HeaderBlackComponent } from '../header-black/header-black.component';
import { FooterBlackComponent } from '../footer-black/footer-black.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  constructor() { 
  	console.log('test');
  }

  ngOnInit() {
  	this.setHeroHeight();
  }

  setHeroHeight(): void {
	  var hero = $('[full-page-hero]');
	  var headerHeight = $('#page-header').outerHeight();
	  var heightToSet = $(window).height();
	  // var audio = new Audio('audio_file.mp3');
	  // audio.play();
	  // heightToSet = Math.max(heightToSet, 600);
	  // heightToSet = Math.min(heightToSet, 1000);
	  hero.css('min-height', heightToSet);
	  $('.home-btn').css('min-height', heightToSet);
	  $('#page-header').hide();
	  // $hero.css('min-height', heightToSet - headerHeight+'px');
   }

}
