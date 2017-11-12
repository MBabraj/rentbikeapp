import { Component, OnInit, Input } from '@angular/core';
import { Bike } from './../bike'

@Component({
  selector: 'bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  @Input()
  bike: Bike;

  constructor() { }

  ngOnInit() {
  }

}
