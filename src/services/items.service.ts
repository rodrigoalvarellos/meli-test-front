import config from "../config/http.config.json";

const BASE_URL = `${config.http}://${config.host}:${config.port}/${config.api}`;

export interface SearchQueriesParameters {
  search?: string;
  category?: string;
}

/**
 * Get a list of products by queryString or categoryId
 * @param {object} params { search, categoryId } query params availables
 * @returns {promise}Promise<SearchResult>
 */
export const searchItems = ({
  search,
  category,
}: SearchQueriesParameters): Promise<Response> => {
  let query: string = "";

  if (search) {
    query = `?q=${search}`;
  } else if (category) {
    query = `?category=${category}`;
  }
  return fetch(`${BASE_URL}/items${query}`);
};

/**
 * Get a specific product by its id
 * @param {object} params { productId } productId
 * @returns {Promise} Promise<ProductDetailItem>
 */
export const getProductoDetail = (id: string): Promise<Response> => {
  return fetch(`${BASE_URL}/items/${id}`);
};
