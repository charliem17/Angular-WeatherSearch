import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key: string = '327b3a6714cd4312441aa5cac7bbf366';
  metric: string = 'imperial'; // standard, metric, imperial

  constructor(private http: HttpClient) { }

  getWeather(cityName: string, state: string): Observable<any> {
    let location = `q=${cityName},${state}`;
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?${location}&units=imperial&APPID=${this.key}`);
  }
}
