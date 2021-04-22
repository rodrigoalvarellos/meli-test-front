import { render, screen } from "@testing-library/react";
import { SearchResult } from "../interfaces/searchResult.interface";
import { PRODUCT_DETAIL_MOCK } from "../mocks/productDetail.mock";
import { SEARCH_RESULTS_MOCK } from "../mocks/searchResults.mock";
import { getProductoDetail, searchItems } from "./items.service";

const searchMockedResult = SEARCH_RESULTS_MOCK;
const productDetailResultMock = PRODUCT_DETAIL_MOCK;

function setupFetchStub(data: any) {
  return function fetchStub(_url: any) {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve(data),
      });
    });
  };
}

describe("ItemService test suit", () => {
  test("searchItems shoud have results", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(setupFetchStub(searchMockedResult));

    const res = await searchItems({ search: "iPhone" });
    
    expect(res.items[0]).not.toBeNull();
    expect(res.items[0].author.name).toBe(
      SEARCH_RESULTS_MOCK.items[0].author.name
    );
  });

  test("getProductoDetail shoud have results", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(setupFetchStub(productDetailResultMock));

    const res = await getProductoDetail(PRODUCT_DETAIL_MOCK.item.id);
    expect(res.author).not.toBeNull();
    expect(res.author.name).toBe(PRODUCT_DETAIL_MOCK.author.name);
  });
});
