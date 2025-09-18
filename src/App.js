import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import adminTheme from './theme/adminTheme';
import { useLocation } from 'react-router-dom';
import theme from './theme';
import LandingPage from './pages/LandingPage';
import RentPage from './pages/RentPage';
import CommercialPage from './pages/CommercialPage';
import NewProjectsPage from './pages/NewProjectsPage';
import FindAgentPage from './pages/FindAgentPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import LoginPage from './pages/LoginPage';
import DashboardWrapper from './components/DashboardWrapper';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
    },
  });

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<DashboardWrapper />} />
          <Route path="/admin/projects" element={<DashboardWrapper />} />
          <Route path="/admin/leads" element={<DashboardWrapper />} />
          <Route path="/admin/listings" element={<DashboardWrapper />} />
          <Route path="/admin/bookings" element={<DashboardWrapper />} />
          <Route path="/admin/chat" element={<DashboardWrapper />} />
          <Route path="/admin/payments" element={<DashboardWrapper />} />
          <Route path="/admin/reports" element={<DashboardWrapper />} />
          <Route path="/admin/users" element={<DashboardWrapper />} />
          <Route path="/admin/tracking" element={<DashboardWrapper />} />
          <Route path="/admin/documents" element={<DashboardWrapper />} />
          <Route path="/developer" element={<DashboardWrapper />} />
          <Route path="/developer/projects" element={<DashboardWrapper />} />
          <Route path="/developer/documents" element={<DashboardWrapper />} />
          <Route path="/sale" element={<DashboardWrapper />} />
          <Route path="/sale/projects" element={<DashboardWrapper />} />
          <Route path="/sale/leads" element={<DashboardWrapper />} />
          <Route path="/sale/listings" element={<DashboardWrapper />} />
          <Route path="/sale/bookings" element={<DashboardWrapper />} />
          <Route path="/sale/chat" element={<DashboardWrapper />} />
          <Route path="/sale/payments" element={<DashboardWrapper />} />
          <Route path="/sale/reports" element={<DashboardWrapper />} />
          <Route path="/sale/documents" element={<DashboardWrapper />} />
          <Route path="/partner" element={<DashboardWrapper />} />
          <Route path="/partner/projects" element={<DashboardWrapper />} />
          <Route path="/partner/leads" element={<DashboardWrapper />} />
          <Route path="/partner/listings" element={<DashboardWrapper />} />
          <Route path="/partner/bookings" element={<DashboardWrapper />} />
          <Route path="/partner/chat" element={<DashboardWrapper />} />
          <Route path="/partner/payments" element={<DashboardWrapper />} />
          <Route path="/partner/reports" element={<DashboardWrapper />} />
          <Route path="/partner/documents" element={<DashboardWrapper />} />
          <Route path="/investor" element={<DashboardWrapper />} />
          <Route path="/investor/leads" element={<DashboardWrapper />} />
          <Route path="/investor/listings" element={<DashboardWrapper />} />
          <Route path="/investor/bookings" element={<DashboardWrapper />} />
          <Route path="/investor/chat" element={<DashboardWrapper />} />
          <Route path="/investor/payments" element={<DashboardWrapper />} />
          <Route path="/investor/reports" element={<DashboardWrapper />} />
          <Route path="/investor/users" element={<DashboardWrapper />} />
          <Route path="/investor/documents" element={<DashboardWrapper />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
