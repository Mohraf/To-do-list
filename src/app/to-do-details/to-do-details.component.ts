import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css']
})
export class ToDoDetailsComponent implements OnInit {
  @Input() todo!: ToDo; 

  constructor() { }

  ngOnInit(): void {
  }

}
