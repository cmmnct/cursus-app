import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  template: `
   <h1>Een kop</h1>
   <div>Hoi</div>
  `,
  styles: [
    
  ]
})
export class SomeComponent implements OnInit {

  r = 125;
  g = 216;
  b = 45;
  a = 1
  rgba = '';
  constructor() { }

  ngOnInit(): void {

    this.rgba = `rgba(${this.r},${this.g},${this.b},${this.a})`
  }

}
