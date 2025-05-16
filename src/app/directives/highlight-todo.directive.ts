import { Directive, inject, input, ElementRef, effect } from '@angular/core';

@Directive({
  selector: '[appHighlightTodo]'
})
export class HighlightTodoDirective {

  isComplete = input(false);
  el = inject(ElementRef);

  styleEffect = effect(() => {
    if (this.isComplete()) {
      this.el.nativeElement.style.color = 'lightgreen';
    } else {
      this.el.nativeElement.style.color = 'lightcoral';
    }
  })

}
