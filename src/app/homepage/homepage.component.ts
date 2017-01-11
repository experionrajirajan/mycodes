import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shoppingcart-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   getcartValue(evt) {
console.log(evt)  ;
 }

}
