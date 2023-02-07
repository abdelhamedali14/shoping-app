import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WishlistInterface } from 'src/app/interfaces/wishlist-interface';
import { addingProductToWishingList } from 'store/wishList/whishlist.action';
import { Product } from './../../interfaces/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  constructor(private store: Store<{ add: WishlistInterface }>) {}
  counter: number = 0;
  wishListContainer: Product[] = [];

  ngOnInit(): void {
    this.store
      .select('add')
      .subscribe(
        (result: WishlistInterface) =>
          (this.wishListContainer = [...result.items])
      );
    // this.store.select("add").subscribe()
  }
  deletewhish(index: number) {
    this.wishListContainer.splice(index, 1);
    this.store.dispatch(
      addingProductToWishingList({ item: this.wishListContainer })
    );
  }
}
