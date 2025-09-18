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
import PeopleIcon from '@mui/icons-material/People';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BusinessIcon from '@mui/icons-material/Business';
import ContactsIcon from '@mui/icons-material/Contacts';
import SearchIcon from '@mui/icons-material/Search';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ChatIcon from '@mui/icons-material/Chat';
import PaymentIcon from '@mui/icons-material/Payment';
import BarChartIcon from '@mui/icons-material/BarChart';
import SecurityIcon from '@mui/icons-material/Security';
import CampaignIcon from '@mui/icons-material/Campaign';
import UploadFileIcon from '@mui/icons-material/UploadFile';

// Lazy load admin feature components
const ReportsDashboard = lazy(() => import('../components/admin/ReportsDashboard'));
const BookingTransactionFlow = lazy(() => import('../components/admin/BookingTransactionFlow'));
const ProjectManagement = lazy(() => import('../components/admin/ProjectManagement'));
const LeadCustomerManagement = lazy(() => import('../components/admin/LeadCustomerManagement'));
const PaymentCommissionTracking = lazy(() => import('../components/admin/PaymentCommissionTracking'));
const SearchMarketplaceListings = lazy(() => import('../components/admin/SearchMarketplaceListings'));
const UserManagementRoles = lazy(() => import('../components/admin/UserManagementRoles'));
const RealtimeChatInquiry = lazy(() => import('../components/admin/RealtimeChatInquiry'));
const SourceTracking = lazy(() => import('../components/admin/SourceTracking'));
const DocumentUploadLegal = lazy(() => import('../components/admin/DocumentUploadLegal'));

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

const AppBarStyled = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
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
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
  }),
);

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

const AdminPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [open, setOpen] = useState(!isMobile);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adminInfo, setAdminInfo] = useState(null);
  
  // Load admin data and check authentication
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check localStorage for admin authentication
      const adminAuthString = localStorage.getItem('adminAuth');
      
      if (adminAuthString) {
        try {
          const adminAuth = JSON.parse(adminAuthString);
          
          // Check if auth is valid and not expired (24 hour expiry)
          const now = new Date().getTime();
          const authTime = adminAuth.timestamp || 0;
          const authExpired = now - authTime > 24 * 60 * 60 * 1000;
          
          if (adminAuth.isAuthenticated && !authExpired && adminAuth.userEmail === 'superadmin@ionexus.com') {
            // Valid authentication
            setAdminInfo({
              name: 'Super Admin',
              email: adminAuth.userEmail,
              role: 'Super Admin',
              avatar: null
            });
            setLoading(false);
            return;
          }
        } catch (e) {
          console.error('Error parsing admin auth:', e);
        }
      }
      
      // No valid auth found, redirect to login
      console.log('No valid admin authentication found, redirecting to login');
      localStorage.removeItem('adminAuth'); // Clear any invalid auth data
      window.location.href = '/login';
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
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
    // Clear admin authentication
    localStorage.removeItem('adminAuth');
    // Redirect to login page
    window.location.href = '/login';
  };
  
  // Get current path to determine active menu item
  const currentPath = location.pathname;
  
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, active: currentPath === '/admin', path: '/admin' },
    { text: 'Project Management', icon: <BusinessIcon />, active: currentPath === '/admin/projects', path: '/admin/projects' },
    { text: 'Lead & Customer Management', icon: <ContactsIcon />, active: currentPath === '/admin/leads', path: '/admin/leads' },
    { text: 'Search & Marketplace Listings', icon: <SearchIcon />, active: currentPath === '/admin/listings', path: '/admin/listings' },
    { text: 'Booking & Transaction Flow', icon: <BookOnlineIcon />, active: currentPath === '/admin/bookings', path: '/admin/bookings' },
    { text: 'Realtime Chat & Inquiry', icon: <ChatIcon />, active: currentPath === '/admin/chat', path: '/admin/chat' },
    { text: 'Payment & Commission Tracking', icon: <PaymentIcon />, active: currentPath === '/admin/payments', path: '/admin/payments' },
    { text: 'Reports & Dashboard', icon: <BarChartIcon />, active: currentPath === '/admin/reports', path: '/admin/reports' },
    { text: 'User Management & Roles', icon: <SecurityIcon />, active: currentPath === '/admin/users', path: '/admin/users' },
    { text: 'Source Tracking (UTM/Marketing)', icon: <CampaignIcon />, active: currentPath === '/admin/tracking', path: '/admin/tracking' },
    { text: 'Document Upload / Legal', icon: <UploadFileIcon />, active: currentPath === '/admin/documents', path: '/admin/documents' },
  ];
  
  // Get current feature based on path
  const currentFeature = menuItems.find(item => item.active) || menuItems[0];
  
  const recentActivities = [
    { text: 'John Doe added a new property', time: '5 mins ago' },
    { text: 'New user registration: Sarah Smith', time: '10 mins ago' },
    { text: 'Transaction #1234 completed', time: '15 mins ago' },
    { text: 'Property #5678 updated by Agent Mike', time: '20 mins ago' },
    { text: 'New support ticket #9012 opened', time: '25 mins ago' },
  ];
  
  const stats = [
    { title: 'Total Users', value: '5,240', color: theme.palette.primary.main },
    { title: 'Total Properties', value: '12,180', color: theme.palette.success.main },
    { title: 'Total Transactions', value: '1,845', color: theme.palette.info.main },
    { title: 'Revenue', value: '$2.4M', color: theme.palette.warning.main },
  ];
  
  if (loading) {
    return (
      <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ mb: 3 }}>Loading Admin Dashboard</Typography>
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
            IONEXUS Admin Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
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
            {adminInfo?.avatar ? (
              <Avatar src={adminInfo.avatar} alt={adminInfo.name} />
            ) : (
              <Avatar>{adminInfo?.name?.charAt(0)}</Avatar>
            )}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
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
            <Box sx={{ px: 2, py: 1 }}>
              <Typography variant="subtitle1">{adminInfo?.name}</Typography>
              <Typography variant="body2" color="text.secondary">{adminInfo?.role}</Typography>
              <Typography variant="caption" color="text.secondary">{adminInfo?.email}</Typography>
            </Box>
            <Divider />
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBarStyled>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={isMobile ? "temporary" : "persistent"}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 2 }}>
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
        {currentPath === '/admin' ? (
          // Dashboard content
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                Admin Dashboard
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Welcome back, {adminInfo?.name}! Here's what's happening today.
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

            {/* Admin Features */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Admin Features
              </Typography>
              <Grid container spacing={3}>
                {menuItems.slice(1).map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <FeatureCard elevation={1}>
                      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
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
                        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2, flexGrow: 1 }}>
                          Manage {item.text.toLowerCase()} features and settings.
                        </Typography>
                        <Button 
                          variant="outlined" 
                          color="primary" 
                          fullWidth
                          component={Link}
                          to={item.path}
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
              
              {/* Charts */}
              <Grid item xs={12} md={6}>
                <ChartCard elevation={1}>
                  <Typography variant="h6" gutterBottom>User Growth</Typography>
                  <Box sx={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Chart visualization would be displayed here
                    </Typography>
                  </Box>
                </ChartCard>
              </Grid>
            </Grid>
          </>
        ) : currentPath === '/admin/reports' ? (
          // Reports & Dashboard content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading Reports & Dashboard...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <ReportsDashboard />
          </Suspense>
        ) : currentPath === '/admin/bookings' ? (
          // Booking & Transaction Flow content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading Booking & Transaction Flow...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <BookingTransactionFlow />
          </Suspense>
        ) : currentPath === '/admin/projects' ? (
          // Project Management content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading Project Management...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <ProjectManagement />
          </Suspense>
        ) : currentPath === '/admin/leads' ? (
          // Lead & Customer Management content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading Lead & Customer Management...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <LeadCustomerManagement />
          </Suspense>
        ) : currentPath === '/admin/payments' ? (
          // Payment & Commission Tracking content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading Payment & Commission Tracking...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <PaymentCommissionTracking />
          </Suspense>
        ) : currentPath === '/admin/listings' ? (
          // Search & Marketplace Listings content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading Search & Marketplace Listings...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <SearchMarketplaceListings />
          </Suspense>
        ) : currentPath === '/admin/users' ? (
          // User Management & Roles content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading User Management & Roles...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <UserManagementRoles />
          </Suspense>
        ) : currentPath === '/admin/chat' ? (
          // Realtime Chat & Inquiry content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading Realtime Chat & Inquiry...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <RealtimeChatInquiry />
          </Suspense>
        ) : currentPath === '/admin/tracking' ? (
          // Source Tracking content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading Source Tracking...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <SourceTracking />
          </Suspense>
        ) : currentPath === '/admin/documents' ? (
          // Document Upload / Legal content
          <Suspense fallback={
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Loading Document Upload / Legal...</Typography>
              <Box sx={{ width: '50%', maxWidth: 400 }}>
                <LinearProgress />
              </Box>
            </Box>
          }>
            <DocumentUploadLegal />
          </Suspense>
        ) : (
          // Other feature-specific content
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                {currentFeature.text}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage all aspects of {currentFeature.text.toLowerCase()}.
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
                  {currentFeature.text} Module
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center" sx={{ maxWidth: 600, mb: 4 }}>
                  This module is currently under development. Please check back soon for updates.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  component={Link}
                  to="/admin"
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

export default AdminPage;
