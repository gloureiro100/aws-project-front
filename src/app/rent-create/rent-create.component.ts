import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Car } from '../models/car.class';
import { Rent } from '../models/rent.class';
import { User } from '../models/user.class';

@Component({
  selector: 'app-rent-create',
  templateUrl: './rent-create.component.html',
  styleUrls: ['./rent-create.component.scss']
})
export class RentCreateComponent implements OnInit {

  rentForm: FormGroup;

  users: User[];
  cars: Car[];

  msg: any = {
    type: "",
    message: ""
  };

  isLoadingResults = false;

  constructor(
    private builder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) { }

  async ngOnInit() {

    this.getCars();
    this.getUsers();

    this.rentForm = this.builder.group({
      carId: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

  async createRent() {

    this.isLoadingResults = true;

    this.api.postRent(this.rentForm.value).then(async (response: any) => {

      this.msg = {
        type: 'success',
        message: response.message
      };

      this.isLoadingResults = false;
      this.router.navigate(['/rent-list']);
    }).catch(async err => {

      this.msg = {
        type: 'error',
        message: err.response.data.message
      };

      this.isLoadingResults = false;
    });

  }

  async getUsers() {
    this.users = await this.api.getUsers();
  }

  async getCars() {
    this.cars = await this.api.getCars();
    const activeRents = (await this.api.getRents()).filter(x => x.status);

    this.cars = this.cars.filter(x => !activeRents.find(y => y.carId === x.id))
  }



}
