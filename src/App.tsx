import "./App.scss";
import { Breadcrumbs } from "./components/breadcrumbs/breadcrumbs";
// import { ListItems } from "./components/list-items/list-items";
import { SearchBox } from "./components/search-box/search-box";
import { ProductDetail } from "./components/product-detail/product-detail";

function App() {
  return (
    <div className="App">
      <SearchBox />

      <Breadcrumbs />
      {/* <ListItems /> */}
      <ProductDetail />
    </div>
  );
}

export default App;
