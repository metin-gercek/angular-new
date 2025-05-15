import { inject, Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  http = inject(HttpClient);

  todoItems = signal<Todo[]>([]);

  findAllTodos() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.get<Todo[]>(url).pipe(
      catchError((error) => {
        console.error('Error fetching todos:', error);
        throw error;
      })
     );
  }
}
