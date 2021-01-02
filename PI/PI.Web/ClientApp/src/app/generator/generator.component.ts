import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader, MouseEvent } from '@agm/core';

/// <reference types="@types/google-maps" />



@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})


export class GeneratorComponent implements OnInit {


  @ViewChild('search', { static: true }) searchElementRef: ElementRef;

  public avoidFerries: boolean = false;
  public avoidHighways: boolean = false;
  public avoidTolls: boolean = false;
  public provideRouteAlternatives: boolean = true;
  public optimizeWaypoints: boolean = false;
  public latitude: number;
  public longitude: number;
  public address: string;
  public zoom: number;
  public latlongs: any = [];
  public latlong: any = {};
  public searchControl: FormControl;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }
  public origin;
  public destination;
  public waypoints = [];

  reset() {
    console.log(this.latlongs)
    this.latlongs = [];
    this.waypoints = [];
    this.origin = null;
    this.destination = null;
  }

  HighwaysTrue(event: any) {
    this.avoidHighways = true;
  }
  HighwaysFalse(event: any) {
    this.avoidHighways = false;
  }
  FerriesTrue(event: any) {
    this.avoidFerries = true;
  }
  FerriesFalse(event: any) {
    this.avoidFerries = false;
  }
  TollsTrue(event: any) {
    this.avoidTolls = true;
  }
  TollsFalse(event: any) {
    this.avoidTolls = false;
  }
  optimizeWaypointsTrue(event: any) {
    this.optimizeWaypoints = true;
  }
  optimizeWaypointsFalse(event: any) {
    this.optimizeWaypoints = false;
  }
  provideRouteAlternativesTrue(event: any) {
    this.provideRouteAlternatives = true;
  }
  provideRouteAlternativesFalse(event: any) {
    this.provideRouteAlternatives = false;
  }

  generuj() {

    for (var _i = 0; _i < this.latlongs.length; _i++) {
      var num = this.latlongs[_i];
      if (_i === 0) {
        this.origin = { lat: parseFloat(num.latitude), lng: parseFloat(num.longitude) };
        console.log(parseFloat(num.latitude))
      }
      else if (_i === this.latlongs.length - 1) {
        this.destination = { lat: parseFloat(num.latitude), lng: parseFloat(num.longitude) };
        console.log(parseFloat(num.latitude))
      }
      else if (_i !== this.latlongs.length && _i !== 0) {
        const waypoint = { location: { lat: parseFloat(num.latitude), lng: parseFloat(num.longitude) } };
        this.waypoints.push(waypoint);
        console.log(parseFloat(num.latitude))
      }
    }

  }

  ngOnInit() {
    this.zoom = 5;
    this.latitude = 50.821400;
    this.longitude = 19.117444;

    this.searchControl = new FormControl();

    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {

      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          const latlong = {
            name: place.formatted_address,
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng()
          };

          this.latlongs.push(latlong);
          this.searchControl.reset();
        });
      });
    });
  }
}
