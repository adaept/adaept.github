/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, For, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello! <br/> {{ name }}</h1>'
})

// Component controller
class MyAppThemes {
  name: string;
  constructor() {
    this.name = 'Alice Themes';
  }
}

// Annotation section
@Component({
  selector: 'my-book'
})
@View({
  template: '<h1>Hello! <br/> {{ name }}</h1>'
})

// Component controller
class MyAppBook {
  name: string;
  constructor() {
    this.name = 'My Book';
  }
}

// Ref: jdf-ngThemeSwitcher http://plnkr.co/edit/hNs7ps?p=preview

bootstrap(MyAppThemes);
bootstrap(MyAppBook);
