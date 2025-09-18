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
  Switch,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SecurityIcon from '@mui/icons-material/Security';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: `linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)`,
  color: theme.palette.common.white,
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)',
}));

const UserCard = styled(Card)(({ theme }) => ({
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

const UserManagementRoles = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const stats = [
    { title: 'Total Users', value: '156', change: '+8%', color: '#8b5cf6' },
    { title: 'Active Users', value: '142', change: '+5%', color: '#10b981' },
    { title: 'Admin Users', value: '12', change: '+2%', color: '#ef4444' },
    { title: 'Roles Defined', value: '8', change: '0%', color: '#f59e0b' },
  ];

  const users = [
    {
      id: 1,
      name: 'John Admin',
      email: 'john@ionexus.com',
      role: 'Super Admin',
      department: 'IT',
      status: 'Active',
      lastLogin: '2 hours ago',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'Sarah Manager',
      email: 'sarah@ionexus.com',
      role: 'Sales Manager',
      department: 'Sales',
      status: 'Active',
      lastLogin: '1 day ago',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Mike Agent',
      email: 'mike@ionexus.com',
      role: 'Agent',
      department: 'Sales',
      status: 'Inactive',
      lastLogin: '1 week ago',
      avatar: '/api/placeholder/40/40'
    },
  ];

  const roles = [
    {
      id: 1,
      name: 'Super Admin',
      description: 'Full system access and control',
      users: 3,
      permissions: ['All Permissions'],
      color: 'error'
    },
    {
      id: 2,
      name: 'Sales Manager',
      description: 'Manage sales team and operations',
      users: 8,
      permissions: ['Sales Management', 'Team Management', 'Reports'],
      color: 'primary'
    },
    {
      id: 3,
      name: 'Agent',
      description: 'Handle customer interactions and sales',
      users: 45,
      permissions: ['Customer Management', 'Listings', 'Bookings'],
      color: 'success'
    },
    {
      id: 4,
      name: 'Finance Manager',
      description: 'Manage financial operations',
      users: 5,
      permissions: ['Payment Management', 'Financial Reports', 'Commission'],
      color: 'warning'
    },
  ];

  const departments = [
    { name: 'Sales', users: 68, manager: 'Sarah Manager' },
    { name: 'Marketing', users: 24, manager: 'Tom Wilson' },
    { name: 'Finance', users: 12, manager: 'Alice Brown' },
    { name: 'IT', users: 8, manager: 'John Admin' },
    { name: 'Legal', users: 6, manager: 'Bob Johnson' },
  ];

  const permissions = [
    'User Management',
    'Role Management',
    'Project Management',
    'Lead Management',
    'Customer Management',
    'Payment Management',
    'Commission Management',
    'Reports & Analytics',
    'System Settings',
    'Audit Logs'
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Inactive': return 'error';
      case 'Pending': return 'warning';
      default: return 'default';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Super Admin': return 'error';
      case 'Sales Manager': return 'primary';
      case 'Agent': return 'success';
      case 'Finance Manager': return 'warning';
      default: return 'default';
    }
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#1f2937' }}>
          User Management & Roles
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage users, roles, permissions, and access control.
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
          <Tab label="Users" icon={<PeopleIcon />} iconPosition="start" />
          <Tab label="Roles" icon={<AdminPanelSettingsIcon />} iconPosition="start" />
          <Tab label="Departments" icon={<BusinessIcon />} iconPosition="start" />
          <Tab label="Permissions" icon={<SecurityIcon />} iconPosition="start" />
        </Tabs>

        {/* Users Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField size="small" placeholder="Search users..." sx={{ minWidth: 200 }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Role</InputLabel>
              <Select label="Role" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="agent">Agent</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Department</InputLabel>
              <Select label="Department" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="sales">Sales</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained" 
              startIcon={<PersonAddIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)'
              }}
              onClick={() => setOpenDialog(true)}
            >
              Add User
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>User</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Last Login</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main' }}>
                          {user.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {user.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {user.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={user.role} 
                        color={getRoleColor(user.role)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>
                      <Chip 
                        label={user.status} 
                        color={getStatusColor(user.status)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        {/* Roles Tab */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              System Roles
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<AdminPanelSettingsIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
              }}
            >
              Create Role
            </Button>
          </Box>

          <Grid container spacing={3}>
            {roles.map((role) => (
              <Grid item xs={12} md={6} key={role.id}>
                <UserCard>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Avatar sx={{ bgcolor: `${role.color}.main` }}>
                        <AdminPanelSettingsIcon />
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {role.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {role.description}
                        </Typography>
                      </Box>
                      <Chip 
                        label={`${role.users} users`} 
                        color={role.color}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Key Permissions:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {role.permissions.slice(0, 3).map((permission, index) => (
                          <Chip 
                            key={index}
                            label={permission} 
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.75rem' }}
                          />
                        ))}
                        {role.permissions.length > 3 && (
                          <Chip 
                            label={`+${role.permissions.length - 3} more`} 
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.75rem' }}
                          />
                        )}
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button size="small" variant="outlined" fullWidth>
                        View Details
                      </Button>
                      <Button size="small" variant="contained" fullWidth>
                        Edit Role
                      </Button>
                    </Box>
                  </CardContent>
                </UserCard>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Departments Tab */}
        <TabPanel value={tabValue} index={2}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Departments
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<BusinessIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
              }}
            >
              Add Department
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Users</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Manager</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {departments.map((dept, index) => (
                  <TableRow key={index} hover>
                    <TableCell sx={{ fontWeight: 500 }}>{dept.name}</TableCell>
                    <TableCell>
                      <Chip 
                        label={`${dept.users} users`} 
                        color="primary"
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>{dept.manager}</TableCell>
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

        {/* Permissions Tab */}
        <TabPanel value={tabValue} index={3}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              System Permissions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage granular permissions for different system features
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Available Permissions
                  </Typography>
                  <List>
                    {permissions.map((permission, index) => (
                      <ListItem key={index} dense>
                        <ListItemIcon>
                          <LockIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={permission} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Permission Matrix
                  </Typography>
                  <Box sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Permission matrix visualization would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>

      {/* Add User Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Role</InputLabel>
              <Select label="Role">
                <MenuItem value="agent">Agent</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Department</InputLabel>
              <Select label="Department">
                <MenuItem value="sales">Sales</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Send welcome email"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            Add User
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserManagementRoles;
