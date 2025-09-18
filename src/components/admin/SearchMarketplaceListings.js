import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  CardMedia,
  Switch,
  FormControlLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import CancelIcon from '@mui/icons-material/Cancel';

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: `linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)`,
  color: theme.palette.common.white,
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(14, 165, 233, 0.3)',
}));

const ListingCard = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
  },
}));

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const SearchMarketplaceListings = () => {
  const [tabValue, setTabValue] = useState(0);

  const stats = [
    { title: 'Total Listings', value: '2,456', change: '+12%', color: '#0ea5e9' },
    { title: 'Active Listings', value: '1,832', change: '+8%', color: '#10b981' },
    { title: 'Featured Listings', value: '156', change: '+25%', color: '#f59e0b' },
    { title: 'Avg Views/Day', value: '8,420', change: '+15%', color: '#8b5cf6' },
  ];

  const listings = [
    {
      id: 1,
      title: 'Luxury Apartment in District 2',
      location: 'District 2, HCMC',
      price: '$450,000',
      type: 'Apartment',
      bedrooms: 3,
      bathrooms: 2,
      area: '120 m²',
      status: 'Active',
      featured: true,
      views: 1250,
      inquiries: 45,
      image: '/api/placeholder/300/200',
      agent: 'David Agent'
    },
    {
      id: 2,
      title: 'Modern Villa with Pool',
      location: 'District 7, HCMC',
      price: '$680,000',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      area: '250 m²',
      status: 'Pending',
      featured: false,
      views: 890,
      inquiries: 32,
      image: '/api/placeholder/300/200',
      agent: 'Sarah Agent'
    },
    {
      id: 3,
      title: 'Cozy Studio Downtown',
      location: 'District 1, HCMC',
      price: '$180,000',
      type: 'Studio',
      bedrooms: 1,
      bathrooms: 1,
      area: '45 m²',
      status: 'Sold',
      featured: false,
      views: 2100,
      inquiries: 78,
      image: '/api/placeholder/300/200',
      agent: 'Mike Agent'
    },
  ];

  const searchQueries = [
    { query: 'apartment district 2', count: 1250, trend: '+15%' },
    { query: 'villa with pool', count: 890, trend: '+22%' },
    { query: 'luxury condo', count: 756, trend: '+8%' },
    { query: 'studio downtown', count: 645, trend: '+12%' },
    { query: 'house for sale', count: 534, trend: '+5%' },
  ];

  const featuredListings = [
    { id: 1, title: 'Luxury Penthouse', views: 2500, clicks: 180, ctr: '7.2%' },
    { id: 2, title: 'Modern Villa', views: 1800, clicks: 125, ctr: '6.9%' },
    { id: 3, title: 'Riverside Apartment', views: 1600, clicks: 95, ctr: '5.9%' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Pending': return 'warning';
      case 'Sold': case 'Rented': return 'info';
      case 'Inactive': return 'error';
      default: return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': return <CheckCircleIcon />;
      case 'Pending': return <PendingIcon />;
      case 'Sold': case 'Rented': return <CheckCircleIcon />;
      case 'Inactive': return <CancelIcon />;
      default: return <PendingIcon />;
    }
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#1f2937' }}>
          Search & Marketplace Listings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage property listings, search optimization, and marketplace performance.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatsCard elevation={0}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
                {stat.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.8,
                  color: stat.change.startsWith('+') ? '#dcfce7' : '#fef3c7'
                }}
              >
                {stat.change} MoM
              </Typography>
            </StatsCard>
          </Grid>
        ))}
      </Grid>

      {/* Main Content */}
      <Paper sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <Tabs 
          value={tabValue} 
          onChange={(e, v) => setTabValue(v)}
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            '& .MuiTab-root': { 
              fontWeight: 600,
              minHeight: 64,
            }
          }}
        >
          <Tab label="All Listings" icon={<HomeIcon />} iconPosition="start" />
          <Tab label="Search Analytics" icon={<SearchIcon />} iconPosition="start" />
          <Tab label="Featured Listings" icon={<StarIcon />} iconPosition="start" />
          <Tab label="Performance" icon={<TrendingUpIcon />} iconPosition="start" />
        </Tabs>

        {/* All Listings Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField size="small" placeholder="Search listings..." sx={{ minWidth: 200 }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="sold">Sold</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Type</InputLabel>
              <Select label="Type" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="studio">Studio</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Location</InputLabel>
              <Select label="Location" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="district1">District 1</MenuItem>
                <MenuItem value="district2">District 2</MenuItem>
                <MenuItem value="district7">District 7</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained" 
              startIcon={<HomeIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                boxShadow: '0 4px 20px rgba(14, 165, 233, 0.3)'
              }}
            >
              Add Listing
            </Button>
          </Box>

          <Grid container spacing={3}>
            {listings.map((listing) => (
              <Grid item xs={12} md={6} lg={4} key={listing.id}>
                <ListingCard>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        height: 200,
                        background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                        Property Image
                      </Typography>
                    </Box>
                    <Box sx={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 1 }}>
                      <Chip
                        label={listing.status}
                        color={getStatusColor(listing.status)}
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                      {listing.featured && (
                        <Chip
                          label="Featured"
                          color="warning"
                          size="small"
                          icon={<StarIcon />}
                          sx={{ fontWeight: 600 }}
                        />
                      )}
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {listing.title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {listing.location}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <BedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2">{listing.bedrooms}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <BathtubIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2">{listing.bathrooms}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <SquareFootIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2">{listing.area}</Typography>
                      </Box>
                    </Box>

                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700, mb: 2 }}>
                      {listing.price}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {listing.views} views • {listing.inquiries} inquiries
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        by {listing.agent}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <DeleteIcon />
                      </IconButton>
                      <Box sx={{ flexGrow: 1 }} />
                      <FormControlLabel
                        control={<Switch size="small" defaultChecked={listing.featured} />}
                        label="Featured"
                        sx={{ m: 0 }}
                      />
                    </Box>
                  </CardContent>
                </ListingCard>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Search Analytics Tab */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Top Search Queries
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 600 }}>Search Query</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Count</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Trend</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {searchQueries.map((query, index) => (
                          <TableRow key={index} hover>
                            <TableCell sx={{ fontWeight: 500 }}>{query.query}</TableCell>
                            <TableCell>{query.count.toLocaleString()}</TableCell>
                            <TableCell>
                              <Typography 
                                variant="body2" 
                                sx={{ 
                                  color: query.trend.startsWith('+') ? 'success.main' : 'error.main',
                                  fontWeight: 500
                                }}
                              >
                                {query.trend}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Search Trends
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Search trends chart would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Featured Listings Tab */}
        <TabPanel value={tabValue} index={2}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Featured Listings Performance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monitor the performance of your featured listings
            </Typography>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Listing</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Views</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Clicks</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>CTR</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {featuredListings.map((listing) => (
                  <TableRow key={listing.id} hover>
                    <TableCell sx={{ fontWeight: 500 }}>{listing.title}</TableCell>
                    <TableCell>{listing.views.toLocaleString()}</TableCell>
                    <TableCell>{listing.clicks}</TableCell>
                    <TableCell>
                      <Chip 
                        label={listing.ctr} 
                        color="success"
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        {/* Performance Tab */}
        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Listing Views by Type
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Pie Chart visualization would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Inquiry Conversion Rate
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Line Chart visualization would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Monthly Performance Overview
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Bar Chart visualization would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </>
  );
};

export default SearchMarketplaceListings;
