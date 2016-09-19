import { AdaeptPage } from './app.po';

describe('adaept App', function() {
  let page: AdaeptPage;

  beforeEach(() => {
    page = new AdaeptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
