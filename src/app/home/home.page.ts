import { Component, OnInit } from '@angular/core';
import { Travelidea } from '../shared/Travelidea';
import { TravelideaService } from './../shared/travelidea.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Travels = [];

  constructor(
    private aptService: TravelideaService
  ) { }

  ngOnInit() {
    this.fetchTravels();
    let travelRes = this.aptService.getTravelList();
    travelRes.snapshotChanges().subscribe(res => {
      this.Travels = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Travels.push(a as Travelidea);
      })
    })
  }

  fetchTravels() {
    this.aptService.getTravelList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteTravel(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteTravel(id)
    }
  }
}