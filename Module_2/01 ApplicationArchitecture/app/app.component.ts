import {Component} from '@angular/core';
import {TextGenerator} from './demo.module';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  []
})
export class AppComponent { 

  public message: string;

  constructor(){
    let generator = new TextGenerator();
    this.message = generator.GetText();
  }
}