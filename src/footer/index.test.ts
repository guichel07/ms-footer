// // @vitest-environment jsdom
import { describe, test, expect, beforeEach } from 'vitest';
import { Footer } from '.';
import { mockedMessage } from '../constant';

describe('Footer', () => {
  let footer: Footer;

  beforeEach(() => {
    document.body.innerHTML = '';

    footer = new Footer(document.body);
  });

  test('Should have exact infos', () => {
    footer.render(mockedMessage);

    expect(document.body.innerHTML).toContain(
      `<footer class="app-footer">
        ${mockedMessage}
      </footer>`
    );
  });
});
