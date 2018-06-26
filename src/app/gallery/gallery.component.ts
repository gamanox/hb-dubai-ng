import { Component, OnInit } from '@angular/core';
import { HeaderWhiteComponent } from '../header-white/header-white.component';
import { FooterWhiteComponent } from '../footer-white/footer-white.component';

import * as $ from 'jquery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {


  

  constructor() { 
   
  }

  ngOnInit() {
  	// this.loadMason();
  	// this.loadImgsLoaded();
  	this.setHeroHeight();

  }


  setHeroHeight() {
    var hero = $('[full-page-hero]');
    var headerHeight = $('#page-header').outerHeight();
    var heightToSet = $(window).height();
    // heightToSet = Math.max(heightToSet, 600);
    // heightToSet = Math.min(heightToSet, 1000);
    // $hero.css('min-height', heightToSet);
    hero.css('min-height', heightToSet - headerHeight+'px');
    $('.navbar .nav-link').removeClass('active');
    $('#menu-gallery').addClass('active');

    // var grid = $('.grid').masonry({
    //   itemSelector: '.grid-item',
    //   percentPosition: true,
    //   gutter: '.gutter-sizer',
    //   columnWidth: '.grid-sizer'
    // });
    // layout Masonry after each image loads
    // grid.imagesLoaded().progress( function() {
    //   grid.masonry();
    // });  
    
  }
}
