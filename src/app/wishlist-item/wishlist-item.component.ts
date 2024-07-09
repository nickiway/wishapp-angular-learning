import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wishlist-item',
  standalone: true,
  imports: [],
  templateUrl: './wishlist-item.component.html',
  styleUrl: './wishlist-item.component.css',
})
export class WishlistItemComponent {
  @Input() wishText!: string;

  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  toggleFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
