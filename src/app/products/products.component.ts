import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { ForpassingService } from '../forpassing.service';


@Component({
     selector: 'shoppingcart-products',
     templateUrl: './products.component.html',
     styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
     productsdetails;
     pid;
     pname;
     pdesc;
     pimage;
         @Output() notifyHeader: EventEmitter<any> = new EventEmitter();

    public cartno : number = 0;
     constructor(private proddetails: ProductListService, private passing: ForpassingService) {


          //  this.proddetails.productDetails();
     }

     ngOnInit() {



          //localStorage.setItem("products", JSON.stringify(this.proddetails.allproducts));
          this.productsdetails = JSON.parse(localStorage.getItem('products'));

          for (var i = 0; i < this.productsdetails.length; i++) {
               this.pid = this.productsdetails[i].productid;
               this.pname = this.productsdetails[i].productname;
               this.pdesc = this.productsdetails[i].productdesc;
               this.pimage = this.productsdetails[i].image;

               console.log(this.pid);

          }

     }

     addtocart() {
          this.cartno =this.cartno+1; 
          console.log(this.cartno);
          //this.notifyHeader.emit(this.cartno);

          // this.ppps.pass(cartno);
          this.passing.getCartno(this.cartno);
          
     }



}
