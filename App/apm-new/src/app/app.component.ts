import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <p>Component subline</p>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'New angular app :)';
}
