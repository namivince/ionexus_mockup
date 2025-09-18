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
  Avatar,
  LinearProgress,
  Badge
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: `linear-gradient(135deg, #10b981 0%, #059669 100%)`,
  color: theme.palette.common.white,
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)',
}));

const LeadCard = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
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

const LeadCustomerManagement = () => {
  const [tabValue, setTabValue] = useState(0);

  const stats = [
    { title: 'Total Leads', value: '1,248', change: '+22%', color: '#10b981' },
    { title: 'Conversion Rate', value: '24.5%', change: '+3.2%', color: '#3b82f6' },
    { title: 'Active Customers', value: '856', change: '+18%', color: '#8b5cf6' },
    { title: 'Avg Response Time', value: '2.5h', change: '-15%', color: '#f59e0b' },
  ];

  const leads = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@email.com', 
      phone: '0901234567', 
      status: 'New', 
      interest: 'High', 
      source: 'Website',
      created: 'Today',
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@email.com', 
      phone: '0909876543', 
      status: 'Contacted', 
      interest: 'Medium', 
      source: 'Facebook',
      created: 'Yesterday',
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 3, 
      name: 'Bob Johnson', 
      email: 'bob@email.com', 
      phone: '0907654321', 
      status: 'Following', 
      interest: 'High', 
      source: 'Google Ads',
      created: '3 days ago',
      avatar: '/api/placeholder/40/40'
    },
  ];

  const customers = [
    {
      id: 1,
      name: 'Alice Brown',
      type: 'Individual',
      transactions: 2,
      value: '$520,000',
      status: 'VIP',
      lastActivity: '2 days ago',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'XYZ Corp',
      type: 'Corporate',
      transactions: 5,
      value: '$2.1M',
      status: 'VIP',
      lastActivity: '1 week ago',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Tom Wilson',
      type: 'Individual',
      transactions: 1,
      value: '$320,000',
      status: 'Active',
      lastActivity: 'Today',
      avatar: '/api/placeholder/40/40'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'info';
      case 'Contacted': return 'warning';
      case 'Following': return 'primary';
      case 'Converted': return 'success';
      case 'VIP': return 'error';
      case 'Active': return 'success';
      default: return 'default';
    }
  };

  const getInterestColor = (interest) => {
    switch (interest) {
      case 'High': return 'error';
      case 'Medium': return 'warning';
      case 'Low': return 'info';
      default: return 'default';
    }
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#1f2937' }}>
          Lead & Customer Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage leads, customers, and track conversion performance.
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
          <Tab label="Leads" icon={<PersonAddIcon />} iconPosition="start" />
          <Tab label="Customers" icon={<ContactsIcon />} iconPosition="start" />
          <Tab label="Analytics" icon={<TrendingUpIcon />} iconPosition="start" />
        </Tabs>

        {/* Leads Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField size="small" placeholder="Search leads..." sx={{ minWidth: 200 }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="new">New</MenuItem>
                <MenuItem value="contacted">Contacted</MenuItem>
                <MenuItem value="following">Following</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Interest</InputLabel>
              <Select label="Interest" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="high">High</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="low">Low</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained" 
              startIcon={<PersonAddIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
              }}
            >
              Add Lead
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Lead</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Contact</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Interest</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Source</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Created</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main' }}>
                          {lead.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {lead.name}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <EmailIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="body2">{lead.email}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PhoneIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="body2">{lead.phone}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={lead.status} 
                        color={getStatusColor(lead.status)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={lead.interest} 
                        color={getInterestColor(lead.interest)}
                        size="small"
                        variant="outlined"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>{lead.source}</TableCell>
                    <TableCell>{lead.created}</TableCell>
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

        {/* Customers Tab */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField size="small" placeholder="Search customers..." sx={{ minWidth: 200 }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Type</InputLabel>
              <Select label="Type" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="individual">Individual</MenuItem>
                <MenuItem value="corporate">Corporate</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="vip">VIP</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained" 
              startIcon={<ContactsIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
              }}
            >
              Add Customer
            </Button>
          </Box>

          <Grid container spacing={3}>
            {customers.map((customer) => (
              <Grid item xs={12} md={6} lg={4} key={customer.id}>
                <LeadCard>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Avatar sx={{ width: 50, height: 50, bgcolor: 'secondary.main' }}>
                        {customer.type === 'Corporate' ? <BusinessIcon /> : <PersonIcon />}
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {customer.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {customer.type}
                        </Typography>
                      </Box>
                      <Chip 
                        label={customer.status} 
                        color={getStatusColor(customer.status)}
                        size="small"
                        icon={customer.status === 'VIP' ? <StarIcon /> : undefined}
                        sx={{ fontWeight: 500 }}
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Transactions
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {customer.transactions}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Total Value
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
                          {customer.value}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                          Last Activity
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {customer.lastActivity}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button size="small" variant="outlined" fullWidth>
                        View Profile
                      </Button>
                      <Button size="small" variant="contained" fullWidth>
                        Contact
                      </Button>
                    </Box>
                  </CardContent>
                </LeadCard>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Analytics Tab */}
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Lead Conversion Funnel
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    {[
                      { stage: 'Visitors', count: 5420, percentage: 100 },
                      { stage: 'Leads', count: 1248, percentage: 23 },
                      { stage: 'Qualified', count: 456, percentage: 8.4 },
                      { stage: 'Customers', count: 156, percentage: 2.9 }
                    ].map((item, index) => (
                      <Box key={item.stage} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">{item.stage}</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {item.count} ({item.percentage}%)
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={item.percentage}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'grey.200',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              background: `linear-gradient(90deg, ${['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][index]} 0%, ${['#1d4ed8', '#059669', '#d97706', '#dc2626'][index]} 100%)`
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Top Performing Agents
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    {[
                      { name: 'David Agent', leads: 45, rate: '32.5%' },
                      { name: 'Sarah Agent', leads: 38, rate: '28.9%' },
                      { name: 'Mike Agent', leads: 42, rate: '26.2%' }
                    ].map((agent, index) => (
                      <Box key={agent.name} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Avatar sx={{ bgcolor: ['primary.main', 'secondary.main', 'success.main'][index] }}>
                          {agent.name.charAt(0)}
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {agent.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {agent.leads} leads assigned
                          </Typography>
                        </Box>
                        <Chip 
                          label={agent.rate} 
                          color="success" 
                          size="small"
                          sx={{ fontWeight: 500 }}
                        />
                      </Box>
                    ))}
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

export default LeadCustomerManagement;
