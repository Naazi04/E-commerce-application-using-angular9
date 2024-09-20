import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  constructor(private _api:ApiService,private _router:Router) { }
  public totalamount:number=0;
  ngOnInit(): void {
    setTimeout(()=>{
      this._router.navigate(["/"])
      this._api.removeallitems()
    },5000);

    //total amount from api
    this.totalamount = this._api.calculateprice();
  }

}
