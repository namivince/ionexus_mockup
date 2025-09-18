import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  LinearProgress,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentIcon from '@mui/icons-material/Payment';
import DescriptionIcon from '@mui/icons-material/Description';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import CancelIcon from '@mui/icons-material/Cancel';

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.common.white,
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(37, 99, 235, 0.3)',
}));

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const BookingTransactionFlow = () => {
  const [tabValue, setTabValue] = useState(0);

  const stats = [
    { title: 'Active Bookings', value: '156', color: '#3b82f6' },
    { title: 'Pending Transactions', value: '42', color: '#f59e0b' },
    { title: 'Completed Today', value: '28', color: '#10b981' },
    { title: 'Total Revenue', value: '$2.4M', color: '#8b5cf6' },
  ];

  const bookings = [
    { id: 'B-12345', customer: 'John Doe', unit: 'A-1201', date: 'Today', status: 'Confirmed', amount: '$5,000' },
    { id: 'B-12346', customer: 'Jane Smith', unit: 'B-0502', date: 'Yesterday', status: 'Pending', amount: '$3,500' },
    { id: 'B-12347', customer: 'Bob Johnson', unit: 'C-1805', date: '3 days ago', status: 'Converted', amount: '$7,200' },
  ];

  const transactions = [
    { id: 'T-5001', customer: 'Bob Johnson', property: 'C-1805', value: '$450,000', status: 'Completed' },
    { id: 'T-5002', customer: 'Jane Smith', property: 'B-0502', value: '$280,000', status: 'Processing' },
    { id: 'T-5003', customer: 'Tom Wilson', property: 'A-1506', value: '$390,000', status: 'Contracted' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': case 'Completed': return 'success';
      case 'Pending': case 'Processing': return 'warning';
      case 'Converted': case 'Contracted': return 'info';
      case 'Cancelled': return 'error';
      default: return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Confirmed': case 'Completed': return <CheckCircleIcon />;
      case 'Pending': case 'Processing': return <PendingIcon />;
      case 'Cancelled': return <CancelIcon />;
      default: return <PendingIcon />;
    }
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#1f2937' }}>
          Booking & Transaction Flow
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage bookings, transactions, and payment flows efficiently.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatsCard elevation={0}>
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

      {/* Main Content */}
      <Paper sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <Tabs 
          value={tabValue} 
          onChange={(e, v) => setTabValue(v)}
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            '& .MuiTab-root': { 
              fontWeight: 600,
              minHeight: 64,
            }
          }}
        >
          <Tab label="Bookings" icon={<BookOnlineIcon />} iconPosition="start" />
          <Tab label="Transactions" icon={<ReceiptIcon />} iconPosition="start" />
          <Tab label="Payments" icon={<PaymentIcon />} iconPosition="start" />
          <Tab label="Contracts" icon={<DescriptionIcon />} iconPosition="start" />
        </Tabs>

        {/* Bookings Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField size="small" placeholder="Search bookings..." sx={{ minWidth: 200 }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="confirmed">Confirmed</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="converted">Converted</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" sx={{ borderRadius: 2 }}>+ New Booking</Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Booking ID</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Unit</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id} hover>
                    <TableCell sx={{ fontWeight: 500 }}>{booking.id}</TableCell>
                    <TableCell>{booking.customer}</TableCell>
                    <TableCell>{booking.unit}</TableCell>
                    <TableCell>{booking.date}</TableCell>
                    <TableCell>
                      <Chip 
                        icon={getStatusIcon(booking.status)}
                        label={booking.status} 
                        color={getStatusColor(booking.status)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'success.main' }}>{booking.amount}</TableCell>
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
        </TabPanel>

        {/* Transactions Tab */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField size="small" placeholder="Search transactions..." sx={{ minWidth: 200 }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="processing">Processing</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="contracted">Contracted</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" sx={{ borderRadius: 2 }}>+ New Transaction</Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Transaction ID</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Property</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Value</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id} hover>
                    <TableCell sx={{ fontWeight: 500 }}>{transaction.id}</TableCell>
                    <TableCell>{transaction.customer}</TableCell>
                    <TableCell>{transaction.property}</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'primary.main' }}>{transaction.value}</TableCell>
                    <TableCell>
                      <Chip 
                        icon={getStatusIcon(transaction.status)}
                        label={transaction.status} 
                        color={getStatusColor(transaction.status)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
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

          {/* Transaction Progress Example */}
          <Card sx={{ mt: 3, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Transaction Progress: T-5001
              </Typography>
              <Stepper activeStep={4} alternativeLabel sx={{ mt: 2 }}>
                {['Booking', 'Contract', 'Payment', 'Transfer', 'Completion'].map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </CardContent>
          </Card>
        </TabPanel>

        {/* Payments Tab */}
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Payment Schedule
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Upcoming Payments
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={75} 
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
                      75% of scheduled payments completed
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Payment Methods
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {['Bank Transfer', 'Credit Card', 'Cash', 'Check'].map((method, index) => (
                      <Box key={method} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">{method}</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {[45, 30, 15, 10][index]}%
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Contracts Tab */}
        <TabPanel value={tabValue} index={3}>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <DescriptionIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contract Management
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Digital contract creation, signing, and management system.
            </Typography>
            <Button variant="contained" size="large" sx={{ borderRadius: 2 }}>
              Create New Contract
            </Button>
          </Box>
        </TabPanel>
      </Paper>
    </>
  );
};

export default BookingTransactionFlow;
