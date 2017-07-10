import { AngularFormPage } from './app.po';

describe('angular-form App', () => {
  let page: AngularFormPage;

  beforeEach(() => {
    page = new AngularFormPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
