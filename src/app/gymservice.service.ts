import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GymserviceService {

  constructor(private http: HttpClient) { }
  // getYoga() {
  //   return this.http.get("http://localhost:4200/yoga");

  // }
  // getSandc() {
  //   return this.http.get("http://localhost:4200/sandc");
    
  // }

  // getBoxing() {
  //   return this.http.get("http://localhost:4200/boxing");
    
  // }

  // getHrx() {
  //   return this.http.get("http://localhost:4200/hrx");
    
  // }
  getProgramdetailsFromBackend(currentRoute) {
      return this.http.get("http://localhost:3000/" + currentRoute)
  }

}

