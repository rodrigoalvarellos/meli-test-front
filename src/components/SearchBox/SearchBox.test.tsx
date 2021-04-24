import { getByLabelText, getByTestId, render } from '@testing-library/react';

import { SearchBox, DATA_TESTID } from './SearchBox';

import texts from '../../config/text.config.json';

describe('SearchBox test suit', () => {
  test('Should have an image with ML logo', () => {
    const { container } = render(<SearchBox />);
    const header = getByTestId(container, DATA_TESTID);
    const img = header.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.alt).toBe(texts.search_box.meli_logo_alt);
  });

  test(`shoud exist an input text with aria label: "${texts.search_box.input_aria_label}"`, () => {
    const { container } = render(<SearchBox />);
    const searchInput = getByLabelText(
      container,
      texts.search_box.input_aria_label,
      { selector: 'input' }
    );
    expect(searchInput).toBeTruthy();
    expect(searchInput).toHaveAttribute(
      'placeholder',
      texts.search_box.input_placeholder
    );
  });

  test(`shoud exist a button with aria label: ${texts.search_box.search_btn}`, () => {
    const { container } = render(<SearchBox />);
    const searchButton = getByLabelText(
      container,
      texts.search_box.search_btn,
      { selector: 'button' }
    );
    // const searchButton = container.querySelector('button[type="submit"]');
    expect(searchButton).toBeTruthy();
    expect(searchButton).toHaveAttribute('type', 'submit');
  });

  test('should exist a form element', () => {
    const { container } = render(<SearchBox />);
    const form = container.querySelector('form');
    expect(form).toBeTruthy();

    // const onSearch = jest.fn();
    // if(form) {
    //     fireEvent.submit(form);
    //     expect(onSearch).toHaveBeenCalled();
    // } else {
    //     fail();
    // }
  });
});
