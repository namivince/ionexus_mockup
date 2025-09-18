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
  IconButton,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import StarIcon from '@mui/icons-material/Star';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: '#F8F9FA',
}));

const PropertyCard = styled(Card)(({ theme }) => ({
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

const PropertyImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  position: 'relative',
}));

const PriceChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  bottom: 12,
  left: 12,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: '14px',
}));

const FavoriteButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 12,
  backgroundColor: 'rgba(255,255,255,0.9)',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,1)',
  },
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  left: 12,
  backgroundColor: '#4CAF50',
  color: 'white',
  fontSize: '12px',
  fontWeight: 500,
}));

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Marina Apartment',
      location: 'Dubai Marina',
      price: 'AED 2,500,000',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=200&fit=crop',
      beds: 2,
      baths: 2,
      sqft: '1,200',
      featured: true,
      favorite: false
    },
    {
      id: 2,
      title: 'Modern Downtown Studio',
      location: 'Downtown Dubai',
      price: 'AED 1,200,000',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=200&fit=crop',
      beds: 1,
      baths: 1,
      sqft: '650',
      featured: false,
      favorite: true
    },
    {
      id: 3,
      title: 'Spacious Business Bay View',
      location: 'Business Bay',
      price: 'AED 1,800,000',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=200&fit=crop',
      beds: 3,
      baths: 2,
      sqft: '1,500',
      featured: false,
      favorite: false
    },
    {
      id: 4,
      title: 'Premium JLT Residence',
      location: 'Jumeirah Lake Towers',
      price: 'AED 1,600,000',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=200&fit=crop',
      beds: 2,
      baths: 2,
      sqft: '1,100',
      featured: true,
      favorite: false
    },
    {
      id: 5,
      title: 'Elegant DIFC Office',
      location: 'DIFC',
      price: 'AED 3,200,000',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop',
      beds: 0,
      baths: 2,
      sqft: '800',
      featured: false,
      favorite: true
    },
    {
      id: 6,
      title: 'Luxury Palm Villa',
      location: 'Palm Jumeirah',
      price: 'AED 8,500,000',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=200&fit=crop',
      beds: 5,
      baths: 4,
      sqft: '4,200',
      featured: true,
      favorite: false
    }
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" mb={4}>
          <StarIcon sx={{ color: 'primary.main', mr: 1 }} />
          <Typography variant="h2" sx={{ color: '#000000' }}>
            Featured Properties
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {properties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertyCard>
                <Box position="relative">
                  <PropertyImage
                    image={property.image}
                    title={property.title}
                  />
                  {property.featured && (
                    <FeatureChip label="Featured" size="small" />
                  )}
                  <FavoriteButton size="small">
                    {property.favorite ? (
                      <FavoriteIcon sx={{ color: '#f44336' }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </FavoriteButton>
                  <PriceChip label={property.price} />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {property.title}
                  </Typography>
                  <Box display="flex" alignItems="center" mb={2}>
                    <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      {property.location}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={2} alignItems="center">
                    {property.beds > 0 && (
                      <Box display="flex" alignItems="center">
                        <BedIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                        <Typography variant="caption">{property.beds}</Typography>
                      </Box>
                    )}
                    <Box display="flex" alignItems="center">
                      <BathtubIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                      <Typography variant="caption">{property.baths}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <SquareFootIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                      <Typography variant="caption">{property.sqft} sqft</Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </PropertyCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default FeaturedProperties;
