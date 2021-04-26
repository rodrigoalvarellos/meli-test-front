import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { CATEGORIES_MOCK } from '../../mocks/categories.mock';

const config = {
  title: 'Breadcrumbs',
  component: Breadcrumbs
};

export default config;

export const BreadcrumbsSB: React.FC = () => (
  <Breadcrumbs categories={CATEGORIES_MOCK} />
);
