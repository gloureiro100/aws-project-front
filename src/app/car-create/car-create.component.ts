import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.scss']
})
export class CarCreateComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  carForm: FormGroup
  isLoadingResults = false;

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      model: [null, Validators.required],
      brand: [null, Validators.required]
    })
  }

  onFormSubmit() {
    console.log(this.carForm)
    this.isLoadingResults = true;
    this.api.postCar(this.carForm.value)
      .then(async (res) => {
        this.isLoadingResults = false;
        this.router.navigate(['/car-list']);
      }, async (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
