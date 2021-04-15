import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'email']
  public data: User[] = []
  public isLoadingResults: boolean = true

  constructor(private api: ApiService) { }

  async ngOnInit() {

    
    this.api.getUsers().then((res: any) => {
      
      this.data = res;
      this.isLoadingResults = false;

    }).catch(err => {

      this.isLoadingResults = false;

    });
    

  }





}


// const data = [
//   {
//     "id": "2",
//     "name": "22",
//     "email": "lal@lala.com"
//   },
//   {
//     "id": "3",
//     "name": "22",
//     "email": "lal@lala.com"
//   },
//   {
//     "id": "4",
//     "name": "AAAAB",
//     "email": "lal@lala.com"
//   },
//   {
//     "id": "5",
//     "name": "LALA",
//     "email": "lal@lala.com"
//   },
//   {
//     "id": "6",
//     "name": "Bruno",
//     "email": "teste@teste.com"
//   },
//   {
//     "id": "7",
//     "name": "Edna",
//     "email": "edna@gmail.com"
//   },
//   {
//     "id": "8",
//     "name": "Edna",
//     "email": "edna@gmail.com"
//   }
// ]