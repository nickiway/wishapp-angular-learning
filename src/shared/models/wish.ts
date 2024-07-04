export class Wish {
  constructor(public title: string, public completed: boolean = false) {
    this.title = title;
    this.completed = completed;
  }
}
