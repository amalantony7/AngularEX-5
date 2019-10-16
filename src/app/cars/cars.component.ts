import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

   public cars = [];

  constructor(private _eventService : EventService) { }

  ngOnInit() {

    this._eventService.getCars()
                      .subscribe(
                        res => this.cars = res,
                        error => console.log("Error! " + error)
                      )

  }

}
