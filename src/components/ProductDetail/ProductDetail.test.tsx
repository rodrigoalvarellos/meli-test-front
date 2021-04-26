import { getByTestId, getByText, render } from '@testing-library/react';
import { PRODUCT_DETAIL_MOCK } from '../../mocks/productDetail.mock';
import { DATA_TESTID, ProductDetail } from './ProductDetail';

describe('Product Details test suit', () => {
  test('should be rendered succesfully', () => {
    const { container } = render(
      <ProductDetail product={PRODUCT_DETAIL_MOCK} />
    );
    const pd = getByTestId(container, DATA_TESTID);
    expect(pd).toBeTruthy();
  });
  test('should have a title ', () => {
    const { container } = render(
      <ProductDetail product={PRODUCT_DETAIL_MOCK} />
    );

    const title = getByText(container, PRODUCT_DETAIL_MOCK.item.title);
    expect(title).toHaveTextContent(PRODUCT_DETAIL_MOCK.item.title);
  });
});
