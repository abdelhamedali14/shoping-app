import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter = new BehaviorSubject(0);
  currentValue = this.counter.asObservable();

  constructor() {}
  changeValue(count: number) {
    this.counter.next(count);
  }

  increaseCounter() {
    let x = this.counter.value + 1;
    this.counter.next(x);
  }
 dicreaseCounter() {
    let x = this.counter.value - 1;
    this.counter.next(x);
  }
}
