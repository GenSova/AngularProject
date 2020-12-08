import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return confirm('Are you underage? Press "OK" if Yes.');
  }
}
