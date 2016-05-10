** Use ng2-easy-table with angular2 QuickStart
Currently results in errors.** See [ng2-easy-table issue 28](https://github.com/ssuperczynski/ng2-easy-table/issues/28)

** Follow these six steps to start: **
* Clone [angular2 quickstart](https://github.com/angular/quickstart/blob/master/README.md)
* Add 'ng2-easy-table' to dependencies within package.json in the root of the project
![addtodependecies](https://cloud.githubusercontent.com/assets/13954708/15130055/0ad044da-1603-11e6-9bc2-18be95e0aeca.png)
* Run '_npm install_'
* Add/edit the following files:
  - app/app.component.ts
  - app/app.config-service.ts
  - app/data.json
  - main.ts
* Run '_npm start_'
* Add/edit the following two files in the root of the project:
  + index.html
  + systemsj.config.js
  

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/angular/quickstart  my-proj
cd my-proj
```

They have no intention of updating the source on `angular/quickstart`.
Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git
```

## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

You're ready to write your application.

**app.component.ts**
``` typescript
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
```
**config-service.ts**
```typescript
import {Injectable} from "@angular/core";
@Injectable()
export class ConfigService {
  public searchEnabled = false;
  public orderEnabled = true;
  public globalSearchEnabled = false;
  public footerEnabled = false;
  public paginationEnabled = false;
  public exportEnabled = false;
  public editEnabled = false;
  public resourceUrl = "app/data.json";
  public rows = 10;
}
```
**data.json**
``` json
{
    "Name": "Dinner With Bernard",
    "Author": "Lola",
    "Guest List": [
        {"Company": "Amazonia", "MarketCap": "5,000,000", "PotluckItem": "drinks"},
        {"Company": "eBayaria", "MarketCap": "20,000,000", "PotluckItem": "desserts"},
        {"Company": "Softmicrosia", "MarketCap": "60,000,000", "PotluckItem": "fruit salads"},
        {"Company": "Ogler", "MarketCap": "6,000,000", "PotluckItem": "chips"},
        {"Company": "EggTorso", "MarketCap": "60,000,000", "PotluckItem": "egg salads"},
        {"Company": "Awchoo", "MarketCap": "100,000,000", "PotluckItem": "green salads"}
    ]
}
```
**main.ts**
``` typescript
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {App} from './app.component';

bootstrap(App);
```
**index.html**
``` html
<html>
  <head>
    <title>Angular 2 QuickStart</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">

    <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/es6-shim/es6-shim.min.js"></script>

    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>

    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err);  });
    </script>
    <script>
    System.import('dist/app/index.component').catch(function (err) {
      console.error(err);
    });
    </script>
  </head>

  <body>
    <my-app>Loading...</my-app>
  </body>
</html>
```
**systemsj.config.js**
``` javascript
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    'ng2-easy-table':             'node_modules/ng2-easy-table/dist'
  };

  // packages tells the System loader how to load
  // when no filename and/or no extension
  var packages = {
    'app':                        { main: 'index.component.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'ng2-easy-table':             { format: 'register', defaultExtension: 'js' },
     dist:                        { format: 'register', defaultExtension: 'js' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade'
  ];

  // add package entries for angular packages in the form
  // '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  };

  // filterSystemConfig - index.html's chance
  // to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
```