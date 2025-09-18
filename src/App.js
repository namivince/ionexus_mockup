import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import LandingPage from './pages/LandingPage';
import RentPage from './pages/RentPage';
import CommercialPage from './pages/CommercialPage';
import NewProjectsPage from './pages/NewProjectsPage';
import FindAgentPage from './pages/FindAgentPage';
import PropertyDetailPage from './pages/PropertyDetailPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/new-projects" element={<NewProjectsPage />} />
          <Route path="/find-agent" element={<FindAgentPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
