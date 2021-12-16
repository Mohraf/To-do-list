import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todos: ToDo[] = [
    new ToDo(1, 'Make Bed', ['Spread sheets', 'Fold blankets', 'Lay Pillows'], new Date(2021, 12, 17)),
    new ToDo(2, 'Clean Room', ['Sweep floor', 'Mop floor'], new Date(2021, 12, 17)),
  ];

  toggleDetails(index: number) {
    this.todos[index].showDetails = !this.todos[index].showDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
