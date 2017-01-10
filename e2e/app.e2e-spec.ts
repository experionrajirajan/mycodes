import { PracticeShoppingcartPage } from './app.po';

describe('practice-shoppingcart App', function() {
  let page: PracticeShoppingcartPage;

  beforeEach(() => {
    page = new PracticeShoppingcartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
