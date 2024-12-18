import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProducts: Product[] = [];
  alertStock!: number;

  constructor(private serviceCal : CalculService) { }

  ngOnInit(): void {
    

    this.listProducts = [
      {
        id: 1,
        title: 'T-shirt 1',
        price: 399.99,
        quantity: 1,
        like: 0
      },
      {
        id: 2,
        title: 'T-shirt 2',
        price: 169.99,
        quantity: 1,
        like: 0
      },
      {
        id: 3,
        title: 'T-shirt 3',
        price: 149.99,
        quantity: 0,
        like: 0
      }
    ];
  

  }


  getAlertStock(){
    this.alertStock = this.serviceCal.getNumberOf(this.listProducts, 'quantity', 0) ;
  }
 

}
