import { FC, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Router } from '@reach/router';

import { SearchBox } from './components/SearchBox/SearchBox';
import { HomePage } from './pages/HomePage/HomePage';
import { ResultsPage } from './pages/ResultsPage/ResultsPage';
import { ProductPage } from './pages/ProductPage/ProductPage';

import './App.scss';
import texts from './config/text.config.json';

export const DATA_TESTID = 'APP_TESTID';

export const App: FC = () => {
  const metaTexts = texts.header_meta_tags;

  const [metaTags, setMetaTags] = useState({
    title: `${metaTexts.title} - ${metaTexts.slogan}`,
    description: metaTexts.description,
    keywords: metaTexts.keys.join(',')
  });

  return (
    <div className="App" data-testid={DATA_TESTID}>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta property="og:description" content={metaTags.description} />
        <meta property="og:title" content={metaTags.title} />
      </Helmet>

      <SearchBox />

      <Router className="App__router">
        <HomePage path="/" setMetaTags={setMetaTags} />
        <ResultsPage path="/items" setMetaTags={setMetaTags} />
        <ProductPage path="/items/:itemId" setMetaTags={setMetaTags} />
      </Router>
    </div>
  );
};
