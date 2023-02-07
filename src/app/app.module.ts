import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddToCardComponent } from './components/add-to-card/add-to-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthentcationModule } from './modules/authentcation/authentcation.module';
import { LoaderComponent } from './components/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from './modules/shared/shared.module';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { StoreModule } from '@ngrx/store';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { whislistReducer } from 'store/wishList/wishlist.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    AddToCardComponent,
    LoaderComponent,
    WishlistComponent,
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    AuthentcationModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    SharedModule,
    StoreModule.forRoot({ add: whislistReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
