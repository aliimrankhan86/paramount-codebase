// JavaScript Document


  function initMap() {
	"use strict";
	if($("#map").length != 0) {
		
		var map = new google.maps.Map(document.getElementById('map'), {
		  center: {lat: 41.025, lng: 28.980},
		  scrollwheel: false,
		  disableDefaultUI: true,
		  zoom: 13,
		  styles: [
			{
			  featureType: 'all',
			  stylers: [
				{ saturation: -65 }
			  ]
			},{
			  featureType: 'road.arterial',
			  elementType: 'geometry',
			  stylers: [
				{ hue: '#00ffee' },
				{ saturation: 80 }
			  ]
			},{
			  featureType: 'poi.business',
			  elementType: 'labels',
			  stylers: [
				{ visibility: 'off' }
			  ]
			}
		  ]
		});
		
		var image = 'assets/img/marker.png';
		var beachMarker = new google.maps.Marker({
		position: {lat: 41.025, lng: 28.975},
		map: map,
		icon: image
		});
	}
  }