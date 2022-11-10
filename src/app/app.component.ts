import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { CityService } from './services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cursus';
  cities: City[] = [];
  provincies: string[] = [];
  showCities: Boolean = true;
  nlText = {
    t1: 'Verberg lijst met steden',
    t2: 'Toon lijst met steden',
  };
  currentCity: City = new City(-1 , '', -1);
  newCity: City = new City(-1, '', -1 , '');

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
    this.provincies = this.cityService.getProvincies();
  }

  toggleCities(event: Event) {
    let input = event.target as HTMLInputElement;
    console.log(input.value);
    this.showCities = !this.showCities;
  }

  showCity(city: City) {
    this.currentCity = city;
  }

  addCity() {
    this.cityService.addCity(this.newCity);
  }
}
