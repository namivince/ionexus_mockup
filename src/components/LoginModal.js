import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
  Divider,
  IconButton,
  Stack,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: 12,
    padding: theme.spacing(2),
    minWidth: 400,
  },
}));

const SocialButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(1.5),
  textTransform: 'none',
  fontWeight: 500,
  border: `1px solid ${theme.palette.grey[300]}`,
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
  },
}));

const LoginModal = ({ open, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login/register logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      name: '',
      phone: ''
    });
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {isLogin 
            ? 'Sign in to access your account and saved properties'
            : 'Join IONEXUS to save properties and get personalized recommendations'
          }
        </Typography>

        {/* Social Login Buttons */}
        <Stack spacing={2} sx={{ mb: 3 }}>
          <SocialButton
            fullWidth
            startIcon={<GoogleIcon />}
            variant="outlined"
          >
            Continue with Google
          </SocialButton>
          <SocialButton
            fullWidth
            startIcon={<FacebookIcon />}
            variant="outlined"
          >
            Continue with Facebook
          </SocialButton>
        </Stack>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" color="text.secondary">
            or
          </Typography>
        </Divider>

        {/* Login/Register Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            {!isLogin && (
              <TextField
                fullWidth
                label="Full Name"
                value={formData.name}
                onChange={handleInputChange('name')}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
            )}
            
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
            
            {!isLogin && (
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
            )}
            
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleInputChange('password')}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />

            {isLogin && (
              <Box display="flex" justifyContent="flex-end">
                <Link
                  href="#"
                  variant="body2"
                  sx={{ 
                    color: '#1A237E',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#1A237E',
                color: '#FFFFFF !important',
                borderRadius: 2,
                py: 1.5,
                fontSize: '16px',
                fontWeight: 600,
                mt: 2,
                '&:hover': {
                  backgroundColor: '#0f1654',
                  color: '#FFFFFF !important'
                },
              }}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </Stack>
        </Box>

        {/* Toggle Login/Register */}
        <Box display="flex" justifyContent="center" mt={3}>
          <Typography variant="body2" color="text.secondary">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link
              component="button"
              type="button"
              onClick={toggleMode}
              sx={{
                color: '#1A237E',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </Link>
          </Typography>
        </Box>

        {!isLogin && (
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center', mt: 2 }}>
            By creating an account, you agree to our{' '}
            <Link href="#" sx={{ color: '#1A237E' }}>Terms of Service</Link>
            {' '}and{' '}
            <Link href="#" sx={{ color: '#1A237E' }}>Privacy Policy</Link>
          </Typography>
        )}
      </DialogContent>
    </StyledDialog>
  );
};

export default LoginModal;
