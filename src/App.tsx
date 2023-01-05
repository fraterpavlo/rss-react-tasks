import React, { useReducer } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import { HomePage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { NotFoundPage } from './pages/Notfoundpage';
import reducer from 'utils/reducer/reducer';
import Context from 'utils/contexts/homePageContext';
import DetailedCardPage from 'pages/DetailedCardPage';

function App() {
  const defaultСardsListStateData = {
    info: {
      count: 0,
      pages: 1,
      next: null,
      prev: null,
    },
    results: [],
  };

  const [state, dispatch] = useReducer(reducer, {
    cardsListState: {
      isLoaded: false,
      data: defaultСardsListStateData,
      error: null,
    },
    searchInputValue: '',
    sortBySelectValue: null,
    showCardCountSelectValue: null,
    createCardFormValues: null,
  });

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="App">
        <header className="App-header">
          <NavLink
            end
            to="/fraterpavlo-REACT2022Q3/react-custom-app-state/"
            data-testid="home-link"
          >
            Home
          </NavLink>
          <NavLink to="/about" data-testid="about-link">
            About
          </NavLink>
        </header>
        <Routes>
          <Route path="/fraterpavlo-REACT2022Q3/react-custom-app-state/" element={<HomePage />} />
          <Route
            path="/fraterpavlo-REACT2022Q3/react-custom-app-state/:id"
            element={<DetailedCardPage />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
