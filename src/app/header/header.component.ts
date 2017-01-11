import { Component, OnInit, EventEmitter,Input,Output,NgModule } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ForpassingService } from '../forpassing.service';



@Component({
  selector: 'shoppingcart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  temp: number = 0;
 
  constructor(private pass: ForpassingService) { 
    this.temp=this.pass.setCartno();
    console.log("temp value: " +this.temp);

  }
  
  ngOnInit() {
   
  }

}
