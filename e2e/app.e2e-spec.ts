import { MyWebsitePage } from './app.po';

describe('my-website App', function() {
  let page: MyWebsitePage;

  beforeEach(() => {
    page = new MyWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
