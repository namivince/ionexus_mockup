import React from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: theme.palette.background.default,
}));

const PopularChip = styled(Chip)(({ theme }) => ({
  borderRadius: 24,
  padding: theme.spacing(1, 2),
  backgroundColor: '#FFFFFF',
  border: '1px solid #E0E0E0',
  fontSize: '14px',
  fontWeight: 500,
  color: '#000000',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
    borderColor: theme.palette.primary.main,
  },
  transition: 'all 0.3s ease',
}));

const PopularSearches = () => {
  const popularSearches = [
    '1BR Marina',
    'Villas Palm Jumeirah',
    '2BR Downtown',
    'Studio Business Bay',
    'Penthouse DIFC',
    '3BR Arabian Ranches',
    'Townhouse Dubai Hills',
    'Apartment JLT',
    'Villa Emirates Hills',
    'Office Space DIFC',
    'Retail Dubai Mall',
    'Warehouse Dubai South'
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" mb={4}>
          <TrendingUpIcon sx={{ color: 'primary.main', mr: 1 }} />
          <Typography variant="h2" sx={{ color: '#000000' }}>
            Popular Searches
          </Typography>
        </Box>
        
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          useFlexGap
        >
          {popularSearches.map((search, index) => (
            <PopularChip
              key={index}
              label={search}
              clickable
            />
          ))}
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default PopularSearches;
