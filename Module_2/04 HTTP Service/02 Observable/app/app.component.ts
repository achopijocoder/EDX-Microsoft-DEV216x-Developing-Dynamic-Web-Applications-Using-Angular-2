import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  []
})
export class AppComponent {
    public myIP : string;

    constructor(private http : Http) {
      this.getIPAddress()
          .subscribe(
            ipdata => this.myIP = ipdata              
          );
    }
    private mapData(response: Response) {
      return response.json().origin;
    }
    private getIPAddress() {
      return this.http.get('http://httpbin.org/ip').map(this.mapData);
    }
}