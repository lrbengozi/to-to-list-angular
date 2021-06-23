import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks = [
    { id: 1, name: "Luiz Rogério", email: "lrbengozi@gmail.com", description: "Fazer uma To-Do list"},
    { id: 2, name: "Fulado de Tal", email: "fulano@gmail.com", description: "Fazer um teste"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
