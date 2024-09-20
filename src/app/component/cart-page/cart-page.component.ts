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
    this._api.products().subscribe(res=>{
      this.showproduct = res;
      this.totalamount = this._api.calculateprice();
      console.log("total",this.totalamount)
    })
    //form
    this.myform = new FormGroup({
      email: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      mobile: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required)
    })
  }
  deleteitem(item:product){
    this._api.removecartitem(item)
  }

  empty(){
    this._api.removeallitems();
  }
  
  onsubmit() {
      this.myform.value;
    }
  
  cancel(){
    this.addressform = false;
    this.myform.reset();
  }
}