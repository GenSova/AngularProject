import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './main/catalog/catalog.component';
import {ContactsComponent} from './main/contacts/contacts.component';
import {NewsComponent} from './main/news/news.component';
import {LoginComponent} from './main/login/login.component';
import {ProductComponent} from './main/catalog/product/product.component';

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
    component: NewsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
