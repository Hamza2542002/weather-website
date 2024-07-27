import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  condition,
  current,
  forecastday,
  hour,
  Location,
  wheather,
} from '../../shared';
import { WeatherInfoListComponent } from '../weather-info-list/weather-info-list.component';
import { WeatherHoursComponent } from '../weather-hours/weather-hours.component';

type city = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    WeatherHoursComponent,
    FormsModule,
    WeatherInfoListComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  weather!: wheather;
  current!: current | hour;
  cityName!: string;
  cities!: city[];
  location!: Location;
  day: string = new Date().toDateString().split(' ')[0];
  showCities: boolean = false;
  condition!: condition;
  forecast: forecastday[] = [];
  hours!: hour[];
  hour!: string;
  constructor(private forcastService: WeatherService) {}

  ngOnInit() {
    this.getweather();
  }

  getweather(cityName: string = 'paris') {
    this.forcastService.fetchWheather(cityName).subscribe((value) => {
      this.weather = value as wheather;
      this.current = this.weather.current;
      this.location = this.weather.location as Location;
      this.hours = this.weather.forecast.forecastday[0].hour;
      this.condition = this.weather.current.condition;
      this.hour = this.location.localtime.split(' ')[1];
      this.showCities = false;
      this.cityName = '';
    });
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    (e.target as HTMLInputElement).value = '';
  }

  handleHourChange(hour: hour) {
    console.log(hour);
    this.current = hour;
    this.condition = hour.condition;
    this.hour = this.current.time.split(' ')[1];
  }

  getCity(e: Event) {
    this.forcastService.fetchcities(this.cityName).subscribe((value) => {
      this.cities = value as city[];
    });
  }
}
