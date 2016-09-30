import {Component} from '@angular/core';
import {MessageService} from './messages.service';

@Component({
    selector: 'indicator-component',
    templateUrl: 'app/indicator.component.html',
    providers: [MessageService]
})
export class IndicatorComponent{
    private indicatorMessage: string;
    constructor(private _messageService: MessageService){
        this.indicatorMessage = _messageService.getSuccessMessage();
    }
}