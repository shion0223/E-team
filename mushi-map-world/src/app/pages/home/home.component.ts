import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  zoom = 16;
  // 東新宿駅の座標
  center: google.maps.LatLngLiteral = {
    lat: 35.697695,
    lng: 139.707354
  };
  // 地図のオプション
  options: google.maps.MapOptions = {
    disableDefaultUI: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
