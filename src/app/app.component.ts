import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent {
  name="some card name";
  number="0000000000000000";
  amount="4989,33₽";
  expirationDate="02/33";
  paymentSystem="visa";
}