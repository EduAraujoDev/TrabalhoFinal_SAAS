import { CurriculoAppPage } from './app.po';

describe('curriculo-app App', function() {
  let page: CurriculoAppPage;

  beforeEach(() => {
    page = new CurriculoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
