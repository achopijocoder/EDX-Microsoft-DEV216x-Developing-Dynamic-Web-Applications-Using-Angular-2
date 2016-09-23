import {Component} from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  []
})
export class AppComponent { 

  public count : number = 2;
  public indicator : boolean = true;
  public messages : string[] = ['Alpha','Bravo','Charlie'];
  public title : string = 'Template Binding';
}