import { PRODUCT_DETAIL_MOCK } from '../mocks/productDetail.mock';
import { SEARCH_RESULTS_MOCK } from '../mocks/searchResults.mock';
import { getProductoDetail, searchItems } from './items.service';
import { ProductDetailItem } from '../interfaces/product-detail.iterface';
import { SearchResult } from '../interfaces/searchResult.interface';

const searchMockedResult = SEARCH_RESULTS_MOCK;
const productDetailResultMock = PRODUCT_DETAIL_MOCK;
type MockType = ProductDetailItem | SearchResult;
function setupFetchStub(data: MockType) {
  return function fetchStub(_url: string) {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve(data)
      });
    });
  };
}

describe('ItemService test suit', () => {
  test('searchItems shoud have results', async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(setupFetchStub(searchMockedResult));

    const res = await searchItems({ search: 'iPhone' });
    const data = await res.json();

    expect(data.items[0]).not.toBeNull();
    expect(data.items[0].author.name).toBe(
      SEARCH_RESULTS_MOCK.items[0].author.name
    );
  });

  test('getProductoDetail shoud have results', async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(setupFetchStub(productDetailResultMock));

    const res = await getProductoDetail(PRODUCT_DETAIL_MOCK.item.id);
    const data = await res.json();
    expect(data.author).not.toBeNull();
    expect(data.author.name).toBe(PRODUCT_DETAIL_MOCK.author.name);
  });
});
