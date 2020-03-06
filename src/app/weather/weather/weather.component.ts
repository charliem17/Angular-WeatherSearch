import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {

  city: string = '';
  state: string = '';

  weather: Weather;
  currentWeather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(): void {
    if(this.city != '' && this.state != '') {
      console.log(`Fetching weather for ${this.city}, ${this.state}`);
      this.weatherService.getWeather(this.city, this.state).subscribe(
        (weather) => {
          this.weather = weather;
          this.currentWeather = this.weather.list[0];
          console.log(`Fetched weather for ${this.city}, ${this.state}`);
        },
        error => {
          console.log(`Could not find weather for ${this.city}, ${this.state}`);
        }
      );
    }
  }

}
