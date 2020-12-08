import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './main/catalog/catalog.component';
import {ContactsComponent} from './main/contacts/contacts.component';
import {NewsComponent} from './main/news/news.component';
import {LoginComponent} from './main/login/login.component';
import {ProductComponent} from './main/catalog/product/product.component';
import {ProductViewComponent} from './main/product-view/product-view.component';
import {ActivateGuard} from './guards/activate.guard';
import {DeactivateGuard} from './guards/deactivate.guard';
import {Activate2Guard} from './guards/activate2.guard';
import {NewsCardComponent} from './main/news/news-card/news-card.component';
import {ResolverService} from './guards/resolver.service';
import {PlatformerComponent} from './main/categories/platformer/platformer.component';
import {ShooterComponent} from './main/categories/shooter/shooter.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'news',
    component: NewsComponent,
    canActivate: [Activate2Guard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [DeactivateGuard]
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    canActivate: [ActivateGuard]
  },
  {
    path: 'news-card',
    component: NewsCardComponent,
    resolve: { data: ResolverService }
  },
  {
    path: 'Platformer',
    component: PlatformerComponent,
  },
  {
    path: 'Shooter',
    component: ShooterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DeactivateGuard, ResolverService]
})
export class AppRoutingModule { }
