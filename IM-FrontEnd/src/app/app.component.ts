import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Inventory-Management-FrontEnd';
  constructor(private router: Router){

  }

  goToProducts() {
    this.router.navigate(['/products']);
  }
}
