import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate([''])
  }

}
