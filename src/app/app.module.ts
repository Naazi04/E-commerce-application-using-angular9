import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HeaderComponent } from './component/header/header.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { ProductPopupComponent } from './component/product-popup/product-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { CartDialogComponent } from './component/cart-dialog/cart-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { LazyLoadDirective } from './lazy-load.directive';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductDetailComponent,
    HeaderComponent,
    CartPageComponent,
    OrderPageComponent,
    ProductPopupComponent,
    CartDialogComponent,
    ConfirmDialogComponent,
    LazyLoadDirective,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
