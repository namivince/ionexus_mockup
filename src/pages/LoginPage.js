import React, { useState, useRef } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  Link as MuiLink,
  Paper,
  IconButton,
  InputAdornment,
  Stack
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Header from '../components/Header';

/* ================= Styled ================= */

const FormContainer = styled(Paper)(({ theme }) => ({
  maxWidth: 520,
  width: '100%',
  margin: '72px auto',
  padding: theme.spacing(4),
  borderRadius: 16,
  backgroundColor: theme.palette.background.paper,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 14px 40px rgba(0,0,0,.45)'
      : '0 20px 40px -12px rgba(16,24,40,.18)',
  border: `1px solid ${alpha(theme.palette.grey[400], theme.palette.mode === 'dark' ? 0.15 : 0.25)}`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    margin: '40px auto',
    width: '92%',
  },
}));

/* Role bar: horizontal scroll + snap */
const RoleBarShell = styled('div')(({ theme }) => ({
  margin: theme.spacing(-1),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(1),
  position: 'relative',
  WebkitMaskImage:
    'linear-gradient(90deg, transparent 0, #000 24px, #000 calc(100% - 24px), transparent 100%)',
  maskImage:
    'linear-gradient(90deg, transparent 0, #000 24px, #000 calc(100% - 24px), transparent 100%)',
  borderBottom: `1px solid ${alpha(theme.palette.divider, .8)}`
}));

const RoleTrack = styled('div')(() => ({
  display: 'flex',
  gap: 8,
  overflowX: 'auto',
  overscrollBehaviorX: 'contain',
  scrollSnapType: 'x mandatory',
  padding: '0 16px 8px 16px',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': { display: 'none' },
}));

const RoleButton = styled('button')(({ theme }) => ({
  scrollSnapAlign: 'start',
  appearance: 'none',
  border: `1px solid ${alpha(theme.palette.grey[400], theme.palette.mode === 'dark' ? .25 : .5)}`,
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: 999,
  height: 40,
  padding: '0 16px',
  fontSize: 14,
  fontWeight: 700,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  transition: 'background-color .2s ease, box-shadow .2s ease, border-color .2s ease',
  '&:hover': { backgroundColor: theme.palette.action.hover },
  '&[data-active="true"]': {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderColor: theme.palette.primary.main,
    boxShadow: `0 8px 18px ${alpha(theme.palette.primary.main, .25)}`
  },
  '&:focus-visible': {
    outline: 'none',
    boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, .28)}`
  }
}));

/* Social buttons */
const SocialRow = styled(Stack)(() => ({ width: '100%' }));

const GoogleButton = styled(Button)(({ theme }) => ({
  height: 48,
  borderRadius: 12,
  textTransform: 'none',
  fontWeight: 700,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[300]}`,
  '&:hover': { backgroundColor: theme.palette.grey[50] },
}));

const FacebookButton = styled(Button)(() => ({
  height: 48,
  borderRadius: 12,
  textTransform: 'none',
  fontWeight: 700,
  color: '#fff',
  backgroundColor: '#1877F2',
  '&:hover': { backgroundColor: '#145dbf' },
}));

/* Google G multicolor SVG */
const GoogleG = (props) => (
  <svg width="18" height="18" viewBox="0 0 48 48" {...props}>
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 31.9 29.2 35 24 35c-7 0-12.8-5.7-12.8-12.8S17 9.5 24 9.5c3.2 0 6.1 1.2 8.3 3.2l5.7-5.7C34.3 3.9 29.4 2 24 2 12.3 2 2.9 11.4 2.9 23.2S12.3 44.5 24 44.5c11.4 0 20.6-8.3 20.6-21.3 0-1.6-.2-2.8-.5-4.7z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.2 0 6.1 1.2 8.3 3.2l5.7-5.7C34.3 3.9 29.4 2 24 2 15.1 2 7.3 7.1 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44.5c5.1 0 10-1.9 13.6-5.3l-6.3-5.2c-2 1.4-4.7 2.3-7.3 2.3-5.2 0-9.6-3.3-11.1-7.9l-6.6 5.1c2.2 6.7 8.6 11 17.7 11z"/>
    <path fill="#1976D2" d="M44.6 24.1c0-1.6-.2-2.8-.5-4.7H24v8h11.3c-.5 2.7-2 4.9-4.1 6.5l6.3 5.2c3.7-3.4 6.1-8.5 6.1-15z"/>
  </svg>
);

/* Facebook f white SVG */
const FacebookF = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <path fill="#fff" d="M13.5 21v-7.5h2.5l.5-3h-3v-2c0-.9.3-1.5 1.6-1.5H16V3.2c-.3 0-1.2-.2-2.2-.2-2.2 0-3.8 1.3-3.8 3.9V7.5H8v3h2v7.5h3.5z"/>
  </svg>
);

/* ================= Component ================= */

const ROLES = ['Developer', 'Sale', 'Partner', 'End-user / Investor', 'Admin'];

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState('Sale'); // default để thấy rõ đang chọn
  const trackRef = useRef(null);

  const handleRoleClick = (role) => setUserType(role);

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'This field is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Please enter a valid email address';
    if (!formData.password) newErrors.password = 'This field is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 900));
      
      // Check if user is trying to login as admin
      if (userType === 'Admin') {
        // Check if credentials match admin account
        if (formData.email === 'superadmin@ionexus.com' && formData.password === '123456') {
          // Store admin info in localStorage for persistence
          localStorage.setItem('userAuth', JSON.stringify({
            isAuthenticated: true,
            userRole: 'admin',
            userEmail: formData.email,
            timestamp: new Date().getTime()
          }));
          
          // Redirect to admin page
          console.log('Admin login successful, redirecting to admin dashboard');
          window.location.href = '/admin'; // Force full page reload
          return;
        }
      }
      
      // Check if user is trying to login as developer
      if (userType === 'Developer') {
        // Check if credentials match developer account
        if (formData.email === 'developer@ionexus.com' && formData.password === '123456') {
          // Store developer info in localStorage for persistence
          localStorage.setItem('userAuth', JSON.stringify({
            isAuthenticated: true,
            userRole: 'developer',
            userEmail: formData.email,
            timestamp: new Date().getTime()
          }));
          
          // Redirect to developer page
          console.log('Developer login successful, redirecting to developer dashboard');
          window.location.href = '/developer'; // Force full page reload
          return;
        }
      }
      
      // Check if user is trying to login as sale
      if (userType === 'Sale') {
        // Check if credentials match sale account
        if (formData.email === 'sale@ionexus.com' && formData.password === '123456') {
          // Store sale info in localStorage for persistence
          localStorage.setItem('userAuth', JSON.stringify({
            isAuthenticated: true,
            userRole: 'sale',
            userEmail: formData.email,
            timestamp: new Date().getTime()
          }));
          
          // Redirect to sale page
          console.log('Sale login successful, redirecting to sale dashboard');
          window.location.href = '/sale'; // Force full page reload
          return;
        }
      }
      
      // Check if user is trying to login as partner
      if (userType === 'Partner') {
        // Check if credentials match partner account
        if (formData.email === 'partner@ionexus.com' && formData.password === '123456') {
          // Store partner info in localStorage for persistence
          localStorage.setItem('userAuth', JSON.stringify({
            isAuthenticated: true,
            userRole: 'partner',
            userEmail: formData.email,
            timestamp: new Date().getTime()
          }));
          
          // Redirect to partner page
          console.log('Partner login successful, redirecting to partner dashboard');
          window.location.href = '/partner'; // Force full page reload
          return;
        }
      }
      
      // Check if user is trying to login as end-user / investor
      if (userType === 'End-user / Investor') {
        // Check if credentials match investor account
        if (formData.email === 'investor@ionexus.com' && formData.password === '123456') {
          // Store investor info in localStorage for persistence
          localStorage.setItem('userAuth', JSON.stringify({
            isAuthenticated: true,
            userRole: 'investor',
            userEmail: formData.email,
            timestamp: new Date().getTime()
          }));
          
          // Redirect to investor page
          console.log('Investor login successful, redirecting to investor dashboard');
          window.location.href = '/investor'; // Force full page reload
          return;
        }
      }
      
      // For other roles or invalid admin credentials
      navigate(`/?role=${encodeURIComponent(userType)}`);
    } catch (e) {
      setErrors({ ...errors, form: 'Invalid email/username or password' });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => setShowPassword((v) => !v);

  return (
    <>
      <Header />
      <Container>
        <FormContainer elevation={0}>
          {/* ROLE BAR – trên tiêu đề, kéo ngang */}
          <RoleBarShell>
            <RoleTrack ref={trackRef} aria-label="Select role">
              {ROLES.map((role) => (
                <RoleButton
                  key={role}
                  type="button"
                  data-active={userType === role}
                  onClick={() => handleRoleClick(role)}
                >
                  {role}
                </RoleButton>
              ))}
            </RoleTrack>
            {userType === 'Admin' && (
              <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'var(--muted)', mt: 1 }}>
                Đăng nhập với email superadmin@ionexus.com
              </Typography>
            )}
            {userType === 'Developer' && (
              <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'var(--muted)', mt: 1 }}>
                Đăng nhập với email developer@ionexus.com
              </Typography>
            )}
            {userType === 'Sale' && (
              <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'var(--muted)', mt: 1 }}>
                Đăng nhập với email sale@ionexus.com
              </Typography>
            )}
            {userType === 'Partner' && (
              <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'var(--muted)', mt: 1 }}>
                Đăng nhập với email partner@ionexus.com
              </Typography>
            )}
            {userType === 'End-user / Investor' && (
              <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'var(--muted)', mt: 1 }}>
                Đăng nhập với email investor@ionexus.com
              </Typography>
            )}
          </RoleBarShell>

          {/* Title */}
          <Typography variant="h5" fontWeight={800} gutterBottom>
            Log in to your account
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Welcome back! Please enter your details
          </Typography>

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={2.5}>
              <TextField
                fullWidth
                label="Email or username"
                value={formData.email}
                onChange={handleInputChange('email')}
                error={!!errors.email}
                helperText={errors.email}
                placeholder="your.email@example.com"
                InputProps={{ sx: { borderRadius: 12 } }}
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange('password')}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  sx: { borderRadius: 12 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword} edge="end" aria-label="toggle password visibility">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box display="flex" justifyContent="space-between" alignItems="center">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      sx={{ '&.Mui-checked': { color: 'primary.main' } }}
                />
                  }
                  label="Remember me"
                />
                <MuiLink
                  component={Link}
                  to="/reset-password"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    fontWeight: 700,
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Forgot password?
                </MuiLink>
              </Box>

              {errors.form && (
                <Typography color="error" variant="body2">
                  {errors.form}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading}
                sx={{
                  height: 48,
                  borderRadius: 999,
                  fontWeight: 800,
                  textTransform: 'none',
                  boxShadow: (theme) => `0 10px 18px ${alpha(theme.palette.primary.main, .28)}`,
                  '&:hover': {
                    boxShadow: (theme) => `0 8px 16px ${alpha(theme.palette.primary.main, .35)}`,
                  },
                }}
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </Button>
            </Stack>
          </Box>

          {/* Divider */}
          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Or continue with
            </Typography>
          </Divider>

          {/* Social Buttons */}
          <SocialRow direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 1 }}>
            <GoogleButton fullWidth startIcon={<GoogleG />}>
              Google
            </GoogleButton>
            <FacebookButton fullWidth startIcon={<FacebookF />}>
              Continue with Facebook
            </FacebookButton>
          </SocialRow>

          <Box display="flex" justifyContent="center" mt={1}>
            <Typography variant="body2" color="text.secondary">
              Don&apos;t have an account?{' '}
              <MuiLink
                component={Link}
                to="/signup"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 800,
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Sign up
              </MuiLink>
            </Typography>
          </Box>
        </FormContainer>
      </Container>
    </>
  );
};

export default LoginPage;
