import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { PATHS } from './path/paths';
import HomePage from './pages/HomePage';
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <div className="w-full bg-gray-200">
      <Router>
        <Routes>
          <Route
              path={PATHS.HOMEPAGE}
              element={<HomePage />}
          />
          <Route
              path={PATHS.REGISTRATIONPAGE}
              element={<RegistrationPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
