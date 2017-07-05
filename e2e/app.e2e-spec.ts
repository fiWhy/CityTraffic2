import { CityTraffic2Page } from './app.po';

describe('city-traffic2 App', () => {
  let page: CityTraffic2Page;

  beforeEach(() => {
    page = new CityTraffic2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
