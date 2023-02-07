import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  imgSrc: string = '../../assets/shoping Card.png';

  valueOfCounter: number = 0;
  constructor(private counter: CounterService) {}

  ngOnInit(): void {
    this.counter.currentValue.subscribe((val) => (this.valueOfCounter = val));
  }
}
