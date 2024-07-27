import { Component, Input } from '@angular/core';
import { current, hour } from '../../shared';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-info-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-info-list.component.html',
  styleUrl: './weather-info-list.component.scss',
})
export class WeatherInfoListComponent {
  @Input() currenWeather!: current | hour;
  // @Input() hout!: hour;
}
