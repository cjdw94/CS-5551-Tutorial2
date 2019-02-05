import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'to Lab2';
  result: any;
  link= 'https://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/MO/kansas%20city.json';
  link2= 'https://api.wunderground.com/api/36b799dc821d5836/forecast/q/MO/Kansas_city.json';
  constructor(private http: HttpClient){
  }
  show(){
    this.http.get(this.link)
      .subscribe((result)=> {
        this.result = result;
        console.log(this.result);
      });
    this.http.get(this.link2)
      .subscribe((result)=> {
        this.result = result;
        console.log(this.result);

      });
  }
}
