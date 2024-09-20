import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodel';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productdata : any | product[];
  showadd: boolean = true;
  showremove: boolean = false;

  constructor(private _api:ApiService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    let productid = this._route.snapshot.paramMap.get('productid');
    //console.log("product id is ",productid)
    productid && this._api.getproductbyid(productid).subscribe(res=>{
      this.productdata = res;
      console.log(res)
    })
  }
  addtocart(productdata:product){
    this.showadd = false;
    this.showremove = true;
    this._api.addtocart(productdata)
  }
  removeitem(productdata:product){
    this.showadd = true;
    this.showremove = false;
    this._api.removecartitem(productdata)
  }

}
