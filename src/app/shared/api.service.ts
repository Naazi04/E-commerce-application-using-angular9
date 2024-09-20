import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../component/product-view/productmodel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartitemlist : any=[];
  public productlist = new BehaviorSubject<any>([])
  apiURL = "https://dummyjson.com/products/";
  constructor(private _http:HttpClient) { }

  getproduct(){
    return this._http.get<product[]>("https://dummyjson.com/products/")
  }

  getproductbyid(id:string){
    return this._http.get(this.apiURL+id);
  }

  addtocart(data:product){
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist);
    console.log(this.cartitemlist)
  }

  products(){
    return this.productlist.asObservable();
  }

  removecartitem(data:product){
    this.cartitemlist.map((a:product, index:product)=>{
      if(data.id === a.id){
        this.cartitemlist.splice(index,1)
      }
    })
    this.productlist.next(this.cartitemlist)
  }

  //total calculation
  calculateprice(){
    let total = 0;
    this.cartitemlist.map((a:any)=>{
      total +=a.price;
    })
    return total;
  }

  //remove all items
  removeallitems(){
    this.cartitemlist = [];
    this.productlist.next(this.cartitemlist)
  }
}
