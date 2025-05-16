import { Component, computed, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.type';
import { HighlightTodoDirective } from '../../directives/highlight-todo.directive';

@Component({
  selector: 'app-todos',
  imports: [HighlightTodoDirective],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoService);
  todos = computed<Todo[]>(() => this.todoService.todoItems());

  ngOnInit(): void {
    this.todoService.findAllTodos().subscribe({
      next: (res) => {
        this.todoService.todoItems.set(res);
        console.log(res);
      },
      error: (error) => {
        console.error('Error fetching todos:', error);
      },
    });
  }

  handleCompleteTodo(todo: Number) {
    this.todoService.todoItems.update((prevState) => {
      return prevState.map((current) => {
        if (current.id === todo) {
          return { ...current, completed: !current.completed };
        }
        return current;
      });
    });
  }
}
