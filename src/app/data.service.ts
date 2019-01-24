import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  data() {
    console.log("from data");

  }

  getusers() {
    return this.http.get("https://rest-api-vs.herokuapp.com/courses", { responseType: 'text' });
  }
}
