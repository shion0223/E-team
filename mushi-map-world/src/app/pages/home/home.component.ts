import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';

class Geolocation {
  /**
   * 現在位置取得処理
   */
  static getCurrentPosition(): Promise<Position> {
    return new Promise<Position>(
      (
        resolve: (position: Position) => void,
        reject: (positionError: PositionError) => void,
      ) => {
      if (!navigator.geolocation) {
        // 位置情報APIが利用できない場合
        // 自前でPositionErrorを作成
        const error:PositionError = {
          code: undefined,
          message: 'geolocation not supported.',
          PERMISSION_DENIED: undefined,
          POSITION_UNAVAILABLE: undefined,
          TIMEOUT: undefined,
        }
        reject(error);
      }
      const geolocation: Geolocation = navigator.geolocation
      // 成功コールバック
      const successCallback:PositionCallback = (position: Position): void => {
        resolve(position)
      }
      // エラーコールバック
      const errorCallback:PositionErrorCallback = (positionError: PositionError): void => {
        reject(positionError)
      }
      // オプション定義
      const options: PositionOptions = {
        // enableHighAccuracy: boolean,
        // maximumAge: number,
        // timeout: number,
      }
      // 現在位置取得
      geolocation.getCurrentPosition(successCallback, errorCallback, options);
    });
  }

  const updatePosition = async () => {
    try {
      const position: Position = await Geolocation.getCurrentPosition()
      console.log(position)
      // [object GeolocationPosition] {
      //   coords: [object GeolocationCoordinates] {
      //     latitude: XX.XXXXXXX,
      //     longitude: XXX.XXXXXX,
      //     altitude: null,
      //     accuracy: 4507,
      //     altitudeAccuracy: null,
      //     heading: null,
      //     speed: null,
      //   },
      //   timestamp: 1577702787855,
      // }
    } catch (positionError) {
      console.log(positionError)
      // [object GeolocationPositionError] {
      //   code: 1,
      //   message: "User denied Geolocation",
      //   PERMISSION_DENIED: 1,
      //   POSITION_UNAVAILABLE: 2,
      //   TIMEOUT: 3,
      // }
    }
  }
  
  updatePosition()

}



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
