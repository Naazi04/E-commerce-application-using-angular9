import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css']
})
export class ProductPopupComponent implements OnInit {

  @Input() title: string = '';
  @Input() image: string = '';
  @Input() price: number = 0;
  @Input() category: string = '';
  @Input() description: string = '';
  @Input() discountPercentage: number = 0;
  @Input() stock: number = 0;
  visible: boolean = false;
  show(){
    this.visible = true;
  }
  close(){
    this.visible = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
