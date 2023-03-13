import { HttpClient } from '@angular/common/http';
import {
  Component,
  Injectable,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public forecasts?: WeatherForecast[];

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  title = 'angularapp';
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://your-web-api-endpoint.com/api/data');
  }

}


