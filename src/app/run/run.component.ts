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
  map;
  currentMarker;
  myIndex = 1;
  currentPoss;
  runs = [
    {
      position: '25.185298, 55.252967',
      title: 'DUBAI CANAL',
      description: 'November 6 | DM @highbeamsdubai for invite details',
      type: 'run',
      url: 'https://goo.gl/maps/zkc5VNVHLDR2'
    },
    {
      position: '25.148110, 55.197634',
      title: 'UMM SUQIEM',
      description: 'November 13 | DM @highbeamsdubai for invite details',
      type: 'run',
      url: 'https://goo.gl/maps/wnvVv8V9SW62'
    },
    {
      position: '25.234254, 55.264469',
      title: 'JUMEIRAH 1',
      description: 'November 20 | DM @highbeamsdubai for invite details',
      type: 'run',
      url: 'https://goo.gl/maps/NaDnkpC6g5p'
    },
    {
      position: '25.184673, 55.238369',
      title: '36 CHAMBERS',
      description: 'November 27 | DM @highbeamsdubai for invite details',
      type: 'run',
      url: 'https://goo.gl/maps/n6b1tyKkH9t'
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
    $('.navbar .nav-link').removeClass('active');
    $('#menu-run').addClass('active');
  }
  nextMarker(): void {
    if (this.myIndex < this.runs.length) {
      this.currentMarker.title = this.runs[this.myIndex].title;
      this.currentMarker.description = this.runs[this.myIndex].description;
      const [longitude, latitude] = this.runs[this.myIndex].position.split(',');
      var mkrnewPossition = new google.maps.LatLng(parseFloat(longitude), parseFloat(latitude));
      console.log(mkrnewPossition);
      this.currentMarker.setPosition(mkrnewPossition);
      this.map.panTo(this.currentMarker.position);
      this.myIndex++;
    }
    else {
      this.myIndex = 0;
      this.currentMarker.title = this.runs[this.myIndex].title;
      this.currentMarker.description = this.runs[this.myIndex].description;
      const [longitude, latitude] = this.runs[this.myIndex].position.split(',');
      var mkrnewPossition = new google.maps.LatLng(parseFloat(longitude), parseFloat(latitude));
      console.log(mkrnewPossition);
      this.currentMarker.setPosition(mkrnewPossition);
      this.map.panTo(this.currentMarker.position);
      this.myIndex++;
    }
  }
  initMap(): void  {
    this.map = new google.maps.Map(document.getElementById('map-runs'), {
      center: { lat: 25.185055, lng: 55.253547 }, 
      zoom: 4,
      disableDefaultUI: true, 
      styles: [{"elementType": "geometry", "stylers": [{"color": "#212121"} ] }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"elementType": "labels.text.fill", "stylers": [{"color": "#0d0d0d"} ] }, {"elementType": "labels.text.stroke", "stylers": [{"color": "#212121"} ] }, {"featureType": "administrative", "elementType": "geometry", "stylers": [{"color": "#757575"} ] }, {"featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{"color": "#9e9e9e"} ] }, {"featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{"color": "#484848"} ] }, {"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "poi.park", "elementType": "geometry", "stylers": [{"color": "#181818"} ] }, {"featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [{"color": "#1b1b1b"} ] }, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"color": "#2c2c2c"} ] }, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#8a8a8a"} ] }, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#373737"} ] }, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"color": "#3c3c3c"} ] }, {"featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{"color": "#4e4e4e"} ] }, {"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#616161"} ] }, {"featureType": "transit", "elementType": "labels.text.fill", "stylers": [{"color": "#757575"} ] }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"} ] }, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#3d3d3d"} ] } ]
      
    });
    const icons = {
      run: {
        icon: '/assets/images/hbd-map-marker.png'
      }
    };
      const [possLongitude, possLatitude] = this.runs[0].position.split(',');
      
     
      const currentPossition = new google.maps.LatLng(parseFloat(possLongitude), parseFloat(possLatitude))
      this.currentMarker = new google.maps.Marker({
        position: currentPossition,
        icon: icons[this.runs[0].type].icon,
        title: this.runs[0].title,
        description: this.runs[0].description,
        map: this.map,
        url: this.runs[0].url
      });
      this.map.setZoom(14);
      this.map.panTo(this.currentMarker.position);
      google.maps.event.addListener(this.currentMarker, 'click', function() {
        // window.location.href = this.url;
        window.open(this.url);
      });
   
    
  }
  
}
