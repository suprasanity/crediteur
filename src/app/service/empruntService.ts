import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Emprunt} from "../model/emprunt";


@Injectable({
  providedIn: 'root',
})
export class EmpruntService {
  private empruntsUrl = 'YOUR_API_ENDPOINT_HERE'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAllEmprunts(): Observable<Emprunt[]> {
    // Send an HTTP GET request to fetch all emprunt data
    return this.http.get<Emprunt[]>(this.empruntsUrl);
  }
}
