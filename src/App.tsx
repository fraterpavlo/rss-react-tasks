import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import { HomePage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { NotFoundPage } from './pages/Notfoundpage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink end to="/fraterpavlo-REACT2022Q3/react-hooks/" data-testid="home-link">
          Home
        </NavLink>
        <NavLink to="/about" data-testid="about-link">
          About
        </NavLink>
      </header>
      <Routes>
        <Route path="/fraterpavlo-REACT2022Q3/react-hooks/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
