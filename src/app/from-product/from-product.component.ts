import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-from-product',
  templateUrl: './from-product.component.html',
  styleUrls: ['./from-product.component.css']
})
export class FromProductComponent implements OnInit {

  product!: Product;
  list!: Product[];
  constructor() {
   
   }

  ngOnInit(): void {
    this.product = new Product();
    this.list = [];
  }


  save(){
    this.product.like = 0;
    this.list.push(this.product);
console.log(this.list);
  }

}
