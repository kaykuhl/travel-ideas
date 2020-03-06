import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { TripService } from './../shared/trip.service';

@Component({
  selector: 'app-make-trip',
  templateUrl: './make-trip.page.html',
  styleUrls: ['./make-trip.page.scss'],
})

export class MakeTripPage implements OnInit {
  tripForm: FormGroup;

  constructor(
    private aptService: TripService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.tripForm = this.fb.group({
      name: [''],
      startDate: [''],
      endDate: ['']
    })
  }

  formSubmit() {
    if (!this.tripForm.valid) {
      return false;
    } else {
      this.aptService.createTrip(this.tripForm.value).then(res => {
        console.log(res)
        this.tripForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}