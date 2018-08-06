import { Component, OnInit } from '@angular/core';
import { HeaderBlackComponent } from '../header-black/header-black.component';
import { FooterBlackComponent } from '../footer-black/footer-black.component';
import * as $ from 'jquery';

declare var google;

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.sass']
})
export class PartyComponent implements OnInit {
  map;
  currentMarker;
  myIndex = 1;
  parties = [
    {
      position: '25.229754, 55.286186',
      title: 'MISS LILY´S',
      description: 'Sheraton Grand Hotel | Wednesday Night | DJ Crown Prince',
      type: 'party',
      url: 'https://goo.gl/maps/E4fNKzzvNg92'
    },
    {
      position: '25.093357, 55.149244',
      title: 'INDUSTRIAL AVENUE',
      description: 'Westin Dubai Mena Seyahi Hotel | Thursday Night | DJ Colione & 1 Take Nnandos',
      type: 'party',
      url: 'https://goo.gl/maps/3vfFQT3cQW52'
    },
    {
      position: '25.185756, 55.257269',
      title: '1OAK',
      description: 'JW Marriot Marquis Hotel | Friday Night | 1 Take Nnandos',
      type: 'party',
      url: 'https://goo.gl/maps/EfKqbQnqLMu'
    }
  ]
  
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
    // $('#hb-current-parties').html('PARTIES');
    $('.navbar .nav-link').removeClass('active');
    $('#menu-party').addClass('active');
  }
  
  nextMarker(): void {
    if (this.myIndex < this.parties.length) {
      this.currentMarker.title = this.parties[this.myIndex].title;
      this.currentMarker.description = this.parties[this.myIndex].description;
      const [longitude, latitude] = this.parties[this.myIndex].position.split(',');
      var mkrnewPossition = new google.maps.LatLng(parseFloat(longitude), parseFloat(latitude));
      console.log(mkrnewPossition);
      this.currentMarker.setPosition(mkrnewPossition);
      this.map.panTo(this.currentMarker.position);
      this.myIndex++;
    }
    else {
      this.myIndex = 0;
      this.currentMarker.title = this.parties[this.myIndex].title;
      this.currentMarker.description = this.parties[this.myIndex].description;
      const [longitude, latitude] = this.parties[this.myIndex].position.split(',');
      var mkrnewPossition = new google.maps.LatLng(parseFloat(longitude), parseFloat(latitude));
      console.log(mkrnewPossition);
      this.currentMarker.setPosition(mkrnewPossition);
      this.map.panTo(this.currentMarker.position);
      this.myIndex++;
    }
  }
  initMap(): void  {
    this.map = new google.maps.Map(document.getElementById('map-parties'), {
      center: {lat: 25.195354, lng: 55.277439}, 
      zoom: 4,
      disableDefaultUI: true, 
      styles: [{"elementType": "geometry", "stylers": [{"color": "#212121"} ] }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"elementType": "labels.text.fill", "stylers": [{"color": "#0d0d0d"} ] }, {"elementType": "labels.text.stroke", "stylers": [{"color": "#212121"} ] }, {"featureType": "administrative", "elementType": "geometry", "stylers": [{"color": "#757575"} ] }, {"featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] }, {"featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{"color": "#484848"} ] }, {"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#181818"} ] }, {"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [{"color": "#1b1b1b"} ] }, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"color": "#2c2c2c"} ] }, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#8a8a8a"} ] }, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#373737"} ] }, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#3c3c3c"} ] }, {"featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{"color": "#4e4e4e"} ] }, {"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "transit", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"} ] }, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#3d3d3d"} ] } ]
    });
    const icons = {
      party: {
        icon: '/assets/images/hbd-map-marker.png'
      }
    };
    const party_location = {
      position: new google.maps.LatLng(25.229754, 55.286186),
      type: 'party',
      url: 'https://goo.gl/maps/hvCCMv3Vi3K2'
    }
    ;
    console.log(party_location.position);
    this.currentMarker = new google.maps.Marker({
      position: party_location.position,
      icon: icons[party_location.type].icon,
      title: 'MISS LILY´S',
      description: 'Sheraton Grand Hotel | Wednesday Night | DJ Crown Prince',
      map: this.map,
      url: party_location.url
    });
    this.map.setZoom(14);
    this.map.panTo(this.currentMarker.position);
    console.log('test');
    google.maps.event.addListener(this.currentMarker, 'click', function() {
      // window.location.href = this.url;
      window.open(this.url);
    });
  }
}
