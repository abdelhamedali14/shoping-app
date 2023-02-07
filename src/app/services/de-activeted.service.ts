import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeActivetedService {
  private isLogged = new BehaviorSubject(true);
  isLoggedValue = this.isLogged.asObservable();
  constructor() {}
  setAuthServices(value: boolean) {
    this.isLogged.next(value);
  }
}
