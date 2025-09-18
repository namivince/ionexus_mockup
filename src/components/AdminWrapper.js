import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import adminTheme from '../theme/adminTheme';
import AdminPage from '../pages/AdminPage';

const AdminWrapper = () => {
  return (
    <ThemeProvider theme={adminTheme}>
      <AdminPage />
    </ThemeProvider>
  );
};

export default AdminWrapper;
