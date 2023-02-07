import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DeActivetedService } from '../services/de-activeted.service';
import { RegisterComponent } from '../components/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class UnactivtedGuard implements CanDeactivate<unknown> {
  constructor(private deActivetedServicess: DeActivetedService) {}
  check: boolean = false;
  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.deActivetedServicess.isLoggedValue.subscribe((val) => {
      this.check = val;
    });
    console.log(this.check);
    // return this.check;
    return  component.canExit ? component.canExit() : false;
  }
}
