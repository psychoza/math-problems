import { MathProblemsPage } from './app.po';

describe('math-problems App', () => {
  let page: MathProblemsPage;

  beforeEach(() => {
    page = new MathProblemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
