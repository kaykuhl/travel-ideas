import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { TravelideaService } from './../shared/travelidea.service';

@Component({
  selector: 'app-make-travelidea',
  templateUrl: './make-travelidea.page.html',
  styleUrls: ['./make-travelidea.page.scss'],
})

export class MakeTravelideaPage implements OnInit {
  travelForm: FormGroup;

  constructor(
    private aptService: TravelideaService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.travelForm = this.fb.group({
      location: [''],
      detail: [''],
      
    })
  }

  formSubmit() {
    if (!this.travelForm.valid) {
      return false;
    } else {
      this.aptService.createTravel(this.travelForm.value).then(res => {
        console.log(res)
        this.travelForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}