import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
  Avatar,
  AvatarGroup
} from '@mui/material';
import { styled } from '@mui/material/styles';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

const ProjectCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
  },
}));

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: 16,
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  color: theme.palette.common.white,
  boxShadow: '0 8px 32px rgba(124, 58, 237, 0.3)',
}));

const ProjectManagement = () => {
  const [view, setView] = useState('grid');

  const stats = [
    { title: 'Total Projects', value: '24', icon: <BusinessIcon />, color: '#8b5cf6' },
    { title: 'Active Projects', value: '18', icon: <TrendingUpIcon />, color: '#10b981' },
    { title: 'Total Units', value: '2,456', icon: <HomeIcon />, color: '#f59e0b' },
    { title: 'Sold Units', value: '1,832', icon: <TrendingUpIcon />, color: '#ef4444' },
  ];

  const projects = [
    {
      id: 1,
      name: 'Palm Heights',
      location: 'District 2, HCMC',
      developer: 'ABC Development',
      status: 'Selling',
      units: 816,
      sold: 364,
      price: '$320,000 - $450,000',
      completion: '75%',
      image: '/api/placeholder/300/200',
      launchDate: 'Jan 15, 2023'
    },
    {
      id: 2,
      name: 'Sky Garden',
      location: 'District 7, HCMC',
      developer: 'XYZ Corp',
      status: 'Upcoming',
      units: 1240,
      sold: 0,
      price: '$280,000 - $520,000',
      completion: '45%',
      image: '/api/placeholder/300/200',
      launchDate: 'Mar 20, 2024'
    },
    {
      id: 3,
      name: 'River View',
      location: 'District 1, HCMC',
      developer: 'DEF Holdings',
      status: 'Sold Out',
      units: 512,
      sold: 512,
      price: '$450,000 - $680,000',
      completion: '100%',
      image: '/api/placeholder/300/200',
      launchDate: 'Oct 10, 2022'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Selling': return 'success';
      case 'Upcoming': return 'warning';
      case 'Sold Out': return 'error';
      case 'Completed': return 'info';
      default: return 'default';
    }
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#1f2937' }}>
          Project Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage real estate projects, units, and sales policies.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatsCard elevation={0}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                {stat.icon}
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {stat.title}
              </Typography>
            </StatsCard>
          </Grid>
        ))}
      </Grid>

      {/* Controls */}
      <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <TextField size="small" placeholder="Search projects..." sx={{ minWidth: 250 }} />
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Status</InputLabel>
            <Select label="Status" defaultValue="">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="selling">Selling</MenuItem>
              <MenuItem value="upcoming">Upcoming</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
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
        </Box>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          sx={{ 
            borderRadius: 3,
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)'
          }}
        >
          Add New Project
        </Button>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <ProjectCard>
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
                    {project.name}
                  </Typography>
                </Box>
                <Chip
                  label={project.status}
                  color={getStatusColor(project.status)}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    fontWeight: 600
                  }}
                />
              </Box>
              
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {project.name}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {project.location}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    Launch: {project.launchDate}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Sales Progress
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={(project.sold / project.units) * 100}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'grey.200',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                        background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
                      }
                    }}
                  />
                  <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
                    {project.sold}/{project.units} units sold ({Math.round((project.sold / project.units) * 100)}%)
                  </Typography>
                </Box>

                <Typography variant="body2" color="primary.main" sx={{ fontWeight: 600, mb: 2 }}>
                  {project.price}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    by {project.developer}
                  </Typography>
                  <Box>
                    <IconButton size="small" color="primary">
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton size="small" color="primary">
                      <EditIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>

      {/* Unit Management Section */}
      <Paper sx={{ mt: 4, p: 3, borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Unit Management - Palm Heights
        </Typography>
        
        <TableContainer sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Unit Code</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Area (m²)</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Price (USD)</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Floor</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { code: 'A-1201', type: '2BR', area: '85.5', price: '$320,000', status: 'Available', floor: '12' },
                { code: 'A-1202', type: '3BR', area: '120.3', price: '$450,000', status: 'Reserved', floor: '12' },
                { code: 'A-1203', type: '1BR', area: '55.8', price: '$210,000', status: 'Sold', floor: '12' },
              ].map((unit) => (
                <TableRow key={unit.code} hover>
                  <TableCell sx={{ fontWeight: 500 }}>{unit.code}</TableCell>
                  <TableCell>{unit.type}</TableCell>
                  <TableCell>{unit.area}</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: 'primary.main' }}>{unit.price}</TableCell>
                  <TableCell>
                    <Chip
                      label={unit.status}
                      color={unit.status === 'Available' ? 'success' : unit.status === 'Reserved' ? 'warning' : 'error'}
                      size="small"
                      sx={{ fontWeight: 500 }}
                    />
                  </TableCell>
                  <TableCell>{unit.floor}</TableCell>
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
      </Paper>
    </>
  );
};

export default ProjectManagement;
