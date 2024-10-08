import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from './productmodel';
import { ProductPopupComponent } from '../product-popup/product-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  data:any| product[];

  @ViewChild(ProductPopupComponent) popup!: ProductPopupComponent;

  cartItems: product[] = [];

  constructor(private _api:ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.displayproducts();
    this.cartItems = this._api.getCartItems();
    this.loadCartItems();
  }

  displayproducts(){
    this._api.getproduct().subscribe(res=>{
      this.data = res;
      console.log(res)
    });
  }
 
  addtocart(item: product){
    this._api.addtocart(item);
    console.log('adding to cart:',item);
    this.openDialog();
    this.cartItems.push(item);
  }


  openDialog(): void{
    console.log('opening dialog');
    this.dialog.open(CartDialogComponent);
  }

  removeitem(item:product){
    this._api.removecartitem(item);
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
  }

  isInCart(item: product): boolean{
    return this.cartItems.some(cartItem => cartItem.id === item.id);
  }

  loadCartItems(){
    this.cartItems = this._api.getCartItems();
  }
  showProductDetails(item: product){
    this.popup.title = item.title;
    this.popup.image = item.thumbnail;
    this.popup.price = item.price;
    this.popup.category = item.category;
    this.popup.description = item.description;
    this.popup.discountPercentage = item.discountPercentage;
    this.popup.stock = item.stock;
    this.popup.show();
  }
}
