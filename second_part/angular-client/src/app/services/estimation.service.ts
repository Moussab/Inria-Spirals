import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EstimationService {

  constructor(private http: HttpClient) { }
  subject = new Subject<any>();

  getErrorEstimation() {
    this.http.get('http://localhost:8080/api/estimation', httpOptions).subscribe(
      data => {
        this.subject.next(data);
      }
    );
    return this.subject;
  }
}
