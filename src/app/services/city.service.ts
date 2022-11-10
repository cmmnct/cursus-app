import { Injectable } from '@angular/core';
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
  ]
  private cities: City[] = [
    new City(
      1,
      'Groningen',
      0,
      'https://www.dutchnews.nl/wpcms/wp-content/uploads/2020/11/central-Groningen.jpg'
    ),
    new City(
      2,
      'Hengelo',
      3,
      'https://media.indebuurt.nl/hengelo/2020/03/05121431/centrum-hengelo-scaled-e1584693263414.jpg'
    ),
    new City(
      3,
      'Den Haag',
      7,
      'https://www.reisroutes.be/userfiles/fotos/skyline-van-den-haag-nederland_28879_xl.jpg'
    ),
    new City(
      4,
      'Assen',
      2,
      'https://www.holland.com/upload_mm/2/0/c/78014_fullimage_people%20enjoying%20the%20spring%20weather%20at%20restaurants%20in%20assen%20%C2%A9%20marc%20venema%20via%20shutterstock.jpg'
    ),
  ];
  constructor() { }
  
  getCities() {
    return this.cities;
  }

  getProvincies() {
    return this.provincies;
  }

  getCity(id:number) {
    return this.cities.find(c => c.id === id);
  }

  addCity(newCity: City) {

    this.cities.push(newCity);
  }
}
