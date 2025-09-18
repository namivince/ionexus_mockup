import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Header from '../components/Header';
import PropertyGrid from '../components/PropertyGrid';
import Footer from '../components/Footer';

const NewProjectsPage = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header activeTab="New Projects" />
      <Box sx={{ 
        backgroundColor: '#1A237E',
        color: 'white',
        padding: '60px 0',
        backgroundImage: 'linear-gradient(rgba(26, 35, 126, 0.9), rgba(26, 35, 126, 0.9)), url("https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Container maxWidth="lg">
          <Typography variant="h1" gutterBottom sx={{ fontSize: '36px', marginBottom: 2.5 }}>
            New Development Projects
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '18px', marginBottom: 4, maxWidth: 600 }}>
            Discover off-plan developments and upcoming luxury projects in Dubai
          </Typography>
        </Container>
      </Box>
      
      <Container maxWidth="lg">
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: 3,
          padding: 3,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          marginTop: -6,
          position: 'relative',
          zIndex: 10,
        }}>
          <Typography variant="h6" sx={{ color: '#1A237E', marginBottom: 2 }}>
            🏗️ New Projects Coming Soon
          </Typography>
          <Typography variant="body1" sx={{ color: '#757575' }}>
            Exciting new developments and off-plan projects will be featured here soon.
          </Typography>
        </Box>
      </Container>
      
      <PropertyGrid />
      <Footer />
    </Box>
  );
};

export default NewProjectsPage;
