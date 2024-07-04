import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Wish } from '../shared/models/wish';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  wishes: Wish[] = [
    new Wish('wish 1'),
    new Wish('wish 2'),
    new Wish('wish 3', true),
  ];
  title = 'wishapp';
}
