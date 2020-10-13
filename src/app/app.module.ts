import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { /*DirectiveListen,*/ NavbarComponent} from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { CardComponent } from './main/catalog/card/card.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { NewsComponent } from './main/news/news.component';
import { NewsCardComponent } from './main/news/news-card/news-card.component';
import { CustomReversePipe } from './custom-reverse.pipe';
import { LoginComponent } from './main/login/login.component';
import { ProductComponent } from './main/catalog/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    CatalogComponent,
    CardComponent,
    CategoriesComponent,
    FooterComponent,
    ContactsComponent,
    NewsComponent,
    NewsCardComponent,
    //DirectiveListen,
    CustomReversePipe,
    LoginComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
