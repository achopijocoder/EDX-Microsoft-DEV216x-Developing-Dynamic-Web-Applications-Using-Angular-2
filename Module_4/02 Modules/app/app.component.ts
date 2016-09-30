import {Component} from '@angular/core';
import * as DataManager from './sample.module';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  []
})
export class AppComponent { 
  public stringExample: string = new DataManager.StringGetter().GetString();
  public numberExample : number = new DataManager.NumberGetter().GetNumber();
}