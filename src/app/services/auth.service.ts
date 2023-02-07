import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private islogged = new BehaviorSubject(false);
  isLoggedValue = this.islogged.asObservable();

  constructor() {}
  setAuthServices(value: boolean) {
    this.islogged.next(value);
  }
}
