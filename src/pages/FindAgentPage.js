import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const AgentCard = styled(Card)(({ theme }) => ({
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

const FindAgentPage = () => {
  const agents = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Real Estate Consultant',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150',
      rating: 4.9,
      reviews: 127,
      specialization: ['Luxury Properties', 'Dubai Marina', 'Investment'],
      languages: ['English', 'Arabic'],
      experience: '8 years',
      phone: '+971 50 123 4567',
      email: 'sarah.johnson@ionexus.com'
    },
    {
      id: 2,
      name: 'Ahmed Al Mansouri',
      title: 'Property Investment Specialist',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150',
      rating: 4.8,
      reviews: 89,
      specialization: ['Commercial', 'Investment', 'Off-Plan'],
      languages: ['Arabic', 'English', 'French'],
      experience: '12 years',
      phone: '+971 50 234 5678',
      email: 'ahmed.almansouri@ionexus.com'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      title: 'Residential Property Expert',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=150',
      rating: 4.7,
      reviews: 156,
      specialization: ['Residential', 'Family Homes', 'Rentals'],
      languages: ['English', 'Spanish', 'Arabic'],
      experience: '6 years',
      phone: '+971 50 345 6789',
      email: 'maria.rodriguez@ionexus.com'
    },
    {
      id: 4,
      name: 'David Chen',
      title: 'Luxury Property Consultant',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150',
      rating: 4.9,
      reviews: 203,
      specialization: ['Luxury Villas', 'Palm Jumeirah', 'High-End'],
      languages: ['English', 'Mandarin', 'Arabic'],
      experience: '10 years',
      phone: '+971 50 456 7890',
      email: 'david.chen@ionexus.com'
    },
    {
      id: 5,
      name: 'Fatima Al Zahra',
      title: 'New Projects Specialist',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?w=150',
      rating: 4.8,
      reviews: 94,
      specialization: ['Off-Plan', 'New Developments', 'Investment'],
      languages: ['Arabic', 'English'],
      experience: '7 years',
      phone: '+971 50 567 8901',
      email: 'fatima.alzahra@ionexus.com'
    },
    {
      id: 6,
      name: 'James Wilson',
      title: 'Commercial Real Estate Expert',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=150',
      rating: 4.6,
      reviews: 78,
      specialization: ['Commercial', 'Office Spaces', 'Retail'],
      languages: ['English', 'Arabic'],
      experience: '9 years',
      phone: '+971 50 678 9012',
      email: 'james.wilson@ionexus.com'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header activeTab="Find Agent" />
      <Box sx={{ 
        backgroundColor: '#1A237E',
        color: 'white',
        padding: '60px 0',
        backgroundImage: 'linear-gradient(rgba(26, 35, 126, 0.9), rgba(26, 35, 126, 0.9)), url("https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Container maxWidth="lg">
          <Typography variant="h1" gutterBottom sx={{ fontSize: '36px', marginBottom: 2.5 }}>
            Find Your Perfect Agent
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '18px', marginBottom: 4, maxWidth: 600 }}>
            Connect with experienced real estate professionals who know Dubai inside out
          </Typography>
        </Container>
      </Box>
      
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h2" sx={{ fontSize: '24px', fontWeight: 700, marginBottom: 3, color: '#212121' }}>
          Our Expert Agents
        </Typography>
        
        <Grid container spacing={3}>
          {agents.map((agent) => (
            <Grid item xs={12} sm={6} md={4} key={agent.id}>
              <AgentCard>
                <CardContent sx={{ padding: 3, textAlign: 'center' }}>
                  <Avatar
                    src={agent.avatar}
                    alt={agent.name}
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      margin: '0 auto 16px',
                      border: '3px solid #1A237E'
                    }}
                  />
                  
                  <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 0.5, color: '#212121' }}>
                    {agent.name}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ color: '#757575', marginBottom: 2 }}>
                    {agent.title}
                  </Typography>
                  
                  <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                    <StarIcon sx={{ color: '#FF9800', fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2" sx={{ fontWeight: 500, mr: 1 }}>
                      {agent.rating}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#757575' }}>
                      ({agent.reviews} reviews)
                    </Typography>
                  </Box>
                  
                  <Stack direction="row" spacing={1} justifyContent="center" mb={2} flexWrap="wrap">
                    {agent.specialization.slice(0, 2).map((spec, index) => (
                      <Chip 
                        key={index}
                        label={spec}
                        size="small"
                        sx={{ 
                          backgroundColor: '#1A237E',
                          color: '#FFFFFF !important',
                          fontSize: '12px',
                          '& .MuiChip-label': {
                            color: '#FFFFFF !important'
                          }
                        }}
                      />
                    ))}
                  </Stack>
                  
                  <Typography variant="body2" sx={{ color: '#757575', marginBottom: 1 }}>
                    Experience: {agent.experience}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ color: '#757575', marginBottom: 2 }}>
                    Languages: {agent.languages.join(', ')}
                  </Typography>
                  
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<PhoneIcon />}
                      sx={{ 
                        backgroundColor: '#1A237E',
                        color: '#FFFFFF !important',
                        fontSize: '12px',
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
                      size="small"
                      startIcon={<EmailIcon />}
                      sx={{ 
                        borderColor: '#1A237E',
                        color: '#1A237E',
                        fontSize: '12px',
                        '&:hover': {
                          backgroundColor: '#1A237E',
                          color: 'white'
                        }
                      }}
                    >
                      Email
                    </Button>
                  </Stack>
                </CardContent>
              </AgentCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default FindAgentPage;
