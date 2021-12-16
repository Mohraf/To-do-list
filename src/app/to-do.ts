export class ToDo {
  showDetails: boolean;
  constructor(public id: number, public title: string, public details: string[], public dueDate: Date) {
    this.showDetails = false;
  }
}
