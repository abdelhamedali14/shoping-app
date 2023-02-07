import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/app/services/all-product.service';
import { ContainerOFAddToCardService } from 'src/app/services/container-ofadd-to-card.service';
import { CounterService } from './../../services/counter.service';
import { Product } from './../../interfaces/product';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus,faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.css'],
})
export class AddToCardComponent implements OnInit {
  //variables
  valueOfCounter: number = 0;
  storageOfProducts: Product[] = [];
  showAllProducts: Product[] = [];
  displayAllProduct: Product[] = [];
  constructor(
    //import services
    private counter: CounterService,
    private container: ContainerOFAddToCardService
  ) {}
  //icons from fontAwsome
  faTrashCan = faTrashCan;
  faCirclePlus=faCirclePlus;
  faCircleMinus=faCircleMinus
  
  total: any = 0;

  ngOnInit(): void {
    //call services to display add to cart counter
    this.counter.currentValue.subscribe((val) => (this.valueOfCounter = val));
    //call services to change value of  add to cart counter
    this.displayAllProduct = this.container.cartItem;
    console.log(this.displayAllProduct);
    this.getTotalPricesOfAll();
  }

  increaseCounter(index: number) {
    this.container.cartItem[index].quantinty++;
    this.counter.increaseCounter();
    this.getTotalPricesOfAll();
  }
  decreaseCounter(index: number) {
    this.container.cartItem[index].quantinty--;
    this.counter.dicreaseCounter();
    this.getTotalPricesOfAll();
  }
  getTotalPricesOfAll() {
    this.total = 0;
    for (let i = 0; i < this.container.cartItem.length; i++) {
      this.total +=
        +this.container.cartItem[i].price *
        this.container.cartItem[i].quantinty;
    }
  }
  deleteProduct(index: number) {
    let deltedQuantity = this.container.cartItem[index].quantinty;
    for (let i = 0; i < deltedQuantity; i++) {
      this.counter.dicreaseCounter();
    }
    this.container.cartItem.splice(index, 1);
    this.getTotalPricesOfAll();
  }
}
