
import { getByTestId, render  } from '@testing-library/react';
import App from './App';
import { DATA_TESTID } from './App';

describe('App component test suit', () => {

  test('App render correctly', () => {   
    const { container } = render(<App />);
    const appDiv = getByTestId(container, DATA_TESTID);
    expect(appDiv).toHaveClass('App');
  });
  

})



