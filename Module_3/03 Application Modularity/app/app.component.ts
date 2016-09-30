import {Component} from '@angular/core';
import {MessageService} from './messages.service';
import {IndicatorComponent} from './indicator.component';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  providers: [MessageService],
  directives:  [IndicatorComponent]
})
export class AppComponent {
  private appMessage: string;
  constructor(private _messageService: MessageService){
    this.appMessage = _messageService.getErrorMessage();
  }
 }