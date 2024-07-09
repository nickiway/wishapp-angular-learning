import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Wish } from '../../shared/models/wish';

const filters = [
  (wish: Wish) => wish,
  (wish: Wish) => wish.completed,
  (wish: Wish) => !wish.completed,
];

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  filterValue: number = 0;

  ngOnInit(): void {
    this.updateFilter(0);
  }

  updateFilter(value: number) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
