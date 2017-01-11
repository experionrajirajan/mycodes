import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'shoppingcart-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
	
	pushingArray = [];


	constructor() { }

	ngOnInit() {
	}
	addProduct(productid, productname, productdesc, image) {

		this.pushingArray = JSON.parse(localStorage.getItem('products'));
		this.pushingArray.push({ productid, productname, productdesc, image });

		localStorage.setItem('products', JSON.stringify(this.pushingArray));

		

	}




}
