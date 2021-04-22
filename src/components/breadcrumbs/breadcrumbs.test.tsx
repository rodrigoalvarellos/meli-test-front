

import { getByTestId, render  } from '@testing-library/react';
import { Breadcrumbs, DATA_TESTID } from './Breadcrumbs';
import { Category } from '../../interfaces/category.interface';

const categories: Category[] = [  {
    id: 'MLA1276',
    name: 'Deportes y Fitness',
  },
  {
    id: 'MLA1338',
    name: 'Fitness y Musculación',
  },
  {
    id: 'MLA438160',
    name: 'Máquinas Cardiovasculares',
  },
  {
    id: 'MLA3095',
    name: 'Bicicletas Fijas',
  },];


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

