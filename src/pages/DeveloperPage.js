import React, { useState, useEffect, lazy, Suspense } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  useMediaQuery,
  Card,
  CardContent,
  LinearProgress,
  Button
} from '@mui/material';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// Lazy load developer feature components
const DeveloperProjectManagement = lazy(() => import('../components/developer/DeveloperProjectManagement'));
const DeveloperDocumentUpload = lazy(() => import('../components/developer/DeveloperDocumentUpload'));

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: 12,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  borderRadius: 12,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
}));

const ActivityCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
  borderRadius: 12,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  height: '100%',
  minHeight: 300,
}));

const ChartCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
  borderRadius: 12,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  height: '100%',
  minHeight: 300,
}));

const DeveloperPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [open, setOpen] = useState(!isMobile);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [developerInfo, setDeveloperInfo] = useState(null);

  useEffect(() => {
    // Simulate loading developer info
    setTimeout(() => {
      setDeveloperInfo({
        name: 'John Developer',
        email: 'john.dev@ionexus.com',
        role: 'Developer',
        avatar: '/api/placeholder/40/40'
      });
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    // Clear developer authentication
    localStorage.removeItem('developerAuth');
    // Redirect to login page
    window.location.href = '/login';
  };

  // Get current path to determine active menu item
  const currentPath = location.pathname;
  
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, active: currentPath === '/developer', path: '/developer' },
    { text: 'Project Management', icon: <BusinessIcon />, active: currentPath === '/developer/projects', path: '/developer/projects' },
    { text: 'Document Upload / Legal', icon: <UploadFileIcon />, active: currentPath === '/developer/documents', path: '/developer/documents' },
  ];
  
  // Get current feature based on path
  const currentFeature = menuItems.find(item => item.active) || menuItems[0];

  const recentActivities = [
    { text: 'Updated Palm Heights project progress', time: '2 hours ago' },
    { text: 'Uploaded construction permit for Sky Garden', time: '4 hours ago' },
    { text: 'Added new unit specifications', time: '1 day ago' },
    { text: 'Generated project report', time: '2 days ago' },
    { text: 'Updated building plans', time: '3 days ago' },
  ];

  const stats = [
    { title: 'Active Projects', value: '8', color: '#1e40af' },
    { title: 'Total Units', value: '1,245', color: '#059669' },
    { title: 'Completed Units', value: '856', color: '#d97706' },
    { title: 'Documents', value: '342', color: '#dc2626' },
  ];

  if (loading) {
    return (
      <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" sx={{ mb: 3 }}>Loading Developer Dashboard...</Typography>
        <Box sx={{ width: '50%', maxWidth: 400 }}>
          <LinearProgress />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarStyled position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            IONEXUS Developer Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              {developerInfo?.name?.charAt(0)}
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBarStyled>
      
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <PersonIcon sx={{ mr: 1 }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <LogoutIcon sx={{ mr: 1 }} />
          Logout
        </MenuItem>
      </Menu>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 2, fontWeight: 600 }}>
            IONEXUS
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                backgroundColor: item.active ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                borderLeft: item.active ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
                pl: item.active ? 1.75 : 2,
              }}
            >
              <ListItemIcon sx={{ color: item.active ? theme.palette.primary.main : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontWeight: item.active ? 600 : 400,
                  color: item.active ? theme.palette.primary.main : 'inherit'
                }} 
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <Main open={open}>
        <DrawerHeader />
        {currentPath === '/developer' ? (
          // Dashboard content
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                Developer Dashboard
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Welcome back, {developerInfo?.name}! Manage your projects and documents.
              </Typography>
            </Box>
            
            {/* Stats Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <StatsCard elevation={1}>
                    <Typography variant="h6" color="text.secondary">
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: stat.color, my: 1 }}>
                      {stat.value}
                    </Typography>
                  </StatsCard>
                </Grid>
              ))}
            </Grid>

            {/* Developer Features */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Developer Tools
              </Typography>
              <Grid container spacing={3}>
                {menuItems.slice(1).map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <FeatureCard elevation={1}>
                      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.common.white,
                          borderRadius: '50%',
                          width: 60,
                          height: 60,
                          mb: 2,
                          mx: 'auto'
                        }}>
                          {item.icon}
                        </Box>
                        <Typography variant="h6" align="center" gutterBottom>
                          {item.text}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3, flexGrow: 1 }}>
                          {item.text === 'Project Management' 
                            ? 'Manage your development projects, track progress, and update unit information.'
                            : 'Upload and manage project documents, legal papers, and construction permits.'
                          }
                        </Typography>
                        <Button 
                          variant="contained" 
                          color="primary" 
                          fullWidth
                          component={Link}
                          to={item.path}
                          sx={{ borderRadius: 2 }}
                        >
                          Access
                        </Button>
                      </Box>
                    </FeatureCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
            
            {/* Recent Activities */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <ActivityCard elevation={1}>
                  <Typography variant="h6" gutterBottom>Recent Activities</Typography>
                  <List>
                    {recentActivities.map((activity, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemText 
                          primary={activity.text} 
                          secondary={activity.time} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </ActivityCard>
              </Grid>
              
              {/* Quick Stats */}
              <Grid item xs={12} md={6}>
                <ChartCard elevation={1}>
                  <Typography variant="h6" gutterBottom>Project Progress</Typography>
                  <Box sx={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Project progress visualization would be displayed here
                    </Typography>
                  </Box>
                </ChartCard>
              </Grid>
            </Grid>
          </>
        ) : currentPath === '/developer/projects' ? (
          // Project Management content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading Project Management...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <DeveloperProjectManagement />
          </Suspense>
        ) : currentPath === '/developer/documents' ? (
          // Document Upload content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading Document Upload...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <DeveloperDocumentUpload />
          </Suspense>
        ) : (
          // Default content
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                {currentFeature.text}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Access developer tools and manage your projects.
              </Typography>
            </Box>
            
            <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', py: 8 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  borderRadius: '50%',
                  width: 80,
                  height: 80,
                  mb: 3
                }}>
                  {currentFeature.icon}
                </Box>
                <Typography variant="h5" gutterBottom align="center">
                  {currentFeature.text}
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center" sx={{ maxWidth: 600, mb: 4 }}>
                  This feature is available for developers to manage projects and documents.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  component={Link}
                  to="/developer"
                >
                  Return to Dashboard
                </Button>
              </Box>
            </Paper>
          </>
        )}
      </Main>
    </Box>
  );
};

export default DeveloperPage;
