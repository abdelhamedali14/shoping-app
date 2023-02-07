import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Router, Routes } from '@angular/router';
import { CounterService } from '../../services/counter.service';
import { ContainerOFAddToCardService } from '../../services/container-ofadd-to-card.service';
import { Store } from '@ngrx/store';
import { WishlistInterface } from './../../interfaces/wishlist-interface';
import {
  addingProductToWishingList,
} from './../../../../store/wishList/whishlist.action';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    createdAt: '',
    name: '',
    image: '',
    rate: 0,
    count: 0,
    description: '',
    price: '',
    reviews: [],
    id: '',
  };
  constructor(
    private router: Router,
    private counter: CounterService,
    private containerOfAllProducts: ContainerOFAddToCardService,
    private store: Store<{ add: WishlistInterface }>
  ) {}
  isClicked: boolean = false;
  isfavourite:boolean=false;
  ngOnInit(): void {
    //whishingList 
    this.store
      .select('add')
      .subscribe(
        (result: WishlistInterface) =>
          (this.whishListContainer = [...result.items])
      );
  }
  //go to productDetails page 
  productDetailsPage() {
    this.router.navigate(['/product-details', this.product.id]);
  }
  whishListContainer: Product[] = [];
  //add to cart car
  addToCard(product: Product) {
    if (!this.isClicked) {
      product.count == 0 ? (product.quantinty = 0) : (product.quantinty = 1);
      this.containerOfAllProducts.cartItem.push(product);
      this.counter.increaseCounter();
      this.isClicked = true;
    } else {
      console.log(product.id);
      this.containerOfAllProducts.changeQuanity(product.id);
      this.counter.increaseCounter();
    }
  }
  
  addtoWishList(product: Product) {
    let details = this.whishListContainer.filter((item) => {
      console.log(item);
      return item.id === this.product.id;
    });
    details.length === 0 ? this.whishListContainer.push(this.product) : 0;
    this.isfavourite=true;
    this.store.dispatch(
      addingProductToWishingList({ item: this.whishListContainer })
    );
  }
}
