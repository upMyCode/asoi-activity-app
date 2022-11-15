import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { PATHS } from './path/paths';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="w-full bg-gray-200">
      <Router>
        <Routes>
          <Route
              path={PATHS.HOMEPAGE}
              element={<HomePage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
