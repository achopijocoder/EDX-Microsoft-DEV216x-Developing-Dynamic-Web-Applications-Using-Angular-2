import {Component} from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  []
})
export class AppComponent { 
  public showPanel : boolean = true;
  public GetStyles(){
    return {
      'font-style':'italic',
      'font-weight':'bold'
    }
  }

  public GetClasses(){
    return{
      'highlight':true,
      'strike': false
    }
  }
}