import { Component } from '@angular/core';
import { ProductService } from './shared/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sse';

  constructor( private productlist: ProductService){}

  ngOnInit(){
    this.productlist.getProducts();
  }

}
