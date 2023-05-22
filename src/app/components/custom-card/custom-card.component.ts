import { Component, Input } from '@angular/core';
import { Card } from '../models/Card';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent {
  @Input() card!: Card;
}
