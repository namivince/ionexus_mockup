import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Stack,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: '#F8F9FA',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  borderRadius: 24,
  overflow: 'hidden',
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  },
}));

const ProjectImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  position: 'relative',
}));

const PriceChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  borderRadius: 24,
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  paddingBottom: theme.spacing(2),
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  border: '1px solid #E0E0E0',
  color: '#000000',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
    borderColor: theme.palette.primary.main,
  },
}));

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Canal Crown Tower',
      location: 'Business Bay',
      price: 'From AED 1.2M',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=200&fit=crop',
      type: 'Apartment',
      bedrooms: '1-3 BR',
      status: 'Under Construction'
    },
    {
      id: 2,
      title: 'Marina Heights',
      location: 'Dubai Marina',
      price: 'From AED 2.5M',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=200&fit=crop',
      type: 'Apartment',
      bedrooms: '2-4 BR',
      status: 'Ready'
    },
    {
      id: 3,
      title: 'Palm Residences',
      location: 'Palm Jumeirah',
      price: 'From AED 5.8M',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=200&fit=crop',
      type: 'Villa',
      bedrooms: '4-6 BR',
      status: 'Ready'
    },
    {
      id: 4,
      title: 'Downtown Views',
      location: 'Downtown Dubai',
      price: 'From AED 1.8M',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=200&fit=crop',
      type: 'Apartment',
      bedrooms: '1-2 BR',
      status: 'Under Construction'
    }
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Box display="flex" alignItems="center">
            <HomeIcon sx={{ color: 'primary.main', mr: 1 }} />
            <Typography variant="h2" sx={{ color: '#000000' }}>
              Featured Projects
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <NavigationButton>
              <ArrowBackIcon />
            </NavigationButton>
            <NavigationButton>
              <ArrowForwardIcon />
            </NavigationButton>
          </Stack>
        </Box>

        <CarouselContainer>
          {projects.map((project) => (
            <Box key={project.id} sx={{ minWidth: 320, maxWidth: 320 }}>
              <ProjectCard>
                <Box position="relative">
                  <ProjectImage
                    image={project.image}
                    title={project.title}
                  />
                  <PriceChip label={project.price} />
                  <Chip
                    label={project.status}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      backgroundColor: project.status === 'Ready' ? '#4CAF50' : '#FF9800',
                      color: 'white',
                      fontWeight: 500,
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Box display="flex" alignItems="center" mb={1}>
                    <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      {project.location}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1} mb={2}>
                    <Chip label={project.type} size="small" variant="outlined" />
                    <Chip label={project.bedrooms} size="small" variant="outlined" />
                  </Stack>
                  <Button
                    variant="outlined"
                    fullWidth
                    endIcon={<ArrowForwardIcon />}
                    sx={{ borderRadius: 24 }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </ProjectCard>
            </Box>
          ))}
        </CarouselContainer>
      </Container>
    </SectionContainer>
  );
};

export default FeaturedProjects;
