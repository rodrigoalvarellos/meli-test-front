import React from 'react';
import { PRODUCT_DETAIL_MOCK } from '../../mocks/productDetail.mock';
import { ProductDetail } from './ProductDetail';

const config = {
  title: 'Product Detail',
  component: ProductDetail
};

export default config;

export const ProductDetailSB: React.FC = () => (
  <div
    style={{
      backgroundColor: '#eeeeee',
      padding: '50px',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <ProductDetail product={PRODUCT_DETAIL_MOCK} />
  </div>
);
