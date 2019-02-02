/// <reference types="@types/googlemaps" />
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MapDirections';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  @ViewChild('startLocation') start: ElementRef;
  @ViewChild('endLocation') end: ElementRef;



  ngOnInit() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    this.directionsDisplay.setMap(map);

  }

  calcRoute() {
        this.directionsService.route({
        origin: this.start.nativeElement.value,
        destination: this.end.nativeElement.value,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      }, (response, status) =>{
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
  }

}
