import { Component, ViewChild } from '@angular/core';
import { ProductViewComponent } from './component/product-view/product-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce-app';
  @ViewChild('product-view') product : ProductViewComponent;
  selectedProduct: any;
}
