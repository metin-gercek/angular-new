import { Component, computed, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todoService = inject(TodoService);
  todos = computed<Todo[]>(() => this.todoService.todoItems());
  
  ngOnInit(): void {
    console.log(this.todoService.todoItems());
    
  }
  

}
