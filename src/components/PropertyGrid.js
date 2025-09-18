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
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 0),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  color: theme.palette.text.primary,
}));

const PropertyCard = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  overflow: 'hidden',
  height: '100%',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
}));

const PropertyImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  position: 'relative',
  backgroundColor: theme.palette.grey[200],
}));

const PropertyBadge = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  left: 12,
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  fontSize: '12px',
  fontWeight: 500,
  borderRadius: 4,
}));

const PropertyPrice = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

const PropertyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}));

const PropertyLocation = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
  fontSize: '14px',
  marginBottom: theme.spacing(1.5),
}));

const PropertyFeatures = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  color: theme.palette.grey[700],
  fontSize: '14px',
}));

const PropertyFeature = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}));

const PropertyGrid = () => {
  const properties = [
    {
      id: 1,
      title: '3 Bedroom Apartment in Dubai Marina',
      location: 'Dubai Marina, Dubai',
      price: 'AED 2,500,000',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      badge: 'Featured',
      beds: 3,
      baths: 3,
      sqft: '1,500'
    },
    {
      id: 2,
      title: '4 Bedroom Villa in Arabian Ranches',
      location: 'Arabian Ranches, Dubai',
      price: 'AED 4,200,000',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      badge: 'New',
      beds: 4,
      baths: 4,
      sqft: '3,200'
    },
    {
      id: 3,
      title: '2 Bedroom Apartment in Downtown Dubai',
      location: 'Downtown Dubai, Dubai',
      price: 'AED 1,800,000',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
      badge: 'Exclusive',
      beds: 2,
      baths: 2,
      sqft: '1,100'
    },
    {
      id: 4,
      title: '3 Bedroom Townhouse in JVC',
      location: 'Jumeirah Village Circle, Dubai',
      price: 'AED 3,100,000',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      badge: 'Featured',
      beds: 3,
      baths: 3.5,
      sqft: '2,200'
    },
    {
      id: 5,
      title: '4 Bedroom Penthouse in Palm Jumeirah',
      location: 'Palm Jumeirah, Dubai',
      price: 'AED 5,500,000',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
      badge: 'Off Plan',
      beds: 4,
      baths: 4.5,
      sqft: '3,800'
    },
    {
      id: 6,
      title: '2 Bedroom Apartment in Business Bay',
      location: 'Business Bay, Dubai',
      price: 'AED 2,200,000',
      image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg',
      badge: 'New',
      beds: 2,
      baths: 2.5,
      sqft: '1,350'
    },
    {
      id: 7,
      title: '5 Bedroom Villa in Emirates Hills',
      location: 'Emirates Hills, Dubai',
      price: 'AED 6,800,000',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
      badge: 'Exclusive',
      beds: 5,
      baths: 5.5,
      sqft: '5,200'
    },
    {
      id: 8,
      title: '1 Bedroom Apartment in DIFC',
      location: 'DIFC, Dubai',
      price: 'AED 1,950,000',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg',
      badge: 'Featured',
      beds: 1,
      baths: 1.5,
      sqft: '950'
    },
    {
      id: 9,
      title: '3 Bedroom Apartment in Bluewaters Island',
      location: 'Bluewaters Island, Dubai',
      price: 'AED 3,400,000',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      badge: 'New',
      beds: 3,
      baths: 3,
      sqft: '1,850'
    },
    {
      id: 10,
      title: '2 Bedroom Apartment in Dubai Hills',
      location: 'Dubai Hills Estate, Dubai',
      price: 'AED 2,750,000',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
      badge: 'Off Plan',
      beds: 2,
      baths: 2,
      sqft: '1,250'
    },
    {
      id: 11,
      title: '4 Bedroom Villa in Jumeirah Golf Estates',
      location: 'Jumeirah Golf Estates, Dubai',
      price: 'AED 7,200,000',
      image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      badge: 'Featured',
      beds: 4,
      baths: 4.5,
      sqft: '4,100'
    },
    {
      id: 12,
      title: '3 Bedroom Apartment in City Walk',
      location: 'City Walk, Dubai',
      price: 'AED 3,850,000',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      badge: 'Exclusive',
      beds: 3,
      baths: 3.5,
      sqft: '2,050'
    }
  ];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Featured':
        return '#1A237E';
      case 'New':
        return '#FF5252';
      case 'Exclusive':
        return '#16A34A';
      case 'Off Plan':
        return '#FF9800';
      default:
        return '#1A237E';
    }
  };

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle>Featured Properties</SectionTitle>
        <Grid container spacing={3}>
          {properties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertyCard>
                <Box position="relative">
                  <PropertyImage
                    image={property.image}
                    title={property.title}
                  />
                  <PropertyBadge 
                    label={property.badge}
                    sx={{ backgroundColor: getBadgeColor(property.badge) }}
                  />
                </Box>
                <CardContent sx={{ padding: 2 }}>
                  <PropertyPrice>{property.price}</PropertyPrice>
                  <PropertyTitle>{property.title}</PropertyTitle>
                  <PropertyLocation>{property.location}</PropertyLocation>
                  <PropertyFeatures>
                    <PropertyFeature>
                      <BedIcon sx={{ fontSize: 16 }} />
                      <span>{property.beds}</span>
                    </PropertyFeature>
                    <PropertyFeature>
                      <BathtubIcon sx={{ fontSize: 16 }} />
                      <span>{property.baths}</span>
                    </PropertyFeature>
                    <PropertyFeature>
                      <SquareFootIcon sx={{ fontSize: 16 }} />
                      <span>{property.sqft} sqft</span>
                    </PropertyFeature>
                  </PropertyFeatures>
                </CardContent>
              </PropertyCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default PropertyGrid;
