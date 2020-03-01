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
      detail: ti.detail
          })
  }

  // Get Single
  getTravel(id: string) {
    this.travelRef = this.db.object('/travelidea/' + id);
    return this.travelListRef;
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
      detail: ti.detail
    })
  }

  // Delete
  deleteTravel(id: string) {
    this.travelRef = this.db.object('/travelidea/' + id);
    this.travelRef.remove();
  }
}