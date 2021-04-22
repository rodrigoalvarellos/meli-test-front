import "./App.scss";
import { SearchBox } from "./components/SearchBox/SearchBox";

import { Router } from "@reach/router";
import { HomePage } from "./pages/HomePage/HomePage";
import { ResultsPage } from './pages/ResultsPage/ResultsPage';
import { ProductPage } from './pages/ProductPage/ProductPage';

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
