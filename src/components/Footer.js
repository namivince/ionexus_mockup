import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: 'white',
  padding: theme.spacing(7.5, 0, 4, 0),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[400],
  textDecoration: 'none',
  fontSize: '14px',
  transition: 'color 0.2s',
  '&:hover': {
    color: 'white',
    textDecoration: 'none',
  },
}));

const FooterGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

const FooterColumn = styled(Box)(({ theme }) => ({
  '& h3': {
    fontSize: '18px',
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    color: 'white',
  },
}));

const FooterLinks = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  '& li': {
    marginBottom: theme.spacing(1),
  },
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[800]}`,
  paddingTop: theme.spacing(2.5),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.palette.grey[500],
  fontSize: '14px',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));


const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <FooterGrid>
          <FooterColumn>
            <Typography component="h3">IONEXUS</Typography>
            <FooterLinks>
              <li><FooterLink href="#">Buy</FooterLink></li>
              <li><FooterLink href="#">Rent</FooterLink></li>
              <li><FooterLink href="#">Commercial</FooterLink></li>
              <li><FooterLink href="#">New Projects</FooterLink></li>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <Typography component="h3">About</Typography>
            <FooterLinks>
              <li><FooterLink href="#">About Us</FooterLink></li>
              <li><FooterLink href="#">Contact Us</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
              <li><FooterLink href="#">Terms & Conditions</FooterLink></li>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <Typography component="h3">Contact</Typography>
            <FooterLinks>
              <li><FooterLink href="#">Email: info@ionexus.com</FooterLink></li>
              <li><FooterLink href="#">Phone: +971 4 123 4567</FooterLink></li>
              <li><FooterLink href="#">Address: Dubai, UAE</FooterLink></li>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <Typography component="h3">Follow Us</Typography>
            <SocialLinks>
              <FooterLink href="#" aria-label="Facebook">
                <FacebookIcon />
              </FooterLink>
              <FooterLink href="#" aria-label="Twitter">
                <TwitterIcon />
              </FooterLink>
              <FooterLink href="#" aria-label="Instagram">
                <InstagramIcon />
              </FooterLink>
              <FooterLink href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </FooterLink>
            </SocialLinks>
          </FooterColumn>
        </FooterGrid>
        
        <FooterBottom>
          <Typography component="div">© 2025 IONEXUS. All rights reserved.</Typography>
          <Box>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <Typography component="span" sx={{ mx: 1 }}>|</Typography>
            <FooterLink href="#">Terms of Service</FooterLink>
          </Box>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
