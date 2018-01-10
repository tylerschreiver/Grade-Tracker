import { GradeTrackerPage } from './app.po';

describe('grade-tracker App', function() {
  let page: GradeTrackerPage;

  beforeEach(() => {
    page = new GradeTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
