import React, { useState, useEffect, lazy, Suspense } from 'react';
import { 
  Box, 
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
  LinearProgress,
  Button
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import ChatIcon from '@mui/icons-material/Chat';
import PaymentIcon from '@mui/icons-material/Payment';
import BarChartIcon from '@mui/icons-material/BarChart';
import SecurityIcon from '@mui/icons-material/Security';
import CampaignIcon from '@mui/icons-material/Campaign';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// Lazy load admin feature components (reuse for both admin and developer)
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

const DashboardPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [open, setOpen] = useState(!isMobile);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Get user info from localStorage
    const authData = localStorage.getItem('userAuth');
    if (authData) {
      const parsedAuth = JSON.parse(authData);
      setUserRole(parsedAuth.userRole);
      
      // Set user info based on role
      if (parsedAuth.userRole === 'admin') {
        setUserInfo({
          name: 'Super Admin',
          email: parsedAuth.userEmail,
          role: 'Administrator',
          avatar: '/api/placeholder/40/40'
        });
      } else if (parsedAuth.userRole === 'developer') {
        setUserInfo({
          name: 'John Developer',
          email: parsedAuth.userEmail,
          role: 'Developer',
          avatar: '/api/placeholder/40/40'
        });
      } else if (parsedAuth.userRole === 'sale') {
        setUserInfo({
          name: 'Sarah Sales',
          email: parsedAuth.userEmail,
          role: 'Sales Manager',
          avatar: '/api/placeholder/40/40'
        });
      } else if (parsedAuth.userRole === 'partner') {
        setUserInfo({
          name: 'Mike Partner',
          email: parsedAuth.userEmail,
          role: 'Business Partner',
          avatar: '/api/placeholder/40/40'
        });
      } else if (parsedAuth.userRole === 'investor') {
        setUserInfo({
          name: 'David Investor',
          email: parsedAuth.userEmail,
          role: 'End-user / Investor',
          avatar: '/api/placeholder/40/40'
        });
      }
    } else {
      // Redirect to login if no auth
      navigate('/login');
      return;
    }
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [navigate]);

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
    // Clear authentication
    localStorage.removeItem('userAuth');
    // Redirect to login page
    window.location.href = '/login';
  };

  // Get current path to determine active menu item
  const currentPath = location.pathname;
  
  // Define menu items based on user role
  const getMenuItems = () => {
    let basePath;
    switch (userRole) {
      case 'admin': basePath = '/admin'; break;
      case 'developer': basePath = '/developer'; break;
      case 'sale': basePath = '/sale'; break;
      case 'partner': basePath = '/partner'; break;
      case 'investor': basePath = '/investor'; break;
      default: basePath = '/admin';
    }
    
    if (userRole === 'admin') {
      return [
        { text: 'Dashboard', icon: <DashboardIcon />, active: currentPath === basePath, path: basePath },
        { text: 'Project Management', icon: <BusinessIcon />, active: currentPath === `${basePath}/projects`, path: `${basePath}/projects` },
        { text: 'Lead & Customer Management', icon: <PeopleIcon />, active: currentPath === `${basePath}/leads`, path: `${basePath}/leads` },
        { text: 'Search & Marketplace Listings', icon: <SearchIcon />, active: currentPath === `${basePath}/listings`, path: `${basePath}/listings` },
        { text: 'Booking & Transaction Flow', icon: <BookIcon />, active: currentPath === `${basePath}/bookings`, path: `${basePath}/bookings` },
        { text: 'Realtime Chat & Inquiry', icon: <ChatIcon />, active: currentPath === `${basePath}/chat`, path: `${basePath}/chat` },
        { text: 'Payment & Commission Tracking', icon: <PaymentIcon />, active: currentPath === `${basePath}/payments`, path: `${basePath}/payments` },
        { text: 'Reports & Dashboard', icon: <BarChartIcon />, active: currentPath === `${basePath}/reports`, path: `${basePath}/reports` },
        { text: 'User Management & Roles', icon: <SecurityIcon />, active: currentPath === `${basePath}/users`, path: `${basePath}/users` },
        { text: 'Source Tracking (UTM/Marketing)', icon: <CampaignIcon />, active: currentPath === `${basePath}/tracking`, path: `${basePath}/tracking` },
        { text: 'Document Upload / Legal', icon: <UploadFileIcon />, active: currentPath === `${basePath}/documents`, path: `${basePath}/documents` },
      ];
    } else if (userRole === 'developer') {
      return [
        { text: 'Dashboard', icon: <DashboardIcon />, active: currentPath === basePath, path: basePath },
        { text: 'Project Management', icon: <BusinessIcon />, active: currentPath === `${basePath}/projects`, path: `${basePath}/projects` },
        { text: 'Document Upload / Legal', icon: <UploadFileIcon />, active: currentPath === `${basePath}/documents`, path: `${basePath}/documents` },
      ];
    } else if (userRole === 'sale' || userRole === 'partner') {
      return [
        { text: 'Dashboard', icon: <DashboardIcon />, active: currentPath === basePath, path: basePath },
        { text: 'Project Management', icon: <BusinessIcon />, active: currentPath === `${basePath}/projects`, path: `${basePath}/projects` },
        { text: 'Lead & Customer Management', icon: <PeopleIcon />, active: currentPath === `${basePath}/leads`, path: `${basePath}/leads` },
        { text: 'Search & Marketplace Listings', icon: <SearchIcon />, active: currentPath === `${basePath}/listings`, path: `${basePath}/listings` },
        { text: 'Booking & Transaction Flow', icon: <BookIcon />, active: currentPath === `${basePath}/bookings`, path: `${basePath}/bookings` },
        { text: 'Realtime Chat & Inquiry', icon: <ChatIcon />, active: currentPath === `${basePath}/chat`, path: `${basePath}/chat` },
        { text: 'Payment & Commission Tracking', icon: <PaymentIcon />, active: currentPath === `${basePath}/payments`, path: `${basePath}/payments` },
        { text: 'Reports & Dashboard', icon: <BarChartIcon />, active: currentPath === `${basePath}/reports`, path: `${basePath}/reports` },
        { text: 'Document Upload / Legal', icon: <UploadFileIcon />, active: currentPath === `${basePath}/documents`, path: `${basePath}/documents` },
      ];
    } else if (userRole === 'investor') {
      return [
        { text: 'Dashboard', icon: <DashboardIcon />, active: currentPath === basePath, path: basePath },
        { text: 'Lead & Customer Management', icon: <PeopleIcon />, active: currentPath === `${basePath}/leads`, path: `${basePath}/leads` },
        { text: 'Search & Marketplace Listings', icon: <SearchIcon />, active: currentPath === `${basePath}/listings`, path: `${basePath}/listings` },
        { text: 'Booking & Transaction Flow', icon: <BookIcon />, active: currentPath === `${basePath}/bookings`, path: `${basePath}/bookings` },
        { text: 'Realtime Chat & Inquiry', icon: <ChatIcon />, active: currentPath === `${basePath}/chat`, path: `${basePath}/chat` },
        { text: 'Payment & Commission Tracking', icon: <PaymentIcon />, active: currentPath === `${basePath}/payments`, path: `${basePath}/payments` },
        { text: 'Reports & Dashboard', icon: <BarChartIcon />, active: currentPath === `${basePath}/reports`, path: `${basePath}/reports` },
        { text: 'User Management & Roles', icon: <SecurityIcon />, active: currentPath === `${basePath}/users`, path: `${basePath}/users` },
        { text: 'Document Upload / Legal', icon: <UploadFileIcon />, active: currentPath === `${basePath}/documents`, path: `${basePath}/documents` },
      ];
    }
    return [];
  };

  const menuItems = getMenuItems();
  
  // Get current feature based on path
  const currentFeature = menuItems.find(item => item.active) || menuItems[0];

  const getStatsByRole = (role) => {
    switch (role) {
      case 'admin':
        return [
          { title: 'Total Projects', value: '24', color: '#8b5cf6' },
          { title: 'Active Leads', value: '1,248', color: '#10b981' },
          { title: 'Monthly Revenue', value: '$2.4M', color: '#f59e0b' },
          { title: 'Conversion Rate', value: '3.8%', color: '#ef4444' },
        ];
      case 'developer':
        return [
          { title: 'Active Projects', value: '8', color: '#1e40af' },
          { title: 'Total Units', value: '1,245', color: '#059669' },
          { title: 'Completed Units', value: '856', color: '#d97706' },
          { title: 'Documents', value: '342', color: '#dc2626' },
        ];
      case 'sale':
        return [
          { title: 'My Leads', value: '156', color: '#059669' },
          { title: 'Closed Deals', value: '42', color: '#10b981' },
          { title: 'Monthly Commission', value: '$18.5K', color: '#f59e0b' },
          { title: 'Conversion Rate', value: '26.9%', color: '#ef4444' },
        ];
      case 'partner':
        return [
          { title: 'Partner Projects', value: '12', color: '#d97706' },
          { title: 'Referral Leads', value: '89', color: '#059669' },
          { title: 'Partner Revenue', value: '$125K', color: '#f59e0b' },
          { title: 'Success Rate', value: '31.5%', color: '#ef4444' },
        ];
      case 'investor':
        return [
          { title: 'My Investments', value: '6', color: '#0f172a' },
          { title: 'Portfolio Value', value: '$2.8M', color: '#059669' },
          { title: 'ROI', value: '18.5%', color: '#10b981' },
          { title: 'Active Inquiries', value: '3', color: '#d97706' },
        ];
      default:
        return [];
    }
  };

  const stats = getStatsByRole(userRole);

  if (loading) {
    return (
      <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" sx={{ mb: 3 }}>Loading {userRole?.charAt(0).toUpperCase() + userRole?.slice(1)} Dashboard...</Typography>
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
            IONEXUS {userRole?.charAt(0).toUpperCase() + userRole?.slice(1)} Dashboard
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
              {userInfo?.name?.charAt(0)}
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
        {currentPath === `/admin` || currentPath === `/developer` || currentPath === `/sale` || currentPath === `/partner` || currentPath === `/investor` ? (
          // Dashboard content
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                {userRole?.charAt(0).toUpperCase() + userRole?.slice(1)} Dashboard
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Welcome back, {userInfo?.name}! {
                  userRole === 'admin' ? 'Manage your real estate business operations.' :
                  userRole === 'developer' ? 'Manage your projects and documents.' :
                  userRole === 'sale' ? 'Track your leads, deals, and commission.' :
                  userRole === 'partner' ? 'Manage your partnerships and referrals.' :
                  userRole === 'investor' ? 'Monitor your investments and explore opportunities.' :
                  'Access your dashboard features.'
                }
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

            {/* Quick Access */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Quick Access
              </Typography>
              <Grid container spacing={3}>
                {menuItems.slice(1).map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper sx={{ p: 3, borderRadius: 2, textAlign: 'center', height: '100%' }}>
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
                      <Typography variant="h6" gutterBottom>
                        {item.text}
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        component={Link}
                        to={item.path}
                        sx={{ mt: 2 }}
                      >
                        Access
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        ) : currentPath.includes('/projects') ? (
          // Project Management content (shared component)
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
        ) : currentPath.includes('/documents') ? (
          // Document Upload content (shared component)
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
        ) : currentPath.includes('/leads') && (userRole === 'admin' || userRole === 'sale' || userRole === 'partner' || userRole === 'investor') ? (
          // Lead Management (Admin only)
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
        ) : currentPath.includes('/listings') && (userRole === 'admin' || userRole === 'sale' || userRole === 'partner' || userRole === 'investor') ? (
          // Listings (Admin only)
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
        ) : currentPath.includes('/bookings') && (userRole === 'admin' || userRole === 'sale' || userRole === 'partner' || userRole === 'investor') ? (
          // Bookings (Admin only)
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
        ) : currentPath.includes('/chat') && (userRole === 'admin' || userRole === 'sale' || userRole === 'partner' || userRole === 'investor') ? (
          // Chat (Admin only)
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
        ) : currentPath.includes('/payments') && (userRole === 'admin' || userRole === 'sale' || userRole === 'partner' || userRole === 'investor') ? (
          // Payments (Admin only)
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
        ) : currentPath.includes('/reports') && (userRole === 'admin' || userRole === 'sale' || userRole === 'partner' || userRole === 'investor') ? (
          // Reports (Admin only)
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
        ) : currentPath.includes('/users') && (userRole === 'admin' || userRole === 'investor') ? (
          // User Management (Admin only)
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
        ) : currentPath.includes('/tracking') && userRole === 'admin' ? (
          // Source Tracking (Admin only)
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
        ) : (
          // Default content for unauthorized access
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                Access Denied
              </Typography>
              <Typography variant="body1" color="text.secondary">
                You don't have permission to access this feature.
              </Typography>
            </Box>
            
            <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', py: 8 }}>
                <Typography variant="h5" gutterBottom align="center">
                  Feature Not Available
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center" sx={{ maxWidth: 600, mb: 4 }}>
                  This feature is not available for your current role ({userInfo?.role}).
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  component={Link}
                  to={`/${userRole}`}
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

export default DashboardPage;
