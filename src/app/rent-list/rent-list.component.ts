import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Car } from '../models/car.class';
import { Rent } from '../models/rent.class';
import { User } from '../models/user.class';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.scss']
})
export class RentListComponent implements OnInit {

  public displayedColumns: string[] = ['carName', 'userName', 'status']
  public data: Rent[] = []
  public users: User[] = [];
  public cars: Car[] = [];
  public rents: Rent[] = [];

  public isLoadingResults: boolean = true

  constructor(private api: ApiService) { }

  async ngOnInit() {

      let result: Rent[] = [];
    
      this.cars = await this.api.getCars();

      this.users = await this.api.getUsers();

      this.rents = await this.api.getRents();

      // this.rents = this.rents.filter(item => item.status);

      this.cars.forEach(car => {

        let rent: Rent = this.rents.find(item => item.carId === car.id );

        if(!rent){
          rent = new Rent();
          rent.userName = "";
          rent.status = false;
        } else {
          rent.userName = this.users.find(user => user.id === rent.userId).name;
        }

        rent.carName = car.model;

        result.push(rent);

      });

      this.data = result;

      this.isLoadingResults = false;


  }

}
