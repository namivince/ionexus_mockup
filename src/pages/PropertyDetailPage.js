import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  Button, 
  Chip,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PropertyImage = styled(CardMedia)(({ theme }) => ({
  height: 400,
  borderRadius: 8,
  marginBottom: theme.spacing(2),
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[50],
  borderRadius: 8,
  textAlign: 'center',
}));

const PropertyDetailPage = () => {
  const { id } = useParams();
  
  // Mock property data - in real app, this would come from API
  const property = {
    id: id || 1,
    title: '3 Bedroom Apartment in Dubai Marina',
    location: 'Dubai Marina, Dubai',
    price: 'AED 2,500,000',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg'
    ],
    badge: 'Featured',
    beds: 3,
    baths: 3,
    sqft: '1,500',
    description: 'Stunning 3-bedroom apartment with breathtaking marina views. This modern residence features high-end finishes, spacious living areas, and premium amenities. Perfect for families or investors looking for luxury living in Dubai Marina.',
    features: [
      'Marina View',
      'Balcony',
      'Built-in Wardrobes',
      'Central A/C',
      'Covered Parking',
      'Gym',
      'Swimming Pool',
      'Security',
      'Concierge Service',
      'Near Metro'
    ],
    agent: {
      name: 'Sarah Johnson',
      phone: '+971 50 123 4567',
      email: 'sarah.johnson@ionexus.com',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100'
    }
  };

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
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Property Images */}
          <Grid item xs={12} md={8}>
            <PropertyImage
              image={property.images[0]}
              title={property.title}
            />
            
            <Grid container spacing={2}>
              {property.images.slice(1).map((image, index) => (
                <Grid item xs={6} key={index}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={`Property ${index + 2}`}
                    sx={{ borderRadius: 1 }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* Property Details */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 20 }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <Chip 
                  label={property.badge}
                  sx={{ 
                    backgroundColor: getBadgeColor(property.badge),
                    color: 'white',
                    fontWeight: 500
                  }}
                />
                <Box sx={{ flexGrow: 1 }} />
                <Button size="small" startIcon={<FavoriteIcon />}>
                  Save
                </Button>
                <Button size="small" startIcon={<ShareIcon />}>
                  Share
                </Button>
              </Stack>
              
              <Typography variant="h4" sx={{ 
                fontSize: '28px', 
                fontWeight: 700, 
                color: '#1A237E',
                mb: 1 
              }}>
                {property.price}
              </Typography>
              
              <Typography variant="h5" sx={{ 
                fontSize: '20px', 
                fontWeight: 600, 
                mb: 1 
              }}>
                {property.title}
              </Typography>
              
              <Box display="flex" alignItems="center" mb={3}>
                <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                <Typography variant="body2" color="text.secondary">
                  {property.location}
                </Typography>
              </Box>
              
              {/* Property Features */}
              <Grid container spacing={2} mb={3}>
                <Grid item xs={4}>
                  <FeatureBox>
                    <BedIcon sx={{ color: '#1A237E' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {property.beds}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Bedrooms
                      </Typography>
                    </Box>
                  </FeatureBox>
                </Grid>
                <Grid item xs={4}>
                  <FeatureBox>
                    <BathtubIcon sx={{ color: '#1A237E' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {property.baths}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Bathrooms
                      </Typography>
                    </Box>
                  </FeatureBox>
                </Grid>
                <Grid item xs={4}>
                  <FeatureBox>
                    <SquareFootIcon sx={{ color: '#1A237E' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {property.sqft}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Sq Ft
                      </Typography>
                    </Box>
                  </FeatureBox>
                </Grid>
              </Grid>
              
              {/* Contact Agent */}
              <Card sx={{ p: 2, mb: 3, backgroundColor: '#f8f9fa' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Contact Agent
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <Box
                    component="img"
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    sx={{ 
                      width: 50, 
                      height: 50, 
                      borderRadius: '50%',
                      mr: 2 
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {property.agent.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Senior Real Estate Consultant
                    </Typography>
                  </Box>
                </Box>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    startIcon={<PhoneIcon />}
                    fullWidth
                    sx={{ 
                      backgroundColor: '#1A237E',
                      color: '#FFFFFF !important',
                      '&:hover': {
                        backgroundColor: '#0f1654',
                        color: '#FFFFFF !important'
                      }
                    }}
                  >
                    Call
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<EmailIcon />}
                    fullWidth
                    sx={{ borderColor: '#1A237E', color: '#1A237E' }}
                  >
                    Email
                  </Button>
                </Stack>
              </Card>
              
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ 
                  backgroundColor: '#1A237E',
                  color: '#FFFFFF !important',
                  py: 1.5,
                  fontSize: '16px',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#0f1654',
                    color: '#FFFFFF !important'
                  }
                }}
              >
                Schedule Viewing
              </Button>
            </Box>
          </Grid>
        </Grid>
        
        {/* Property Description & Features */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Description
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 4 }}>
              {property.description}
            </Typography>
            
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Features & Amenities
            </Typography>
            <Grid container spacing={1}>
              {property.features.map((feature, index) => (
                <Grid item xs={6} sm={4} key={index}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <CheckCircleIcon sx={{ 
                      color: '#16A34A', 
                      fontSize: 16, 
                      mr: 1 
                    }} />
                    <Typography variant="body2">
                      {feature}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default PropertyDetailPage;
