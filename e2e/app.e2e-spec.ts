import { AngularCliQuickPage } from './app.po';

describe('angular-cli-quick App', () => {
  let page: AngularCliQuickPage;

  beforeEach(() => {
    page = new AngularCliQuickPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
