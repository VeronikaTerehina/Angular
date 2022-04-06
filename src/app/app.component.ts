import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public attrbutes = { id: 'One' };

  public onClick() {
    this.attrbutes = { id: 'Quote' };
  }
}
