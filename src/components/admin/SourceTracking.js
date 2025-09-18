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
import CampaignIcon from '@mui/icons-material/Campaign';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import LinkIcon from '@mui/icons-material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Web';

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: `linear-gradient(135deg, #ec4899 0%, #be185d 100%)`,
  color: theme.palette.common.white,
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(236, 72, 153, 0.3)',
}));

const CampaignCard = styled(Card)(({ theme }) => ({
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

const SourceTracking = () => {
  const [tabValue, setTabValue] = useState(0);

  const stats = [
    { title: 'Total Campaigns', value: '24', change: '+12%', color: '#ec4899' },
    { title: 'Active Campaigns', value: '18', change: '+8%', color: '#10b981' },
    { title: 'Total Clicks', value: '45.2K', change: '+25%', color: '#3b82f6' },
    { title: 'Conversion Rate', value: '3.8%', change: '+0.5%', color: '#f59e0b' },
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2023',
      source: 'Google Ads',
      medium: 'cpc',
      campaign: 'summer_sale_2023',
      clicks: 12500,
      conversions: 485,
      conversionRate: '3.88%',
      cost: '$2,450',
      roi: '285%',
      status: 'Active',
      startDate: 'Jun 1, 2023',
      endDate: 'Aug 31, 2023'
    },
    {
      id: 2,
      name: 'Facebook Lead Gen',
      source: 'Facebook',
      medium: 'social',
      campaign: 'fb_lead_gen_q2',
      clicks: 8900,
      conversions: 312,
      conversionRate: '3.51%',
      cost: '$1,890',
      roi: '198%',
      status: 'Active',
      startDate: 'May 15, 2023',
      endDate: 'Jul 15, 2023'
    },
    {
      id: 3,
      name: 'Email Newsletter',
      source: 'Email',
      medium: 'email',
      campaign: 'newsletter_may_2023',
      clicks: 3200,
      conversions: 128,
      conversionRate: '4.00%',
      cost: '$320',
      roi: '425%',
      status: 'Completed',
      startDate: 'May 1, 2023',
      endDate: 'May 31, 2023'
    },
  ];

  const utmParameters = [
    {
      parameter: 'utm_source',
      description: 'Identifies which site sent the traffic',
      examples: ['google', 'facebook', 'newsletter', 'direct'],
      usage: 'Required'
    },
    {
      parameter: 'utm_medium',
      description: 'Identifies what type of link was used',
      examples: ['cpc', 'banner', 'email', 'social'],
      usage: 'Required'
    },
    {
      parameter: 'utm_campaign',
      description: 'Identifies a specific product promotion',
      examples: ['summer_sale', 'new_launch', 'retargeting'],
      usage: 'Required'
    },
    {
      parameter: 'utm_term',
      description: 'Identifies search terms',
      examples: ['luxury+apartment', 'villa+for+sale'],
      usage: 'Optional'
    },
    {
      parameter: 'utm_content',
      description: 'Identifies what specifically was clicked',
      examples: ['logolink', 'textlink', 'banner_top'],
      usage: 'Optional'
    },
  ];

  const topSources = [
    { source: 'Google Ads', visits: 15420, conversions: 592, icon: <GoogleIcon />, color: '#4285f4' },
    { source: 'Facebook', visits: 12350, conversions: 445, icon: <FacebookIcon />, color: '#1877f2' },
    { source: 'Direct', visits: 8900, conversions: 356, icon: <WebIcon />, color: '#6b7280' },
    { source: 'Email', visits: 5600, conversions: 224, icon: <EmailIcon />, color: '#ef4444' },
    { source: 'LinkedIn', visits: 3200, conversions: 96, icon: <LinkedInIcon />, color: '#0a66c2' },
  ];

  const conversionFunnel = [
    { stage: 'Visitors', count: 45672, percentage: 100, color: '#3b82f6' },
    { stage: 'Engaged Users', count: 18269, percentage: 40, color: '#10b981' },
    { stage: 'Leads', count: 5480, percentage: 12, color: '#f59e0b' },
    { stage: 'Qualified Leads', count: 2192, percentage: 4.8, color: '#ef4444' },
    { stage: 'Customers', count: 1096, percentage: 2.4, color: '#8b5cf6' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Paused': return 'warning';
      case 'Completed': return 'info';
      case 'Draft': return 'default';
      default: return 'default';
    }
  };

  const getSourceIcon = (source) => {
    switch (source.toLowerCase()) {
      case 'google ads': case 'google': return <GoogleIcon />;
      case 'facebook': return <FacebookIcon />;
      case 'twitter': return <TwitterIcon />;
      case 'linkedin': return <LinkedInIcon />;
      case 'email': return <EmailIcon />;
      default: return <WebIcon />;
    }
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#1f2937' }}>
          Source Tracking (UTM/Marketing)
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track marketing campaigns, UTM parameters, and analyze traffic sources.
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
          <Tab label="Campaigns" icon={<CampaignIcon />} iconPosition="start" />
          <Tab label="UTM Builder" icon={<LinkIcon />} iconPosition="start" />
          <Tab label="Source Analysis" icon={<TrackChangesIcon />} iconPosition="start" />
          <Tab label="Conversion Funnel" icon={<AnalyticsIcon />} iconPosition="start" />
        </Tabs>

        {/* Campaigns Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField size="small" placeholder="Search campaigns..." sx={{ minWidth: 200 }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Source</InputLabel>
              <Select label="Source" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="google">Google</MenuItem>
                <MenuItem value="facebook">Facebook</MenuItem>
                <MenuItem value="email">Email</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="paused">Paused</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained" 
              startIcon={<CampaignIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                boxShadow: '0 4px 20px rgba(236, 72, 153, 0.3)'
              }}
            >
              New Campaign
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Campaign</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Source/Medium</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Clicks</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Conversions</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Conv. Rate</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Cost</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>ROI</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id} hover>
                    <TableCell>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {campaign.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {campaign.startDate} - {campaign.endDate}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {getSourceIcon(campaign.source)}
                        <Box>
                          <Typography variant="body2">{campaign.source}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {campaign.medium}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{campaign.clicks.toLocaleString()}</TableCell>
                    <TableCell>{campaign.conversions}</TableCell>
                    <TableCell>
                      <Chip 
                        label={campaign.conversionRate} 
                        color="success"
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'error.main' }}>{campaign.cost}</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'success.main' }}>{campaign.roi}</TableCell>
                    <TableCell>
                      <Chip 
                        label={campaign.status} 
                        color={getStatusColor(campaign.status)}
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
        </TabPanel>

        {/* UTM Builder Tab */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    UTM Link Builder
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <TextField
                      fullWidth
                      label="Website URL"
                      placeholder="https://ionexus.com/property/123"
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Campaign Source"
                      placeholder="google, facebook, newsletter"
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Campaign Medium"
                      placeholder="cpc, banner, email"
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Campaign Name"
                      placeholder="summer_sale_2023"
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Campaign Term (Optional)"
                      placeholder="luxury apartment"
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Campaign Content (Optional)"
                      placeholder="logolink, textlink"
                      sx={{ mb: 3 }}
                    />
                    <Button 
                      variant="contained" 
                      fullWidth
                      sx={{ 
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                        boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                      }}
                    >
                      Generate UTM Link
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    UTM Parameters Guide
                  </Typography>
                  <TableContainer sx={{ mt: 2 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 600 }}>Parameter</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Usage</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {utmParameters.map((param, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                {param.parameter}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {param.description}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label={param.usage} 
                                color={param.usage === 'Required' ? 'error' : 'default'}
                                size="small"
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Source Analysis Tab */}
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Top Traffic Sources
                  </Typography>
                  <TableContainer sx={{ mt: 2 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 600 }}>Source</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Visits</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Conversions</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Conv. Rate</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {topSources.map((source, index) => (
                          <TableRow key={index} hover>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ bgcolor: source.color, width: 32, height: 32 }}>
                                  {source.icon}
                                </Avatar>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                  {source.source}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>{source.visits.toLocaleString()}</TableCell>
                            <TableCell>{source.conversions}</TableCell>
                            <TableCell>
                              <Chip 
                                label={`${((source.conversions / source.visits) * 100).toFixed(2)}%`}
                                color="success"
                                size="small"
                                sx={{ fontWeight: 500 }}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Traffic Distribution
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Pie Chart visualization would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Conversion Funnel Tab */}
        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Marketing Conversion Funnel
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    {conversionFunnel.map((stage, index) => (
                      <Box key={index} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {stage.stage}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {stage.count.toLocaleString()} ({stage.percentage}%)
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={stage.percentage}
                          sx={{
                            height: 12,
                            borderRadius: 6,
                            backgroundColor: 'grey.200',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 6,
                              backgroundColor: stage.color
                            }
                          }}
                        />
                        {index < conversionFunnel.length - 1 && (
                          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                            Drop-off: {((conversionFunnel[index].count - conversionFunnel[index + 1].count) / conversionFunnel[index].count * 100).toFixed(1)}%
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Conversion Insights
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Overall Conversion Rate
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                        2.4%
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Best Performing Stage
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Visitors → Engaged
                      </Typography>
                      <Typography variant="body2" color="success.main">
                        40% conversion rate
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Biggest Drop-off
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Engaged → Leads
                      </Typography>
                      <Typography variant="body2" color="error.main">
                        70% drop-off rate
                      </Typography>
                    </Box>
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

export default SourceTracking;
