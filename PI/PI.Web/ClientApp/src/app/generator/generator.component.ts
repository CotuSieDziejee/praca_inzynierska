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

  public latitude: number;
  public longitude: number;
  public address: string;
  public zoom: number;
  public latlongs: any = [];
  public latlong: any = {};
  public searchControl: FormControl;
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }
  reset() {
    this.latlongs = [];
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
            name: place.name,
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
