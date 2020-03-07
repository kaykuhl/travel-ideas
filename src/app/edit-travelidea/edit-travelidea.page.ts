import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { TravelideaService } from './../shared/travelidea.service';

@Component({
  selector: 'app-edit-travelidea',
  templateUrl: './edit-travelidea.page.html',
  styleUrls: ['./edit-travelidea.page.scss'],
})

export class EditTravelideaPage implements OnInit {
  updateTravelForm: FormGroup;
  id: any;

  constructor(
    private aptService: TravelideaService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getTravel(this.id).valueChanges().subscribe(res => {
      this.updateTravelForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateTravelForm = this.fb.group({
      location: [''],
      date: [''],
      dayOfWeek: [''],
      detail: [''],
      morning: [''],
      afternoon: [''],
      evening: [''],
      night: ['']
    })
    console.log(this.updateTravelForm.value)
  }

  updateForm() {
    this.aptService.updateTravel(this.id, this.updateTravelForm.value)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(error => console.log(error));
  }
}