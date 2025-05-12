import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoItems = signal<Todo[]>([
    { id: 1, userId: 1, title: 'Todo 1', completed: false },
    { id: 2, userId: 1, title: 'Todo 2', completed: true },
    { id: 3, userId: 2, title: 'Todo 3', completed: false },
    { id: 4, userId: 2, title: 'Todo 4', completed: true }
  ])
}
