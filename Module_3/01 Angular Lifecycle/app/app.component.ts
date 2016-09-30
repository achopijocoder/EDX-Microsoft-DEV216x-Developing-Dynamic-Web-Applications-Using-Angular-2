import {Component, OnInit, AfterContentInit, AfterViewInit} from '@angular/core';


@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  []
})

export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {
   messages : string[] = [];
  public ngOnInit() {
    this.messages.push('OnInit');
  }
  public ngAfterContentInit() {
    this.messages.push('AfterContentInit');
  }
  public ngAfterViewInit() {
    this.messages.push('AfterViewInit');
  }
}