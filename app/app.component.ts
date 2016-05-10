///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>
import {Component}     from '@angular/core';
import {bootstrap}     from '@angular/platform-browser-dynamic';
import {AppComponent}  from 'ng2-easy-table/app/app.component';
import {ConfigService} from "./config-service";

@Component({
  selector: 'app',
  directives: [AppComponent],
  providers: [ConfigService],
  template: ` <h3> My use of ng2-easy-table </h3>
    <ng2-table [configuration]="configuration"></ng2-table>
  `
})
export class App {
  constructor(private configuration:ConfigService) {}
}

bootstrap(App, [ConfigService]);
