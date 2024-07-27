import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoListComponent } from './weather-info-list.component';

describe('WeatherInfoListComponent', () => {
  let component: WeatherInfoListComponent;
  let fixture: ComponentFixture<WeatherInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherInfoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
