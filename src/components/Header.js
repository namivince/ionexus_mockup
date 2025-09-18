import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import LoginModal from './LoginModal';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  color: theme.palette.text.primary,
  position: 'sticky',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '24px',
  color: theme.palette.primary.main,
  textDecoration: 'none',
}));

const MainNav = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  alignItems: 'center',
}));

const NavLink = styled(Link)(({ theme, active }) => ({
  fontWeight: 500,
  fontSize: '16px',
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  textDecoration: 'none',
  padding: theme.spacing(1, 0),
  position: 'relative',
  transition: 'color 0.2s',
  '&:hover': {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
  },
  ...(active && {
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '3px',
      backgroundColor: theme.palette.primary.main,
    },
  }),
}));

const UserNav = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
}));

const LoginButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(1, 2),
  fontWeight: 500,
}));

const Header = ({ activeTab }) => {
  const location = useLocation();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  
  const getActiveTab = () => {
    if (activeTab) return activeTab;
    
    switch (location.pathname) {
      case '/':
        return 'Buy';
      case '/rent':
        return 'Rent';
      case '/commercial':
        return 'Commercial';
      case '/new-projects':
        return 'New Projects';
      case '/find-agent':
        return 'Find Agent';
      default:
        return 'Buy';
    }
  };
  
  const currentActiveTab = getActiveTab();
  
  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };
  
  const handleLoginClose = () => {
    setLoginModalOpen(false);
  };
  
  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters 
          sx={{ 
            height: 70,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Logo variant="h6" component={Link} to="/">
            IONEXUS
          </Logo>
          
          <MainNav>
            <NavLink to="/" active={currentActiveTab === 'Buy'}>Buy</NavLink>
            <NavLink to="/rent" active={currentActiveTab === 'Rent'}>Rent</NavLink>
            <NavLink to="/commercial" active={currentActiveTab === 'Commercial'}>Commercial</NavLink>
            <NavLink to="/new-projects" active={currentActiveTab === 'New Projects'}>New Projects</NavLink>
            <NavLink to="/find-agent" active={currentActiveTab === 'Find Agent'}>Find Agent</NavLink>
          </MainNav>

          <UserNav>
            <LoginButton variant="outlined" onClick={handleLoginClick}>
              Login
            </LoginButton>
          </UserNav>
        </Toolbar>
      </Container>
      
      <LoginModal 
        open={loginModalOpen} 
        onClose={handleLoginClose} 
      />
    </StyledAppBar>
  );
};

export default Header;
