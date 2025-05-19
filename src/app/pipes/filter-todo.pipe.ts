import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.type';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform( todos: Todo[], searchBy: string): Todo[] {
    //console.log("todos", todos);
    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(searchBy.toLowerCase());
    });

  }
}
