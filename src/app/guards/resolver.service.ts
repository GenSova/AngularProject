import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ShowArrayService} from '../show-array.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable()
export class ResolverService implements Resolve<any> {
  constructor(private resolverService: ShowArrayService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.resolverService.getNewsArray();
  }
}
