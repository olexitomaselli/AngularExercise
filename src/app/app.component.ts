import { Component } from '@angular/core';
import { Card } from './components/models/Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularExercise';


  cards: Card[] = [
    {
      title: 'Card title uno',
      description: 'card description uno',
      image: 'https://picsum.photos/200/300'
    },
    {
      title: 'Card title due',
      description: 'card description due',
      image: 'https://picsum.photos/200/300'
    },
    {
      title: 'Card title tre',
      description: 'card description tre',
      image: 'https://picsum.photos/200/300'
    },
  ]
}
