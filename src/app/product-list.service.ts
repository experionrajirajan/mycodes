import { Injectable } from '@angular/core';

@Injectable()
export class ProductListService {

  constructor() { }
  allproducts = [
    {
      "productid": "p1",
      "productname": "sunglass",
      "productdesc": "desc1",
      "image": "../../assets/images/glass.jpg"
    },

    {
      "productid": "p2",
      "productname": "perfume",
      "productdesc": "desc2",
      "image": "../../assets/images/perfume.jpg"
    },

    {
      "productid": "p3",
      "productname": "shoe",
      "productdesc": "desc3",
      "image": "../../assets/images/shoe.jpg"
    },

    {
      "productid": "p4",
      "productname": "watch",
      "productdesc": "desc4",
      "image": "../../assets/images/watch.jpg"
    },
    ];

    getdata()
    {
    return JSON.stringify(this.allproducts);

    
    }
  


}
