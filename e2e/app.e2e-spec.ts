import { AmitiePage } from './app.po';

describe('amitie App', () => {
  let page: AmitiePage;

  beforeEach(() => {
    page = new AmitiePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
