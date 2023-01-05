import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { NotFoundPage } from './pages/Notfoundpage';
import DetailedCardPage from 'pages/DetailedCardPage';
import { store } from './utils/reducer/reduxToolKit';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <NavLink end to="/fraterpavlo-REACT2022Q3/react-redux/" data-testid="home-link">
            Home
          </NavLink>
          <NavLink to="/about" data-testid="about-link">
            About
          </NavLink>
        </header>
        <Routes>
          <Route path="/fraterpavlo-REACT2022Q3/react-redux/" element={<HomePage />} />
          <Route path="/fraterpavlo-REACT2022Q3/react-redux/:id" element={<DetailedCardPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
