import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_API = 'https://api.weatherapi.com/v1';
const KEY = 'd1f3d8ffa1104f20b48162051242607';
// ('?key=d1f3d8ffa1104f20b48162051242607&q=paris');

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  fetchWheather(city: string) {
    return this.http.get(`${BASE_API}/forecast.json?key=${KEY}&q=${city}`);
  }

  fetchcities(city: string = '') {
    return this.http.get(`${BASE_API}/search.json?key=${KEY}&q=${city}`);
  }
}
