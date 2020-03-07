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

  currentWeather: Weather;
  time: Date;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(): void {
    if(this.city != '' && this.state != '') {
      console.log(`Fetching weather for ${this.city}, ${this.state}`);
      this.weatherService.getWeather(this.city, this.state).subscribe(
        (weather) => {
          this.currentWeather = weather;
          this.time = new Date();
          console.log(`Fetched weather for ${this.city}, ${this.state}`);
        },
        error => {
          console.error(`WeatherComponent: Could not find weather for ${this.city}, ${this.state}`);
        }
      );
    }
  }

}
