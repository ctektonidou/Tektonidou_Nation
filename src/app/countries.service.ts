import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countries } from './countries';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>(`${this.baseUrl}` + `/countries`);
  }

  getLanguagesSpoken(id: number): Observable<Countries[]> {
    return this.http.get<Countries[]>(
      `${this.baseUrl}` + `countries/${id}/languages`
    );
  }
}
