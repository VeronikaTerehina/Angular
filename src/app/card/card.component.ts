import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent { 
  name="Some Card Name";
  number="0000 0000 0000 0000";
  amount="4989,33₽";
  expirationDate="02/33";
  paymentSystem="visa";

  constructor() { }

  ngOnInit(): void {
  }

}