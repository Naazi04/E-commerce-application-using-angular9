import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodel';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  showproduct:any=[];
  public totalamount : number = 0;
  public addressform = false;
  myform:FormGroup|any;

  public toggleAddressForm() {
    this.addressform = true;
  }
  

  constructor(private _api:ApiService) { }

  ngOnInit(): void {
    this.showproduct = this._api.getCartItems();
    this.calculateTotal();
    
    //form
    this.myform = new FormGroup({
      email: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      mobile: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required)
    });
  }
  deleteitem(item:product){
    this._api.removecartitem(item);
    this.showproduct = this.showproduct.filter(cartItem => cartItem.id !== item.id);
    this.calculateTotal();

  }

  empty(){
    this._api.removeallitems();
    this.showproduct = [];
    this.totalamount = 0;
  }

  increaseQuantity(item: product) {
    item.quantity = (item.quantity || 1) + 1; // Increment quantity
    this.calculateTotal();
  }

  decreaseQuantity(item: product) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotal();
    }
  }
  
  calculateTotal() {
    this.totalamount = this.showproduct.reduce((total, item) => {
      return total + (item.price * (item.quantity || 1)); // Calculate total based on quantity
    }, 0);
  }

  onsubmit() {
      this.myform.value;
    }
  
  cancel(){
    this.addressform = false;
    this.myform.reset();
  }

  
}