import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../component/product-view/productmodel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartitemlist: product[] = [];
  public productlist = new BehaviorSubject<product[]>([]);
  apiURL = "https://dummyjson.com/products/";

  constructor(private _http: HttpClient) {
    this.loadCartItems(); // Load items from local storage when the service is initialized
  }

  getproduct() {
    return this._http.get<product[]>(this.apiURL);
  }

  getproductbyid(id: string) {
    return this._http.get<product>(this.apiURL + id);
  }

  addtocart(data: product) {
    const index = this.cartitemlist.findIndex(item => item.id === data.id);
    if (index === -1) { // Item does not exist
      // Initialize quantity when adding a new item
      data.quantity = 1; 
      this.cartitemlist.push(data);
      this.productlist.next(this.cartitemlist);
      this.saveCartItems();
    } else {
      // If the item is already in the cart, increment its quantity
      this.cartitemlist[index].quantity++; // Increment quantity for existing item
      this.productlist.next(this.cartitemlist);
      this.saveCartItems();
    }
  }
  
  

  products() {
    return this.productlist.asObservable();
  }

  removecartitem(data: product) {
    this.cartitemlist = this.cartitemlist.filter(item => item.id !== data.id);
    this.productlist.next(this.cartitemlist);
    this.saveCartItems(); // Save to local storage
  }

  getCartItems() {
    return this.cartitemlist.map(item=> ({
      ...item,
      quantity: item.quantity || 1
    })); // Returns the current items in the cart
  }

  calculateprice() {
    return this.cartitemlist.reduce((total, item) => total + item.price, 0);
  }

  removeallitems() {
    this.cartitemlist = [];
    this.productlist.next(this.cartitemlist);
    this.saveCartItems(); // Save to local storage
  }

  private saveCartItems() {
    localStorage.setItem('cart', JSON.stringify(this.cartitemlist));
  }

  private loadCartItems() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartitemlist = JSON.parse(savedCart);
      this.productlist.next(this.cartitemlist);
    }
  }
}
