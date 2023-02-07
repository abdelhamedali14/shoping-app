import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { AllProductService } from '../../services/all-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Array<Product> = [];

  constructor(private allProductList: AllProductService) {}

  ngOnInit(): void {
    this.allProductList
      .getAllProducts()
      .subscribe((prod: any) => (this.productList = prod));
  }
}
