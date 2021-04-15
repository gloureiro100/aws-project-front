import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Car } from '../models/car.class';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'model', 'brand']
  public data: Car[] = []
  public isLoadingResults: boolean = true

  constructor(private api: ApiService) { }

  async ngOnInit() {
    
    this.api.getCars().then((res: any) => {
      
      this.data = res;
      this.isLoadingResults = false;

    }).catch(err => {

      this.isLoadingResults = false;

    });
    

  }

}
