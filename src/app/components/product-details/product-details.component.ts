import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProductService } from '../../services/all-product.service';
import { Product } from '../../interfaces/product';
import { ContainerOFAddToCardService } from 'src/app/services/container-ofadd-to-card.service';
import { CounterService } from '../../services/counter.service';
import { WishlistInterface } from './../../interfaces/wishlist-interface';
import { Store } from '@ngrx/store';
import { addingProductToWishingList } from 'store/wishList/whishlist.action';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  choosenProducts: Product[] = [];
  product: Product = {
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
  valueOfCOunter: number = 0;
  constructor(
    private route: ActivatedRoute,
    private productDetails: AllProductService,
    private counter: CounterService,
    private ContainerOFAllProduct: ContainerOFAddToCardService,
    private store: Store<{ add: WishlistInterface }>
  ) {}
  detailsOfProduct: any = {};
  isClicked: boolean = false;
  wishListContainer: Product[] = [];
  ngOnInit(): void {
    const params = this.route.snapshot.params;
    const productid = parseInt(params['id']);
    this.getProductDetails(productid);

    this.store
      .select('add')
      .subscribe(
        (result: WishlistInterface) =>
          (this.wishListContainer = [...result.items])
      );
  }
  getProductDetails(ProductID: number) {
    this.productDetails
      .getProductDetails(ProductID)
      .subscribe((details) => (this.detailsOfProduct = details));
  }
  addToCart() {
    this.counter.currentValue.subscribe((val) => (this.valueOfCOunter = val));
    if (!this.isClicked) {
      this.detailsOfProduct.count == 0
        ? (this.detailsOfProduct.quantinty = 0)
        : (this.detailsOfProduct.quantinty = 1);
      this.ContainerOFAllProduct.cartItem.push(this.detailsOfProduct);
      this.counter.increaseCounter();
      this.isClicked = true;
    } else {
      console.log(this.detailsOfProduct.id);
      this.ContainerOFAllProduct.changeQuanity(this.detailsOfProduct.id);
      this.counter.increaseCounter();
    }
  }
  addtoWishList() {
    let details = this.wishListContainer.filter((item) => {
      console.log(item);
      return item.id === this.detailsOfProduct.id;
     
    });
    console.log(this.detailsOfProduct);
    details.length===0?this.wishListContainer.push(this.detailsOfProduct):0
    this.store.dispatch(
      addingProductToWishingList({ item: this.wishListContainer })
    );
  }
}
