import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './models/user.class';
import { catchError, tap, map } from 'rxjs/operators';
import axios from 'axios';


const httpOptions =
  new HttpHeaders(
    {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Origin": "*",
      'Origin': 'http://localhost.com'
    });

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const awsUrl = 'http://qxk6pov3eg.execute-api.us-east-1.amazonaws.com/dev'
const apiUrl = `${proxyUrl}${awsUrl}` 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(`${apiUrl}/users`,
      {
        headers: httpOptions
      });
  }

  async get(): Promise<User[]> {

    return await axios.get('https://qxk6pov3eg.execute-api.us-east-1.amazonaws.com/dev/users');
    
  }

}
