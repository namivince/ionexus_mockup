import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Tabs,
  Tab,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import TableChartIcon from '@mui/icons-material/TableChart';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import FilterListIcon from '@mui/icons-material/FilterList';
import DateRangeIcon from '@mui/icons-material/DateRange';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Styled components
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

const ChartCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
  borderRadius: 12,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  height: '100%',
  minHeight: 300,
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`report-tabpanel-${index}`}
      aria-labelledby={`report-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const ReportsDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [dateRange, setDateRange] = useState('last30');
  const [campaign, setCampaign] = useState('all');
  const [chartType, setChartType] = useState('bar');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleDateRangeChange = (event) => {
    setDateRange(event.target.value);
  };

  const handleCampaignChange = (event) => {
    setCampaign(event.target.value);
  };

  const stats = [
    { title: 'Total Traffic', value: '12,458', change: '+18%', color: '#2196f3' },
    { title: 'Leads', value: '256', change: '+22%', color: '#4caf50' },
    { title: 'Conversions', value: '48', change: '+15%', color: '#ff9800' },
    { title: 'ROI', value: '325%', change: '+12%', color: '#9c27b0' },
  ];

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Reports & Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Analyze performance metrics and generate custom reports.
        </Typography>
      </Box>

      {/* Filter Controls */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="date-range-label">Date Range</InputLabel>
            <Select
              labelId="date-range-label"
              id="date-range"
              value={dateRange}
              onChange={handleDateRangeChange}
              label="Date Range"
              startAdornment={<DateRangeIcon sx={{ mr: 1 }} />}
            >
              <MenuItem value="today">Today</MenuItem>
              <MenuItem value="yesterday">Yesterday</MenuItem>
              <MenuItem value="last7">Last 7 Days</MenuItem>
              <MenuItem value="last30">Last 30 Days</MenuItem>
              <MenuItem value="thisMonth">This Month</MenuItem>
              <MenuItem value="lastMonth">Last Month</MenuItem>
              <MenuItem value="custom">Custom Range</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="campaign-label">Campaign</InputLabel>
            <Select
              labelId="campaign-label"
              id="campaign"
              value={campaign}
              onChange={handleCampaignChange}
              label="Campaign"
            >
              <MenuItem value="all">All Campaigns</MenuItem>
              <MenuItem value="summer2023">Summer 2023</MenuItem>
              <MenuItem value="fall2023">Fall 2023</MenuItem>
              <MenuItem value="newyear2024">New Year 2024</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button startIcon={<DownloadIcon />} sx={{ mr: 1 }}>Export</Button>
          <Button startIcon={<PrintIcon />} sx={{ mr: 1 }}>Print</Button>
          <Button startIcon={<ShareIcon />}>Share</Button>
        </Grid>
      </Grid>

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
              <Typography variant="body2" color={stat.change.startsWith('+') ? 'success.main' : 'error.main'}>
                {stat.change} MoM
              </Typography>
            </StatsCard>
          </Grid>
        ))}
      </Grid>

      {/* Report Tabs */}
      <Paper sx={{ mb: 4, borderRadius: 2 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Sales & Marketing" icon={<BarChartIcon />} iconPosition="start" />
          <Tab label="Financial" icon={<PieChartIcon />} iconPosition="start" />
          <Tab label="Projects & Inventory" icon={<TableChartIcon />} iconPosition="start" />
          <Tab label="Customer" icon={<TimelineIcon />} iconPosition="start" />
          <Tab label="Market Trends" icon={<TimelineIcon />} iconPosition="start" />
          <Tab label="Custom Reports" icon={<FilterListIcon />} iconPosition="start" />
        </Tabs>

        {/* Sales & Marketing Tab */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ChartCard>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6">Lead Sources</Typography>
                  <Box>
                    <IconButton size="small" onClick={() => setChartType('bar')}>
                      <BarChartIcon color={chartType === 'bar' ? 'primary' : 'inherit'} />
                    </IconButton>
                    <IconButton size="small" onClick={() => setChartType('pie')}>
                      <PieChartIcon color={chartType === 'pie' ? 'primary' : 'inherit'} />
                    </IconButton>
                  </Box>
                </Box>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    {chartType === 'bar' ? 'Bar Chart' : 'Pie Chart'} visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Conversion Funnel</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Funnel Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
            <Grid item xs={12}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Sales Performance by Agent</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Table/Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Financial Tab */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Revenue by Project</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Bar Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Payment Methods</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Pie Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
            <Grid item xs={12}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Cash Flow Forecast</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Line Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Projects & Inventory Tab */}
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Inventory by Status</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Pie Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Inventory by Type</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Bar Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
            <Grid item xs={12}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Inventory Heatmap</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Heatmap visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Customer Tab */}
        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Customer Demographics</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Pie Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Customer Retention</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Line Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
            <Grid item xs={12}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Customer Lifetime Value</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Bar Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Market Trends Tab */}
        <TabPanel value={tabValue} index={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Price Trends</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Line Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Supply-Demand Analysis</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Bar Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
            <Grid item xs={12}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Market Forecast</Typography>
                <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Line Chart visualization would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Custom Reports Tab */}
        <TabPanel value={tabValue} index={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>Report Builder</Typography>
                <Divider sx={{ mb: 2 }} />
                
                <TextField
                  fullWidth
                  label="Report Name"
                  variant="outlined"
                  defaultValue="Sales by Region"
                  sx={{ mb: 2 }}
                />
                
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Date Range</InputLabel>
                  <Select defaultValue="custom" label="Date Range">
                    <MenuItem value="last7">Last 7 Days</MenuItem>
                    <MenuItem value="last30">Last 30 Days</MenuItem>
                    <MenuItem value="custom">Custom Range</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Format</InputLabel>
                  <Select defaultValue="pdf" label="Format">
                    <MenuItem value="pdf">PDF</MenuItem>
                    <MenuItem value="excel">Excel</MenuItem>
                    <MenuItem value="csv">CSV</MenuItem>
                  </Select>
                </FormControl>
                
                <Typography variant="subtitle2" gutterBottom>Metrics</Typography>
                <Box sx={{ mb: 2 }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Revenue"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Transactions"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Avg Value"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Conversion"
                      />
                    </Grid>
                  </Grid>
                </Box>
                
                <Typography variant="subtitle2" gutterBottom>Dimensions</Typography>
                <Box sx={{ mb: 2 }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Region"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Project"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Agent"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Time Period"
                      />
                    </Grid>
                  </Grid>
                </Box>
                
                <Typography variant="subtitle2" gutterBottom>Visualization</Typography>
                <Box sx={{ mb: 2 }}>
                  <RadioGroup row defaultValue="pie">
                    <FormControlLabel value="bar" control={<Radio />} label="Bar Chart" />
                    <FormControlLabel value="line" control={<Radio />} label="Line Chart" />
                    <FormControlLabel value="pie" control={<Radio />} label="Pie Chart" />
                    <FormControlLabel value="table" control={<Radio />} label="Table" />
                  </RadioGroup>
                </Box>
                
                <Button variant="contained" color="primary" fullWidth>
                  Generate Report
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <ChartCard>
                <Typography variant="h6" gutterBottom>Report Preview</Typography>
                <Box sx={{ height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Report preview would be displayed here
                  </Typography>
                </Box>
              </ChartCard>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>

      {/* Saved Reports */}
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>Saved Reports</Typography>
        <List>
          <ListItem 
            secondaryAction={
              <Box>
                <IconButton edge="end" aria-label="download">
                  <DownloadIcon />
                </IconButton>
                <IconButton edge="end" aria-label="view">
                  <VisibilityIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemText 
              primary="Monthly Sales Report" 
              secondary="Created: May 1, 2023 | Format: PDF | Last Generated: 2 days ago" 
            />
          </ListItem>
          <Divider />
          <ListItem 
            secondaryAction={
              <Box>
                <IconButton edge="end" aria-label="download">
                  <DownloadIcon />
                </IconButton>
                <IconButton edge="end" aria-label="view">
                  <VisibilityIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemText 
              primary="Quarterly Performance Analysis" 
              secondary="Created: Apr 15, 2023 | Format: Excel | Last Generated: 1 week ago" 
            />
          </ListItem>
          <Divider />
          <ListItem 
            secondaryAction={
              <Box>
                <IconButton edge="end" aria-label="download">
                  <DownloadIcon />
                </IconButton>
                <IconButton edge="end" aria-label="view">
                  <VisibilityIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemText 
              primary="Annual Market Trends" 
              secondary="Created: Mar 10, 2023 | Format: PDF | Last Generated: 1 month ago" 
            />
          </ListItem>
        </List>
      </Paper>
    </>
  );
};

export default ReportsDashboard;
