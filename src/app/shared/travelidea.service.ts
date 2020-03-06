import { Injectable } from '@angular/core';
import { Travelidea } from '../shared/travelidea';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class TravelideaService {
  travelListRef: AngularFireList<any>;
  travelRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createTravel(ti: Travelidea) {
    return this.travelListRef.push({
      location: ti.location,
      date: ti.date,
      dayOfWeek: ti.dayOfWeek,
      detail: ti.detail,
      morning: ti.morning,
      afternoon: ti.afternoon,
      evening: ti.evening,
      night: ti.night
          })
  }

  // Get Single
  getTravel(id: string) {
    this.travelRef = this.db.object('/travelidea/' + id);
    return this.travelRef;
  }

  // Get List
  getTravelList() {
    this.travelListRef = this.db.list('/travelidea');
    return this.travelListRef;
  }

  // Update
  updateTravel(id, ti: Travelidea) {
    return this.travelRef.update({
      location: ti.location,
      date: ti.date,
      dayOfWeek: ti.dayOfWeek,
      detail: ti.detail,
      morning: ti.morning,
      afternoon: ti.afternoon,
      evening: ti.evening,
      night: ti.night
    })
  }

  // Delete
  deleteTravel(id: string) {
    this.travelRef = this.db.object('/travelidea/' + id);
    this.travelRef.remove();
  }
}