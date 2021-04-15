import { Injectable } from '@angular/core';
import { User } from './models/user.class';
import axios from 'axios';
import { Car } from './models/car.class';
import { Rent } from './models/rent.class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private instance = axios.create({
    baseURL: 'https://qxk6pov3eg.execute-api.us-east-1.amazonaws.com/dev'
  });
  
  async getUsers(): Promise<User[]>{
    return await (await this.instance.get('/users')).data;
  }

  async getCars(): Promise<Car[]>{
    return await (await this.instance.get('/cars')).data;
  }

  async getRents(): Promise<Rent[]>{
    return await (await this.instance.get('/rents')).data;
  }

  async postUser( params: User): Promise<Response>{
    return this.instance.post('/users', params);
  }

  async postCar(params: Car): Promise<Response>{
    return this.instance.post('/cars', params);
  }

  async postRent(params: Rent): Promise<Response>{
    return this.instance.post('/rents', params);
  }

}
