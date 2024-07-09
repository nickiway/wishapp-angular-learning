import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Wish } from '../shared/models/wish';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistFormComponent } from './wishlist-form/wishlist-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishlistComponent,
    WishFilterComponent,
    WishlistFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}

  wishes: Wish[] = [
    new Wish('wish 1'),
    new Wish('wish 2', false),
    new Wish('wish 3', true),
  ];

  filter: any;
}
