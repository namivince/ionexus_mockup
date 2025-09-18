import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Button,
  Card,
  CardContent,
  Avatar,
  Chip,
  IconButton,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge,
  Divider,
  InputAdornment,
  Menu,
  MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ChatIcon from '@mui/icons-material/Chat';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OnlineIcon from '@mui/icons-material/FiberManualRecord';
import PhoneIcon from '@mui/icons-material/Phone';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StarIcon from '@mui/icons-material/Star';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: `linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)`,
  color: theme.palette.common.white,
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(6, 182, 212, 0.3)',
}));

const ChatContainer = styled(Paper)(({ theme }) => ({
  height: 600,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 12,
  overflow: 'hidden',
}));

const ChatHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const ChatMessages = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
  overflowY: 'auto',
  backgroundColor: '#f8fafc',
}));

const ChatInput = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

const MessageBubble = styled(Box)(({ theme, isOwn }) => ({
  maxWidth: '70%',
  padding: theme.spacing(1, 2),
  borderRadius: 16,
  marginBottom: theme.spacing(1),
  backgroundColor: isOwn ? theme.palette.primary.main : theme.palette.grey[200],
  color: isOwn ? theme.palette.common.white : theme.palette.text.primary,
  alignSelf: isOwn ? 'flex-end' : 'flex-start',
  marginLeft: isOwn ? 'auto' : 0,
  marginRight: isOwn ? 0 : 'auto',
}));

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const RealtimeChatInquiry = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const stats = [
    { title: 'Active Chats', value: '24', change: '+15%', color: '#06b6d4' },
    { title: 'Avg Response Time', value: '2.5m', change: '-12%', color: '#10b981' },
    { title: 'Satisfaction Rate', value: '94.5%', change: '+3%', color: '#f59e0b' },
    { title: 'Total Inquiries', value: '1,248', change: '+22%', color: '#8b5cf6' },
  ];

  const activeChats = [
    {
      id: 1,
      customer: 'John Doe',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'I\'m interested in the apartment listing',
      time: '2 min ago',
      unread: 3,
      status: 'online',
      priority: 'high'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'What are the payment options?',
      time: '5 min ago',
      unread: 1,
      status: 'online',
      priority: 'medium'
    },
    {
      id: 3,
      customer: 'Bob Johnson',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Thank you for the information',
      time: '10 min ago',
      unread: 0,
      status: 'offline',
      priority: 'low'
    },
  ];

  const inquiries = [
    {
      id: 1,
      customer: 'Alice Brown',
      subject: 'Property Viewing Request',
      property: 'Luxury Apartment - District 2',
      status: 'New',
      priority: 'High',
      created: '1 hour ago',
      agent: 'Unassigned'
    },
    {
      id: 2,
      customer: 'Tom Wilson',
      subject: 'Financing Options',
      property: 'Modern Villa - District 7',
      status: 'In Progress',
      priority: 'Medium',
      created: '3 hours ago',
      agent: 'Sarah Agent'
    },
    {
      id: 3,
      customer: 'Lisa Davis',
      subject: 'Property Details',
      property: 'Studio Apartment - District 1',
      status: 'Resolved',
      priority: 'Low',
      created: '1 day ago',
      agent: 'Mike Agent'
    },
  ];

  const chatMessages = [
    { id: 1, sender: 'John Doe', message: 'Hi, I\'m interested in the apartment listing in District 2', time: '10:30 AM', isOwn: false },
    { id: 2, sender: 'Agent', message: 'Hello John! I\'d be happy to help you with that. Which specific unit are you interested in?', time: '10:32 AM', isOwn: true },
    { id: 3, sender: 'John Doe', message: 'The 3-bedroom unit on the 12th floor', time: '10:33 AM', isOwn: false },
    { id: 4, sender: 'Agent', message: 'Great choice! That unit has a beautiful city view. Would you like to schedule a viewing?', time: '10:35 AM', isOwn: true },
    { id: 5, sender: 'John Doe', message: 'Yes, I\'m available this weekend', time: '10:36 AM', isOwn: false },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'error';
      case 'In Progress': return 'warning';
      case 'Resolved': return 'success';
      default: return 'default';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': case 'high': return 'error';
      case 'Medium': case 'medium': return 'warning';
      case 'Low': case 'low': return 'info';
      default: return 'default';
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle send message logic here
      setMessage('');
    }
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#1f2937' }}>
          Realtime Chat & Inquiry
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage customer communications, chat support, and inquiries in real-time.
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
                {stat.change} vs last week
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
          <Tab label="Live Chat" icon={<ChatIcon />} iconPosition="start" />
          <Tab label="Inquiries" icon={<ContactSupportIcon />} iconPosition="start" />
          <Tab label="Chatbot" icon={<SmartToyIcon />} iconPosition="start" />
          <Tab label="Analytics" icon={<TrendingUpIcon />} iconPosition="start" />
        </Tabs>

        {/* Live Chat Tab */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3} sx={{ height: 600 }}>
            {/* Chat List */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', borderRadius: 2 }}>
                <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Active Chats ({activeChats.length})
                  </Typography>
                </Box>
                <List sx={{ p: 0, height: 'calc(100% - 64px)', overflowY: 'auto' }}>
                  {activeChats.map((chat) => (
                    <ListItem 
                      key={chat.id} 
                      button 
                      onClick={() => setSelectedChat(chat)}
                      sx={{ 
                        borderBottom: 1, 
                        borderColor: 'divider',
                        backgroundColor: selectedChat?.id === chat.id ? 'action.selected' : 'transparent'
                      }}
                    >
                      <ListItemAvatar>
                        <Badge
                          overlap="circular"
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          badgeContent={
                            <OnlineIcon 
                              sx={{ 
                                color: chat.status === 'online' ? '#10b981' : '#6b7280',
                                fontSize: 12
                              }} 
                            />
                          }
                        >
                          <Avatar sx={{ bgcolor: 'primary.main' }}>
                            {chat.customer.charAt(0)}
                          </Avatar>
                        </Badge>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {chat.customer}
                            </Typography>
                            {chat.priority === 'high' && (
                              <PriorityHighIcon sx={{ fontSize: 16, color: 'error.main' }} />
                            )}
                          </Box>
                        }
                        secondary={chat.lastMessage}
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                        <Typography variant="caption" color="text.secondary">
                          {chat.time}
                        </Typography>
                        {chat.unread > 0 && (
                          <Badge badgeContent={chat.unread} color="error" />
                        )}
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>

            {/* Chat Window */}
            <Grid item xs={12} md={8}>
              {selectedChat ? (
                <ChatContainer>
                  <ChatHeader>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)' }}>
                        {selectedChat.customer.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {selectedChat.customer}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {selectedChat.status === 'online' ? 'Online' : 'Offline'}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton sx={{ color: 'white' }}>
                        <PhoneIcon />
                      </IconButton>
                      <IconButton sx={{ color: 'white' }}>
                        <VideoCallIcon />
                      </IconButton>
                      <IconButton 
                        sx={{ color: 'white' }}
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </Box>
                  </ChatHeader>

                  <ChatMessages>
                    {chatMessages.map((msg) => (
                      <Box key={msg.id} sx={{ display: 'flex', mb: 2 }}>
                        <MessageBubble isOwn={msg.isOwn}>
                          <Typography variant="body2">
                            {msg.message}
                          </Typography>
                          <Typography variant="caption" sx={{ opacity: 0.7, display: 'block', mt: 0.5 }}>
                            {msg.time}
                          </Typography>
                        </MessageBubble>
                      </Box>
                    ))}
                  </ChatMessages>

                  <ChatInput>
                    <TextField
                      fullWidth
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton size="small">
                              <AttachFileIcon />
                            </IconButton>
                            <IconButton size="small">
                              <EmojiEmotionsIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton 
                              color="primary" 
                              onClick={handleSendMessage}
                              disabled={!message.trim()}
                            >
                              <SendIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </ChatInput>
                </ChatContainer>
              ) : (
                <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <ChatIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                    <Typography variant="h6" color="text.secondary">
                      Select a chat to start messaging
                    </Typography>
                  </Box>
                </Card>
              )}
            </Grid>
          </Grid>
        </TabPanel>

        {/* Inquiries Tab */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Customer Inquiries
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<ContactSupportIcon />}
              sx={{ 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                boxShadow: '0 4px 20px rgba(6, 182, 212, 0.3)'
              }}
            >
              New Inquiry
            </Button>
          </Box>

          <Grid container spacing={3}>
            {inquiries.map((inquiry) => (
              <Grid item xs={12} md={6} lg={4} key={inquiry.id}>
                <Card sx={{ borderRadius: 3, height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        {inquiry.customer.charAt(0)}
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {inquiry.customer}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {inquiry.subject}
                        </Typography>
                      </Box>
                      <Chip 
                        label={inquiry.priority} 
                        color={getPriorityColor(inquiry.priority)}
                        size="small"
                        sx={{ fontWeight: 500 }}
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Property: {inquiry.property}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Status:
                        </Typography>
                        <Chip 
                          label={inquiry.status} 
                          color={getStatusColor(inquiry.status)}
                          size="small"
                          sx={{ fontWeight: 500 }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Agent:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {inquiry.agent}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                          Created:
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {inquiry.created}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button size="small" variant="outlined" fullWidth>
                        View Details
                      </Button>
                      <Button size="small" variant="contained" fullWidth>
                        Respond
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Chatbot Tab */}
        <TabPanel value={tabValue} index={2}>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <SmartToyIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              AI Chatbot Configuration
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Configure automated responses and AI-powered customer support.
            </Typography>
            <Button variant="contained" size="large" sx={{ borderRadius: 2 }}>
              Configure Chatbot
            </Button>
          </Box>
        </TabPanel>

        {/* Analytics Tab */}
        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Response Time Trends
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Line Chart visualization would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Inquiry Categories
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
                    Agent Performance
                  </Typography>
                  <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Bar Chart visualization would be displayed here
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>

      {/* Chat Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => setAnchorEl(null)}>
          <StarIcon sx={{ mr: 1 }} /> Mark as Priority
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ContactSupportIcon sx={{ mr: 1 }} /> Transfer to Agent
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ChatIcon sx={{ mr: 1 }} /> Chat History
        </MenuItem>
      </Menu>
    </>
  );
};

export default RealtimeChatInquiry;
