import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../component/product-view/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  getproduct(){
    return this._http.get<product[]>("https://dummyjson.com/products")
  }
}
