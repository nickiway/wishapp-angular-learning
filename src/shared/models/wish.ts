import { v4 as uuid } from 'uuid';

export class Wish {
  private id: string = uuid();

  constructor(public title: string, public completed: boolean = false) {
    this.title = title;
    this.completed = completed;
  }

  get wishId() {
    return this.id
  }
}
