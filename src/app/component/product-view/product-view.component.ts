import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from './productmodel';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  data:any| product[]
  constructor(private _api:ApiService) { }

  ngOnInit(): void {
    this.displayproducts();
  }
  displayproducts(){
    this._api.getproduct().subscribe(res=>{
      this.data = res;
      console.log(res)
    })
  }

}
