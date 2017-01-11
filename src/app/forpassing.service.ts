import { Injectable } from '@angular/core';

@Injectable()
export class ForpassingService {
public static temp;
  constructor() { }

  getCartno(cartno) {
    ForpassingService.temp = cartno;
  }
  setCartno() {
    return ForpassingService.temp;
  }

}
