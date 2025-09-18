import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';

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

const NavLink = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '16px',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  padding: theme.spacing(1, 0),
  position: 'relative',
  transition: 'color 0.2s',
  '&:hover': {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
  },
  '&.active': {
    color: theme.palette.primary.main,
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '3px',
      backgroundColor: theme.palette.primary.main,
    },
  },
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

const Header = () => {
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
          <Logo variant="h6" component="a" href="/">
            IONEXUS
          </Logo>
          
          <MainNav>
            <NavLink href="/" className="active">Buy</NavLink>
            <NavLink href="/rent">Rent</NavLink>
            <NavLink href="/commercial">Commercial</NavLink>
            <NavLink href="/new-projects">New Projects</NavLink>
            <NavLink href="/find-agent">Find Agent</NavLink>
          </MainNav>

          <UserNav>
            
            <LoginButton variant="outlined">
              Login
            </LoginButton>
          </UserNav>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
