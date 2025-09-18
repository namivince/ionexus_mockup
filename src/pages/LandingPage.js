import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import HeroSearch from '../components/HeroSearch';
import PropertyGrid from '../components/PropertyGrid';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <HeroSearch />
      <PropertyGrid />
      <Footer />
    </Box>
  );
};

export default LandingPage;
