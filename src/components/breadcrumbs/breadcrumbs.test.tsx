

import { getByTestId, render  } from '@testing-library/react';
import { Breadcrumbs, DATA_TESTID } from './Breadcrumbs';
import { Category } from '../../interfaces/category.interface';
import { CATEGORIES_MOCK } from '../../mocks/categories.mock';

const categories: Category[] = CATEGORIES_MOCK;


test('Breadcrumb should be rendered succesfully', () => { 
  const { container } = render(<Breadcrumbs categories={categories} />);
  const bcNav = getByTestId(container, DATA_TESTID);
  expect(bcNav).toBeTruthy();
});

test('Breadcrumb should be rendered succesfully', () => { 
  const { container } = render(<Breadcrumbs categories={categories} />);
  const bcNav = getByTestId(container, DATA_TESTID);
  const listItems  = bcNav.querySelectorAll('li');
  expect(listItems).toHaveLength(4);
});

