import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../interfaces/product';
@Injectable({
  providedIn: 'root',
})
export class ContainerOFAddToCardService {
  cartItem: any = [];
  private containerArray = new BehaviorSubject({});
  // currentArray = this.containerArray.asObservable();
  productsContainer = this.containerArray.asObservable();
  constructor() {}
  // updateContainer(updatedArray:any) {
  //   this.containerArray.next(updatedArray);
  // }

  updateContainer(updatedArray: any) {
    this.containerArray.next(updatedArray);
  }

  changeQuanity(id: string) {
    this.cartItem.forEach((product: Product) => {
      console.log(product.quantinty);
      if (product.id == id) {
        console.log(`productQuantitit before ${product.quantinty}`);
        product.quantinty++;
        console.log(`productQuantitit after ${product.quantinty}`);
        console.log(this.cartItem);
      }
    });
  }
}
