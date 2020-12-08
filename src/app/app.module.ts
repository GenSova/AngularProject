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

import { ShowArrayService } from './show-array.service';
import { ProductViewComponent } from './main/product-view/product-view.component';
import {DeactivateGuard} from './guards/deactivate.guard';
import {ActivateGuard} from './guards/activate.guard';
import {ResolverService} from './guards/resolver.service';
import {Game} from './models/game.model';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import { CategoriesListComponent } from './main/categories/categories-list/categories-list.component';
import { PlatformerComponent } from './main/categories/platformer/platformer.component';
import { ShooterComponent } from './main/categories/shooter/shooter.component';

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
    ProductViewComponent,
    CategoriesListComponent,
    PlatformerComponent,
    ShooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [ShowArrayService, DeactivateGuard, ActivateGuard, ResolverService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
