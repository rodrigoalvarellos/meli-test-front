import { render, screen } from '@testing-library/react';
import { SearchResult } from '../interfaces/searchResult.interface';
import { getProductoDetail, searchItems } from './items.service';

const searchMockedResult = {
  author: {
    name: 'Rodrigo',
    lastname: 'Alvarellos',
  },
  categories: [
    {
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
    },
  ],
  items: [
    {
      id: '1',
      title: 'Bicicleta roja',
      price: {
        currency: '$',
        amount: '12000',
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_908600-MLA32582065628_102019-I.jpg',
      condition: 'Nuevo',
      free_shipping: true,
      address: {
        state: 'Córdoba',
      },
    },
    {
      id: '2',
      title: 'Bicicleta verde',
      price: {
        currency: '$',
        amount: '12000',
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_908600-MLA32582065628_102019-I.jpg',
      condition: 'Nuevo',
      free_shipping: false,
      address: {
        state: 'Capital Federal',
      },
    },
    {
      id: '3',
      title: 'Bicicleta azul',
      price: {
        currency: '$',
        amount: '12000',
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_908600-MLA32582065628_102019-I.jpg',
      condition: 'Nuevo',
      free_shipping: true,
      address: {
        state: 'Mendoza',
      },
    },
    {
      id: '4',
      title: 'Bicicleta amarilla',
      price: {
        currency: '$',
        amount: '12000',
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_908600-MLA32582065628_102019-I.jpg',
      condition: 'Nuevo',
      free_shipping: false,
      address: {
        state: 'Santa Fe',
      },
    },
  ],
};

const productDetailResultMock = {
  author: {
    name: 'Rodrigo',
    lastname: 'Alvarellos',
  },
  categories: [
    {
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
    },
  ],
  item: {
    id: '1',
    title: 'Bicicleta fija para ver series mientras pedaleas',
    price: {
      currency: '$',
      amount: '12000',
      decimals: '00',
    },
    picture: 'https://http2.mlstatic.com/D_908600-MLA32582065628_102019-O.jpg',
    condition: 'Nuevo',
    free_shipping: true,
    sold_quantity: 34,
    description:
      'dadasda da asd adadadasdasda sadasdadasdasd asdasdadadasdad asdadadad asdasdad sdasdasad asdadasdasda addadadasd asdasdasda dasdasdasd asdaadasW',
  },
};

function setupFetchStub(data :any) {
  return function fetchStub(_url: any) {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve(
            data,
          ),
      })
    })
  }
}

describe('ItemService test suit', () => {

  test('searchItems shoud have results', async () => {

    global.fetch = jest.fn().mockImplementation(setupFetchStub(searchMockedResult));
  
    const res = await searchItems({search: ''});
    expect(res.author).not.toBeNull();
    expect(res.author.name).toBe('Rodrigo');
   
  });

  test('getProductoDetail shoud have results', async () => {

    global.fetch = jest.fn().mockImplementation(setupFetchStub(productDetailResultMock));
  
    const res = await getProductoDetail('1');
    expect(res.author).not.toBeNull();
    expect(res.author.name).toBe('Rodrigo');
   
  });

});



