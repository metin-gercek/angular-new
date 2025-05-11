import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = signal<number>(0);

  increment() {
    this.count.update((value) => value + 1);
  }
  decrement() {
    this.count.update((value) => value - 1);
  }
  reset() {
    this.count.set(0);
  }

  
}
