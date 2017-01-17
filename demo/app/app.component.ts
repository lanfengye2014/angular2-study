import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    <ul>
      <li *ngFor="let carPart of carParts">
        <h2>{{carPart.name}}</h2>
        <p>{{carPart.description}}</p>
        <p>{{carPart.inStock}} in Stock</p>
      </li>
    </ul>
  `,
})
export class AppComponent {
  title = 'Ultra Racing';
  carParts = [{
    'id': 1,
    'name': 'Super Tires',
    'description': 'These tires are the very best',
    'inStock': 5
  }, {
      'id': 2,
      'name': 'Reinforced Shocks',
      'description': 'Shocks made from kryptonite',
      'inStock': 4
    }]
}
