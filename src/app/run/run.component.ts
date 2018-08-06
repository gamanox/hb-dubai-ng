import { Component, OnInit } from '@angular/core';
import { HeaderBlackComponent } from '../header-black/header-black.component';

import { FooterBlackComponent } from '../footer-black/footer-black.component';

import * as $ from 'jquery';


declare var google;

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.sass']
})
export class RunComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
    this.setHeroHeight();
    this.initMap();
  }
  setHeroHeight(): void {
    var hero = $('[full-page-hero]');
    var headerHeight = $('#page-header').outerHeight();
    var heightToSet = $(window).height();
    // heightToSet = Math.max(heightToSet, 600);
    // heightToSet = Math.min(heightToSet, 1000);
    hero.css('min-height', heightToSet+22);
    // $hero.css('min-height', heightToSet - headerHeight+'px');
    $('.navbar .nav-link').removeClass('active');
    $('#menu-run').addClass('active');
  }
  initMap(): void  {
    var map = new google.maps.Map(document.getElementById('map-runs'), {
      center: { lat: 25.224234, lng: 55.285696 },
      zoom: 4,
      disableDefaultUI: true, 
      styles: [{"elementType": "geometry", "stylers": [{"color": "#212121"} ] }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"elementType": "labels.text.fill", "stylers": [{"color": "#0d0d0d"} ] }, {"elementType": "labels.text.stroke", "stylers": [{"color": "#212121"} ] }, {"featureType": "administrative", "elementType": "geometry", "stylers": [{"color": "#757575"} ] }, {"featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] }, {"featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{"color": "#484848"} ] }, {"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#181818"} ] }, {"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [{"color": "#1b1b1b"} ] }, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"color": "#2c2c2c"} ] }, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#8a8a8a"} ] }, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#373737"} ] }, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#3c3c3c"} ] }, {"featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{"color": "#4e4e4e"} ] }, {"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "transit", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"} ] }, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#3d3d3d"} ] } ]
      
    });
    var icons = {
      party: {
        icon: '/assets/images/hbd-map-marker.png'
      }
    };
    var parties_locations = [
      {
        position: new google.maps.LatLng(25.224234, 55.285696),
        type: 'party',
        url: 'https://goo.gl/maps/Dk6Q2X7gRXv'
      }
    ];
    parties_locations.forEach(function(party_location) {
      var marker = new google.maps.Marker({
        position: party_location.position,
        icon: icons[party_location.type].icon,
        map: map,
        url: party_location.url
      });
      map.setZoom(14);
      map.panTo(marker.position);
      google.maps.event.addListener(marker, 'click', function() {
        // window.location.href = this.url;
        window.open(this.url);
      });
    });
    
  }
  
}
