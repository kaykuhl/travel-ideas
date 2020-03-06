import { Injectable } from '@angular/core';
import { Trip } from '../shared/trip';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class TripService {
  tripListRef: AngularFireList<any>;
  tripRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createTrip(ti: Trip) {
    return this.tripListRef.push({
      name: ti.name,
      startDate: ti.startDate,
      endDate: ti.endDate
          })
  }

  // Get Single
  getTrip(id: string) {
    this.tripRef = this.db.object('/trip/' + id);
    return this.tripListRef;
  }

  // Get List
  getTripList() {
    this.tripListRef = this.db.list('/trip');
    return this.tripListRef;
  }

  // Update
  updateTrip(id, ti: Trip) {
    return this.tripRef.update({
      name: ti.name,
      startDate: ti.startDate,
      endDate: ti.endDate
    })
  }

  // Delete
  deleteTrip(id: string) {
    this.tripRef = this.db.object('/trip/' + id);
    this.tripRef.remove();
  }
}