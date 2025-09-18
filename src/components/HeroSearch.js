import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(8, 0),
  backgroundImage: 'linear-gradient(rgba(26, 35, 126, 0.9), rgba(26, 35, 126, 0.9)), url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
}));

const SearchCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 12,
  padding: theme.spacing(3),
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  marginTop: theme.spacing(-6),
  position: 'relative',
  zIndex: 10,
}));

const SearchTabs = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2.5),
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
}));

const SearchTab = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  cursor: 'pointer',
  fontWeight: 500,
  color: theme.palette.grey[600],
  borderBottom: '3px solid transparent',
  marginBottom: '-1px',
  transition: 'all 0.2s',
  '&.active': {
    color: theme.palette.primary.main,
    borderBottomColor: theme.palette.primary.main,
  },
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const SearchTextField = styled(TextField)(({ theme }) => ({
  flex: 1,
  minWidth: 200,
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    fontSize: '16px',
    '& fieldset': {
      borderColor: theme.palette.grey[300],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px rgba(26, 35, 126, 0.2)`,
    },
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 2),
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(1.5, 3),
  fontSize: '16px',
  fontWeight: 500,
  backgroundColor: theme.palette.primary.main,
  color: '#FFFFFF !important',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: '#FFFFFF !important',
  },
}));

const FilterChip = styled(Chip)(({ theme }) => ({
  borderRadius: 100,
  backgroundColor: '#FFFFFF',
  border: `1px solid ${theme.palette.grey[300]}`,
  color: '#000000',
  fontSize: '14px',
  cursor: 'pointer',
  transition: 'all 0.2s',
  fontWeight: 500,
  '& .MuiChip-label': {
    color: '#000000',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
    borderColor: theme.palette.primary.main,
    '& .MuiChip-label': {
      color: '#FFFFFF',
    },
  },
  '&.active': {
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
    borderColor: theme.palette.primary.main,
    '& .MuiChip-label': {
      color: '#FFFFFF',
    },
  },
}));

const HeroSearch = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [searchQuery, setSearchQuery] = useState('');

  const searchTabs = ['Buy', 'Rent', 'Commercial', 'New Projects'];
  const filterOptions = ['Property Type', 'Price', 'Beds & Baths', 'Area (sqft)', 'More Filters'];

  return (
    <>
      <HeroContainer>
        <Container maxWidth="lg">
          <Typography variant="h1" gutterBottom sx={{ fontSize: '36px', marginBottom: 2.5 }}>
            Find Your Dream Property
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '18px', marginBottom: 4, maxWidth: 600 }}>
            Search properties for sale and to rent in the most desirable locations
          </Typography>
        </Container>
      </HeroContainer>
      
      <Container maxWidth="lg">
        <SearchCard>
          <SearchTabs>
            {searchTabs.map((tab) => (
              <SearchTab
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </SearchTab>
            ))}
          </SearchTabs>

          <Box display="flex" gap={2} mb={2} flexWrap="wrap">
            <SearchTextField
              placeholder="Enter location, community, or building"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchButton variant="contained">
              Search
            </SearchButton>
          </Box>

          <Stack direction="row" spacing={1.5} flexWrap="wrap">
            {filterOptions.map((filter, index) => (
              <FilterChip
                key={index}
                label={filter}
                clickable
              />
            ))}
          </Stack>
        </SearchCard>
      </Container>
    </>
  );
};

export default HeroSearch;
