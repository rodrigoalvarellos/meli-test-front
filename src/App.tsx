import "./App.scss";
import { SearchBox } from "./components/search-box/search-box";

import { Router } from "@reach/router";
import { HomePage } from "./pages/home-page/home-page";
import { ResultsPage } from './pages/results-page/results-page';
import { ProductPage } from './pages/product-page/product-page';

export const DATA_TESTID = 'APP_TESTID';

function App() {
  return (
    <div className="App" data-testid={DATA_TESTID}>

      <SearchBox/>

      <Router className="App__router">
        <HomePage path="/"/>
        <ResultsPage path="/items"/>
        <ProductPage  path="/items/:itemId" />
      </Router>

    </div>
  );
}

export default App;
