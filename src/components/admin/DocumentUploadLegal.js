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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import FolderIcon from '@mui/icons-material/Folder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import ArticleIcon from '@mui/icons-material/Article';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorIcon from '@mui/icons-material/Error';

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: `linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)`,
  color: theme.palette.common.white,
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(124, 58, 237, 0.3)',
}));

const UploadZone = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: 12,
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.primary.dark,
  },
}));

const DocumentCard = styled(Card)(({ theme }) => ({
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

const DocumentUploadLegal = () => {
  const [tabValue, setTabValue] = useState(0);
  const [uploadDialog, setUploadDialog] = useState(false);

  const stats = [
    { title: 'Total Documents', value: '2,456', change: '+12%', color: '#7c3aed' },
    { title: 'Legal Documents', value: '342', change: '+8%', color: '#dc2626' },
    { title: 'Contracts', value: '156', change: '+15%', color: '#059669' },
    { title: 'Storage Used', value: '45.2GB', change: '+5%', color: '#d97706' },
  ];

  const documents = [
    {
      id: 1,
      name: 'Sales Contract - Unit A1201.pdf',
      type: 'Contract',
      size: '2.5 MB',
      uploadedBy: 'John Admin',
      uploadDate: 'Today',
      status: 'Active',
      tags: ['contract', 'sales', 'unit-a1201'],
      project: 'Palm Heights'
    },
    {
      id: 2,
      name: 'Property Certificate - Palm Heights.pdf',
      type: 'Legal',
      size: '1.8 MB',
      uploadedBy: 'Sarah Legal',
      uploadDate: 'Yesterday',
      status: 'Verified',
      tags: ['certificate', 'legal', 'palm-heights'],
      project: 'Palm Heights'
    },
    {
      id: 3,
      name: 'Floor Plan - Building A.jpg',
      type: 'Drawing',
      size: '3.2 MB',
      uploadedBy: 'Mike Architect',
      uploadDate: '3 days ago',
      status: 'Active',
      tags: ['floorplan', 'building-a', 'drawing'],
      project: 'Palm Heights'
    },
  ];

  const contracts = [
    {
      id: 1,
      name: 'Standard Sales Agreement',
      type: 'Sales Contract',
      parties: ['Buyer', 'Seller', 'Agent'],
      status: 'Active',
      created: 'Mar 15, 2023',
      lastSigned: '2 hours ago',
      totalSigned: 45
    },
    {
      id: 2,
      name: 'Lease Agreement Template',
      type: 'Lease Contract',
      parties: ['Landlord', 'Tenant'],
      status: 'Active',
      created: 'Feb 20, 2023',
      lastSigned: '1 day ago',
      totalSigned: 28
    },
    {
      id: 3,
      name: 'Agency Agreement',
      type: 'Agency Contract',
      parties: ['Principal', 'Agent'],
      status: 'Draft',
      created: 'Apr 1, 2023',
      lastSigned: 'Never',
      totalSigned: 0
    },
  ];

  const legalDocuments = [
    {
      id: 1,
      name: 'Land Use Certificate',
      number: 'LUC-2023-001',
      issueDate: 'Jan 15, 2023',
      expiryDate: 'Jan 15, 2033',
      status: 'Valid',
      authority: 'HCMC Land Authority',
      project: 'Palm Heights'
    },
    {
      id: 2,
      name: 'Construction Permit',
      number: 'CP-2023-045',
      issueDate: 'Feb 10, 2023',
      expiryDate: 'Feb 10, 2025',
      status: 'Valid',
      authority: 'HCMC Construction Dept',
      project: 'Sky Garden'
    },
    {
      id: 3,
      name: 'Business License',
      number: 'BL-2023-789',
      issueDate: 'Mar 1, 2023',
      expiryDate: 'Mar 1, 2024',
      status: 'Expiring Soon',
      authority: 'HCMC Business Dept',
      project: 'Company License'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': case 'Valid': case 'Verified': return 'success';
      case 'Pending': case 'Draft': return 'warning';
      case 'Expired': case 'Invalid': return 'error';
      case 'Expiring Soon': return 'warning';
      default: return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': case 'Valid': case 'Verified': return <CheckCircleIcon />;
      case 'Pending': case 'Draft': return <PendingIcon />;
      case 'Expired': case 'Invalid': return <ErrorIcon />;
      default: return <PendingIcon />;
    }
  };

  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'contract': case 'legal': return <PictureAsPdfIcon />;
      case 'drawing': case 'image': return <ImageIcon />;
      default: return <ArticleIcon />;
    }
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#1f2937' }}>
          Document Upload / Legal
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage documents, contracts, and legal compliance efficiently.
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
          <Tab label="Documents" icon={<DescriptionIcon />} iconPosition="start" />
          <Tab label="Contracts" icon={<ArticleIcon />} iconPosition="start" />
          <Tab label="Legal Documents" icon={<GavelIcon />} iconPosition="start" />
          <Tab label="File Manager" icon={<FolderIcon />} iconPosition="start" />
        </Tabs>

        {/* Documents Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField size="small" placeholder="Search documents..." sx={{ minWidth: 200 }} />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Type</InputLabel>
              <Select label="Type" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="contract">Contract</MenuItem>
                <MenuItem value="legal">Legal</MenuItem>
                <MenuItem value="drawing">Drawing</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Project</InputLabel>
              <Select label="Project" defaultValue="">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="palm-heights">Palm Heights</MenuItem>
                <MenuItem value="sky-garden">Sky Garden</MenuItem>
                <MenuItem value="river-view">River View</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained" 
              startIcon={<UploadFileIcon />}
              onClick={() => setUploadDialog(true)}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
                boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)'
              }}
            >
              Upload Document
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Document</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Size</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Uploaded By</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {getFileIcon(doc.type)}
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {doc.name}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
                            {doc.tags.slice(0, 2).map((tag, index) => (
                              <Chip 
                                key={index}
                                label={tag} 
                                size="small"
                                variant="outlined"
                                sx={{ fontSize: '0.7rem', height: 20 }}
                              />
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell>{doc.size}</TableCell>
                    <TableCell>{doc.uploadedBy}</TableCell>
                    <TableCell>{doc.uploadDate}</TableCell>
                    <TableCell>
                      <Chip 
                        icon={getStatusIcon(doc.status)}
                        label={doc.status} 
                        color={getStatusColor(doc.status)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <DownloadIcon />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <ShareIcon />
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

        {/* Contracts Tab */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Contract Management
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<ArticleIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                boxShadow: '0 4px 20px rgba(5, 150, 105, 0.3)'
              }}
            >
              Create Contract
            </Button>
          </Box>

          <Grid container spacing={3}>
            {contracts.map((contract) => (
              <Grid item xs={12} md={6} key={contract.id}>
                <DocumentCard>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <ArticleIcon sx={{ color: 'primary.main' }} />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {contract.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {contract.type}
                        </Typography>
                      </Box>
                      <Chip 
                        label={contract.status} 
                        color={getStatusColor(contract.status)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Parties: {contract.parties.join(', ')}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Created:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {contract.created}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Last Signed:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {contract.lastSigned}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                          Total Signed:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
                          {contract.totalSigned}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button size="small" variant="outlined" fullWidth>
                        View Template
                      </Button>
                      <Button size="small" variant="contained" fullWidth>
                        Use Template
                      </Button>
                    </Box>
                  </CardContent>
                </DocumentCard>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Legal Documents Tab */}
        <TabPanel value={tabValue} index={2}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Legal Document Registry
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<GavelIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                boxShadow: '0 4px 20px rgba(220, 38, 38, 0.3)'
              }}
            >
              Add Legal Document
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Document</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Number</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Issue Date</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Expiry Date</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Authority</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {legalDocuments.map((doc) => (
                  <TableRow key={doc.id} hover>
                    <TableCell>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {doc.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {doc.project}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>{doc.number}</TableCell>
                    <TableCell>{doc.issueDate}</TableCell>
                    <TableCell>{doc.expiryDate}</TableCell>
                    <TableCell>{doc.authority}</TableCell>
                    <TableCell>
                      <Chip 
                        icon={getStatusIcon(doc.status)}
                        label={doc.status} 
                        color={getStatusColor(doc.status)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton size="small" color="primary">
                        <DownloadIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        {/* File Manager Tab */}
        <TabPanel value={tabValue} index={3}>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <FolderIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Advanced File Management
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Organize documents in folders, set permissions, and manage file versions.
            </Typography>
            <Button variant="contained" size="large" sx={{ borderRadius: 2 }}>
              Open File Manager
            </Button>
          </Box>
        </TabPanel>
      </Paper>

      {/* Upload Dialog */}
      <Dialog open={uploadDialog} onClose={() => setUploadDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Upload Document</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <UploadZone sx={{ mb: 3 }}>
              <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Drag & Drop Files Here
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                or click to browse files
              </Typography>
              <Button variant="outlined">
                Browse Files
              </Button>
            </UploadZone>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Document Type</InputLabel>
                  <Select label="Document Type">
                    <MenuItem value="contract">Contract</MenuItem>
                    <MenuItem value="legal">Legal Document</MenuItem>
                    <MenuItem value="drawing">Drawing/Plan</MenuItem>
                    <MenuItem value="image">Image</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Project</InputLabel>
                  <Select label="Project">
                    <MenuItem value="palm-heights">Palm Heights</MenuItem>
                    <MenuItem value="sky-garden">Sky Garden</MenuItem>
                    <MenuItem value="river-view">River View</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <TextField
              fullWidth
              label="Description"
              multiline
              rows={3}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Tags (comma separated)"
              placeholder="contract, sales, unit-a1201"
              sx={{ mb: 2 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setUploadDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setUploadDialog(false)}>
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DocumentUploadLegal;
