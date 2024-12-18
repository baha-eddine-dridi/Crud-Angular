import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }


  postProduct(product: Product) {
    return this.http.post('http://localhost:3000/products', product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  updateProduct(product: Product) {
    return this.http.put(`http://localhost:3000/products/${product.id}`, product);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }
  

}
