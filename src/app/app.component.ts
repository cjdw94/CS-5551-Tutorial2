import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'to Lab2';
  state = 'MO';
  city = 'Kansas City';
  result: any;
  result2: any;
  link1 = 'https://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/MO/kansas%20city.json';
  link2 = 'https://api.wunderground.com/api/36b799dc821d5836/hourly/q/MO/Kansas_City.json';
  constructor(private http: HttpClient) {
  }
  show() {
    this.http.get('https://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/' + this.state + '/' + this.city + '.json')
      .subscribe((result) => {
        this.result = result;
        console.log(this.result);

      });
    this.http.get('https://api.wunderground.com/api/36b799dc821d5836/hourly/q/' + this.state + '/' + this.city + '.json')
      .subscribe((result2) => {
        this.result2 = result2;
        console.log(this.result2);

      });

  }
}

