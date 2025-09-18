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
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReceiptIcon from '@mui/icons-material/Receipt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PrintIcon from '@mui/icons-material/Print';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import CancelIcon from '@mui/icons-material/Cancel';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: `linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,
  color: theme.palette.common.white,
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(245, 158, 11, 0.3)',
}));

const PaymentCard = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  },
}));

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const PaymentCommissionTracking = () => {
  const [tabValue, setTabValue] = useState(0);

  const stats = [
    { title: 'Total Revenue', value: '$4.85M', change: '+18%', color: '#f59e0b' },
    { title: 'Commissions Paid', value: '$145.2K', change: '+12%', color: '#10b981' },
    { title: 'Collection Rate', value: '92.5%', change: '+2.5%', color: '#3b82f6' },
    { title: 'Pending Payments', value: '$28.4K', change: '-8%', color: '#ef4444' },
  ];

  const payments = [
    { 
      id: 'P-10001', 
      transaction: 'T-5001', 
      customer: 'Bob Johnson', 
      amount: '$45,000', 
      method: 'Bank Transfer',
      date: 'Mar 10, 2023',
      status: 'Confirmed' 
    },
    { 
      id: 'P-10002', 
      transaction: 'T-5002', 
      customer: 'Jane Smith', 
      amount: '$28,000', 
      method: 'Credit Card',
      date: 'Mar 12, 2023',
      status: 'Pending' 
    },
    { 
      id: 'P-10003', 
      transaction: 'T-5003', 
      customer: 'Tom Wilson', 
      amount: '$39,000', 
      method: 'Cash',
      date: 'Mar 15, 2023',
      status: 'Confirmed' 
    },
  ];

  const commissions = [
    {
      id: 'C-2001',
      agent: 'David Agent',
      transaction: 'T-5001',
      amount: '$13,500',
      rate: '3%',
      status: 'Paid',
      date: 'Apr 26, 2023'
    },
    {
      id: 'C-2002',
      agent: 'Sarah Agent',
      transaction: 'T-5002',
      amount: '$8,400',
      rate: '3%',
      status: 'Approved',
      date: 'Apr 28, 2023'
    },
    {
      id: 'C-2003',
      agent: 'Mike Agent',
      transaction: 'T-5003',
      amount: '$11,700',
      rate: '3%',
      status: 'Pending',
      date: 'May 01, 2023'
    },
  ];

  const paymentSchedule = [
    { transaction: 'T-5002', customer: 'Jane Smith', installment: '1st', amount: '$28,000', dueDate: 'Tomorrow', status: 'Due' },
    { transaction: 'T-5003', customer: 'Tom Wilson', installment: '2nd', amount: '$39,000', dueDate: 'Next week', status: 'Upcoming' },
    { transaction: 'T-5005', customer: 'John Doe', installment: '1st', amount: '$32,000', dueDate: 'Overdue', status: 'Overdue' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': case 'Paid': return 'success';
      case 'Pending': case 'Approved': return 'warning';
      case 'Rejected': case 'Overdue': return 'error';
      case 'Due': return 'info';
      case 'Upcoming': return 'default';
      default: return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Confirmed': case 'Paid': return <CheckCircleIcon />;
      case 'Pending': case 'Approved': case 'Due': return <PendingIcon />;
      case 'Rejected': case 'Overdue': return <CancelIcon />;
      default: return <PendingIcon />;
    }
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#1f2937' }}>
          Payment & Commission Tracking
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage payments, commissions, and financial tracking.
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
              <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
                {stat.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.8,
                  color: stat.change.startsWith('+') ? '#dcfce7' : '#fef3c7'
                }}
              >
                {stat.change} MoM
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
          <Tab label="Payments" icon={<PaymentIcon />} iconPosition="start" />
          <Tab label="Payment Schedule" icon={<ReceiptIcon />} iconPosition="start" />
          <Tab label="Commissions" icon={<MonetizationOnIcon />} iconPosition="start" />
          <Tab label="Analytics" icon={<TrendingUpIcon />} iconPosition="start" />
        </Tabs>

        {/* Payments Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField size="small" placeholder="Search payments..." sx={{ minWidth: 200 }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="confirmed">Confirmed</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="rejected">Rejected</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Method</InputLabel>
              <Select label="Method" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="bank">Bank Transfer</MenuItem>
                <MenuItem value="card">Credit Card</MenuItem>
                <MenuItem value="cash">Cash</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained" 
              startIcon={<PaymentIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                boxShadow: '0 4px 20px rgba(245, 158, 11, 0.3)'
              }}
            >
              New Payment
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Payment ID</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Transaction</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Method</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id} hover>
                    <TableCell sx={{ fontWeight: 500 }}>{payment.id}</TableCell>
                    <TableCell>{payment.transaction}</TableCell>
                    <TableCell>{payment.customer}</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'success.main' }}>{payment.amount}</TableCell>
                    <TableCell>{payment.method}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>
                      <Chip 
                        icon={getStatusIcon(payment.status)}
                        label={payment.status} 
                        color={getStatusColor(payment.status)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <PrintIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        {/* Payment Schedule Tab */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Transaction</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Installment</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Due Date</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paymentSchedule.map((schedule, index) => (
                      <TableRow key={index} hover>
                        <TableCell sx={{ fontWeight: 500 }}>{schedule.transaction}</TableCell>
                        <TableCell>{schedule.customer}</TableCell>
                        <TableCell>{schedule.installment}</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: 'primary.main' }}>{schedule.amount}</TableCell>
                        <TableCell>{schedule.dueDate}</TableCell>
                        <TableCell>
                          <Chip 
                            label={schedule.status} 
                            color={getStatusColor(schedule.status)}
                            size="small"
                            sx={{ fontWeight: 500 }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Upcoming Payments
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Payment Progress
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
          </Grid>
        </TabPanel>

        {/* Commissions Tab */}
        <TabPanel value={tabValue} index={2}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField size="small" placeholder="Search commissions..." sx={{ minWidth: 200 }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="paid">Paid</MenuItem>
                <MenuItem value="approved">Approved</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Agent</InputLabel>
              <Select label="Agent" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="david">David Agent</MenuItem>
                <MenuItem value="sarah">Sarah Agent</MenuItem>
                <MenuItem value="mike">Mike Agent</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained" 
              startIcon={<MonetizationOnIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
              }}
            >
              Calculate Commission
            </Button>
          </Box>

          <Grid container spacing={3}>
            {commissions.map((commission) => (
              <Grid item xs={12} md={6} lg={4} key={commission.id}>
                <PaymentCard>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        {commission.agent.charAt(0)}
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {commission.agent}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {commission.id}
                        </Typography>
                      </Box>
                      <Chip 
                        label={commission.status} 
                        color={getStatusColor(commission.status)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Transaction
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {commission.transaction}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Commission Rate
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {commission.rate}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Amount
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
                          {commission.amount}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                          Date
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {commission.date}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button size="small" variant="outlined" fullWidth>
                        View Details
                      </Button>
                      {commission.status === 'Pending' && (
                        <Button size="small" variant="contained" fullWidth>
                          Approve
                        </Button>
                      )}
                      {commission.status === 'Approved' && (
                        <Button size="small" variant="contained" fullWidth>
                          Pay
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </PaymentCard>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Analytics Tab */}
        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Revenue by Project
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Bar Chart visualization would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Payment Methods Distribution
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Pie Chart visualization would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Cash Flow Forecast
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Line Chart visualization would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </>
  );
};

export default PaymentCommissionTracking;
