import { Component, Input } from '@angular/core';
import { Wish } from '../../shared/models/wish';
import { WishlistItemComponent } from '../wishlist-item/wishlist-item.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [WishlistItemComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  @Input({ required: true }) wishes: Wish[] = [];
}
