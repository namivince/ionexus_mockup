import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExploreIcon from '@mui/icons-material/Explore';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: theme.palette.background.default,
}));

const AreaCard = styled(Card)(({ theme }) => ({
  borderRadius: 24,
  overflow: 'hidden',
  height: '100%',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  },
}));

const AreaImage = styled(CardMedia)(({ theme }) => ({
  height: 160,
  position: 'relative',
}));

const PropertyCountChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 12,
  backgroundColor: 'rgba(0,0,0,0.7)',
  color: 'white',
  fontSize: '12px',
  fontWeight: 500,
}));

const ExploreByArea = () => {
  const areas = [
    {
      id: 1,
      name: 'Dubai Marina',
      propertyCount: '1,234',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=160&fit=crop',
      avgPrice: 'AED 1.8M'
    },
    {
      id: 2,
      name: 'Downtown Dubai',
      propertyCount: '856',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=160&fit=crop',
      avgPrice: 'AED 2.2M'
    },
    {
      id: 3,
      name: 'Palm Jumeirah',
      propertyCount: '432',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=160&fit=crop',
      avgPrice: 'AED 4.5M'
    },
    {
      id: 4,
      name: 'Business Bay',
      propertyCount: '967',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=160&fit=crop',
      avgPrice: 'AED 1.5M'
    },
    {
      id: 5,
      name: 'JLT',
      propertyCount: '723',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=160&fit=crop',
      avgPrice: 'AED 1.3M'
    },
    {
      id: 6,
      name: 'DIFC',
      propertyCount: '345',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=160&fit=crop',
      avgPrice: 'AED 2.8M'
    }
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" mb={4}>
          <ExploreIcon sx={{ color: 'primary.main', mr: 1 }} />
          <Typography variant="h2" sx={{ color: '#000000' }}>
            Explore by Area
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {areas.map((area) => (
            <Grid item xs={12} sm={6} md={4} key={area.id}>
              <AreaCard>
                <Box position="relative">
                  <AreaImage
                    image={area.image}
                    title={area.name}
                  />
                  <PropertyCountChip 
                    label={`${area.propertyCount} properties`} 
                    size="small"
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {area.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Average price: {area.avgPrice}
                  </Typography>
                </CardContent>
              </AreaCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default ExploreByArea;
