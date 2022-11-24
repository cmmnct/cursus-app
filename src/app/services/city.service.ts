import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { City } from '../city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private provincies = [
    'Groningen',
    'Friesland',
    'Drenthe',
    'Overijssel',
    'Gelderland',
    'Utrecht',
    'Noord-Holland',
    'Zuid-Holland',
    'Zeeland',
    'Noord-Brabant',
    'Limburg',
    'Flevoland',
  ];
  private cities: City[] = [];
  someProperty?:City
  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    return this.http
      .get<City[]>('../assets/cities.json')
      .pipe(
        tap((result) =>
          console.log(`Dit komt binnen als obeservable : ${result}`)
        )
      );
  }

  getProvincies() {
    return this.provincies;
  }

  getCity(id: number) {
    return this.cities.find((c) => c.id === id);
  }

  addCity(newCity: City) {
    newCity.id = this.cities.length + 1;
  
     this.someProperty ? this.cities.push(this.someProperty) : null ;

  }

}
