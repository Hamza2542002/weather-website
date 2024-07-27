import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { hour } from '../../shared';

@Component({
  selector: 'app-weather-hours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-hours.component.html',
  styleUrl: './weather-hours.component.scss',
})
export class WeatherHoursComponent {
  @Input() hours!: hour[];
  @Input() day!: string;
  @Output() currentHour: EventEmitter<hour> = new EventEmitter<hour>();
  @ViewChild('myli') li!: ElementRef;
  count: number = 0;

  showHourData(hour: hour) {
    this.currentHour.emit(hour);
  }

  moveSlide(i: number) {
    if (this.count == 0 && i == -1) this.count = 19;
    else if (this.count == 19 && i == 1) this.count = 0;
    else this.count += i;
    console.log(this.count);
    this.li.nativeElement.style.transform = `translateX(-${170 * this.count}px)`;
  }
}
