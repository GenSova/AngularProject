import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginComponent} from '../main/login/login.component';

@Injectable({
  providedIn: 'root'
})

export class DeactivateGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    component: LoginComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Do you want to leave the page? The changes made will not be saved.');
  }
}
