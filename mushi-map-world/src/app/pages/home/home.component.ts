import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //画面遷移に必要な機能のインポート

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  zoom = 16;
  // 東新宿駅の座標
  // center: google.maps.LatLngLiteral = {
  //   lat: 35.697695,
  //   lng: 139.707354
  // };
  // 地図のオプション
  // options: google.maps.MapOptions = {
  //   disableDefaultUI: true
  // };

  //constructorにrouter変数を宣言
  constructor(private router:Router,) { }

  ngOnInit(): void {
  }

  //ボタンを押したときに呼び出される関数
  //this.router.navigate(['****'])で****に画面遷移
  onClick(){
    this.router.navigate(['spot'])
  }

}
