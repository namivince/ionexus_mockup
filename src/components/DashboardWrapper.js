import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import adminTheme from '../theme/adminTheme';
import developerTheme from '../theme/developerTheme';
import saleTheme from '../theme/saleTheme';
import partnerTheme from '../theme/partnerTheme';
import investorTheme from '../theme/investorTheme';
import DashboardPage from '../pages/DashboardPage';

const DashboardWrapper = () => {
  // Get user role from localStorage
  const authData = localStorage.getItem('userAuth');
  let userRole = null;
  
  if (authData) {
    const parsedAuth = JSON.parse(authData);
    userRole = parsedAuth.userRole;
  }

  // Choose theme based on user role
  const getThemeByRole = (role) => {
    switch (role) {
      case 'admin': return adminTheme;
      case 'developer': return developerTheme;
      case 'sale': return saleTheme;
      case 'partner': return partnerTheme;
      case 'investor': return investorTheme;
      default: return adminTheme;
    }
  };

  const selectedTheme = getThemeByRole(userRole);

  return (
    <ThemeProvider theme={selectedTheme}>
      <DashboardPage />
    </ThemeProvider>
  );
};

export default DashboardWrapper;
