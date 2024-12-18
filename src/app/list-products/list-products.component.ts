import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts!: Product[];
  product!: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product = new Product();

    this.productService.getProduct().subscribe((data: Product[]) => {
      this.listProducts = data;
    });
  }

  incrementLike(p: Product) {
    let i = this.listProducts?.indexOf(p);
    this.listProducts![i!].like++;
  }

  save() {
    this.productService.postProduct(this.product).subscribe(() => {
      this.listProducts = [...this.listProducts, this.product];
      this.product = new Product(); // Reset the form
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.listProducts = this.listProducts.filter(p => p.id !== id);
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(() => {
      const index = this.listProducts.findIndex(p => p.id === this.product.id);
      if (index !== -1) {
        this.listProducts[index] = this.product;
      }
      this.product = new Product(); // Reset the form
    });
  }

  editProduct(p: Product) {
    this.product = { ...p }; // Copy the product to the form
  }
}