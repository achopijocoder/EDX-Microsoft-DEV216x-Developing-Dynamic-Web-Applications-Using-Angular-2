import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {MessageService} from './messages.service';

bootstrap(AppComponent, [MessageService]);