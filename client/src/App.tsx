import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { PATHS } from './path/paths';
import HomePage from './pages/HomePage';
import RegistrationPage from "./pages/RegistrationPage";
import LogInPage from './pages/LogInPage';
import UserProfilePage from "./pages/UserProfilePage";
import CalendarOfEventsPage from "./pages/CalendarOfEventsPage";
import EventPage from "./pages/EventPage";

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
              path={PATHS.LOGINPAGE}
              element={<LogInPage />}
          />
          <Route
              path={PATHS.USERPROFILE}
              element={<UserProfilePage />}
          />
          <Route
              path={PATHS.REGISTRATIONPAGE}
              element={<RegistrationPage />}
          />
          <Route
              path={PATHS.CALENDAREVENTS}
              element={<CalendarOfEventsPage />}
          />
          <Route
              path={PATHS.EVENTPAGE}
              element={<EventPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
