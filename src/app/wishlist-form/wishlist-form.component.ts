import { FormsModule } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import { Wish } from '../../shared/models/wish';

@Component({
  selector: 'app-wishlist-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wishlist-form.component.html',
  styleUrl: './wishlist-form.component.css',
})
export class WishlistFormComponent {
  @Output() addWish = new EventEmitter<Wish>();

  newWish: string = '';

  isWishEmpty() {
    return this.newWish === '';
  }

  handleSubmit() {
    if (this.isWishEmpty()) return;

    this.addWish.emit(new Wish(this.newWish));
    this.newWish = '';
  }
}
