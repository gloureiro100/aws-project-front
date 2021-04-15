import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Rent } from '../models/rent.class';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.scss']
})
export class RentListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'carId', 'userId']
  public data: Rent[] = []
  public isLoadingResults: boolean = true

  constructor(private api: ApiService) { }

  async ngOnInit() {
    
    this.api.getRents().then((res: any) => {
      
      this.data = res;
      this.isLoadingResults = false;

    }).catch(err => {

      this.isLoadingResults = false;

    });
    

  }

}
