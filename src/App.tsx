import "./App.scss";
import { Breadcrumbs } from "./components/breadcrumbs/breadcrumbs";
import { ListItems } from "./components/list-items/list-items";
import { SearchBox } from "./components/search-box/search-box";

function App() {
  return (
    <div className="App">
      <SearchBox />

      <Breadcrumbs />
      <ListItems />
    </div>
  );
}

export default App;
