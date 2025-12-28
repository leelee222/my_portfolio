import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Fade,
  Slide,
  Chip,
  CardMedia,
  Divider,
  IconButton,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  transition: 'all 0.3s ease',
  border: `2px solid ${theme.palette.primary.main}20`,
  overflow: 'hidden',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(160, 145, 230, 0.2)',
    border: `2px solid ${theme.palette.primary.main}`,
  }
}));

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#a091e6' : '#6f52ed',
    },
    secondary: {
      main: mode === 'dark' ? '#6c63ad' : '#9d8bef',
    },
    background: {
      default: mode === 'dark' ? '#0c0c17' : '#f7f5ff',
      paper: mode === 'dark' ? '#1a1a29' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#333333',
    }
  },
  typography: {
    fontFamily: "'Lexend', 'Roboto', sans-serif",
    fontSize: 16,
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Lexend';
          font-style: normal;
          font-weight: 400;
          src: url('/Lexend-Regular.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Lexend';
          font-style: normal;
          font-weight: 500;
          src: url('/Lexend-Medium.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Lexend';
          font-style: normal;
          font-weight: 600;
          src: url('/Lexend-SemiBold.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Lexend';
          font-style: normal;
          font-weight: 700;
          src: url('/Lexend-Bold.ttf') format('truetype');
        }
      `,
    },
  },
});

const Blog = () => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const theme = React.useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);
      return newMode;
    });
  };

  const blogPosts = [
    {
      title: "Building Secure CI/CD Pipelines with DevSecOps",
      excerpt: "Learn how to integrate security tools like Trivy, Gitleaks, and SonarCloud into your CI/CD pipeline for automated security testing.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "DevSecOps",
      color: "#ef4444",
      image: "/4706330.png",
      url: "/blog/devsecops-cicd"
    },
    {
      title: "OSINT Techniques for Security Researchers",
      excerpt: "A comprehensive guide to Open Source Intelligence gathering using tools like Maltego, SpiderFoot, and TheHarvester.",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "OSINT",
      color: "#10b981",
      image: "/4706330.png",
      url: "/blog/osint-techniques"
    },
    {
      title: "Infrastructure as Code Security with Terraform & Checkov",
      excerpt: "Best practices for securing your Terraform configurations and automating security scans with Checkov.",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Cloud Security",
      color: "#f59e0b",
      image: "/4706330.png",
      url: "/blog/iac-security"
    },
    {
      title: "Container Security: From Docker to Kubernetes",
      excerpt: "Essential security practices for containerized applications, including image scanning, runtime protection, and secrets management.",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Container Security",
      color: "#8b5cf6",
      image: "/4706330.png",
      url: "/blog/container-security"
    },
    {
      title: "Automating Security Testing in GitHub Actions",
      excerpt: "Step-by-step guide to implementing automated security scanning in your GitHub Actions workflows.",
      date: "November 20, 2024",
      readTime: "6 min read",
      category: "DevSecOps",
      color: "#ef4444",
      image: "/4706330.png",
      url: "/blog/github-actions-security"
    },
    {
      title: "Advanced OSINT: Social Media Intelligence Gathering",
      excerpt: "Deep dive into social media OSINT techniques and tools for comprehensive digital footprint analysis.",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "OSINT",
      color: "#10b981",
      image: "/4706330.png",
      url: "/blog/social-media-osint"
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Box sx={{ 
        position: 'fixed', 
        top: 20, 
        right: 20, 
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        <Tooltip title="Toggle Theme" placement="left">
          <IconButton 
            onClick={toggleTheme}
            sx={{ 
              bgcolor: 'background.paper',
              boxShadow: 3,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            }}
          >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
        
        <Tooltip title="GitHub" placement="left">
          <IconButton 
            component="a"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              bgcolor: 'background.paper',
              boxShadow: 3,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        
        <Tooltip title="LinkedIn" placement="left">
          <IconButton 
            component="a"
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              bgcolor: 'background.paper',
              boxShadow: 3,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        
        <Tooltip title="Email" placement="left">
          <IconButton 
            component="a"
            href="mailto:your.email@example.com"
            sx={{ 
              bgcolor: 'background.paper',
              boxShadow: 3,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            }}
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ 
        position: 'fixed', 
        top: 20, 
        left: 20, 
        zIndex: 10 
      }}>
        <Tooltip title="Back to Portfolio" placement="right">
          <IconButton 
            component="a"
            href="/"
            sx={{ 
              bgcolor: 'background.paper',
              boxShadow: 3,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              }
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
      </Box>
      
      <Container>
        <Box sx={{ minHeight: '100vh', py: 8 }}>
          <Box sx={{ maxWidth: '900px', mx: 'auto', px: { xs: 2, md: 4 } }}>
            <Fade in={true} timeout={1000}>
              <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant="h2" color="primary" gutterBottom>
                  Blog
                </Typography>
                <Divider sx={{ width: '80px', height: '3px', bgcolor: 'primary.main', mb: 4, mx: 'auto' }} />
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
                  Insights, tutorials, and thoughts on DevSecOps, OSINT, and cybersecurity
                </Typography>
              </Box>
            </Fade>
        
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Slide direction="up" in={true} timeout={500 + index * 100}>
                <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    objectFit: 'cover',
                    filter: 'brightness(0.8)',
                  }}
                />
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      label={post.category}
                      size="small"
                      sx={{ 
                        bgcolor: `${post.color}20`,
                        color: post.color,
                        fontWeight: 'bold',
                        border: `1px solid ${post.color}40`
                      }}
                    />
                  </Box>
                  
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    {post.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {post.excerpt}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', color: 'text.secondary', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ fontSize: 16 }} />
                      <Typography variant="caption">{post.date}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon sx={{ fontSize: 16 }} />
                      <Typography variant="caption">{post.readTime}</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ flexGrow: 1 }} />
                  
                  <Button
                    variant="text"
                    endIcon={<ArrowForwardIcon />}
                    component="a"
                    href={post.url}
                    sx={{ 
                      mt: 'auto',
                      alignSelf: 'flex-start',
                      color: post.color,
                      '&:hover': {
                        bgcolor: `${post.color}10`
                      }
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </StyledCard>
            </Slide>
          </Grid>
        ))}
        </Grid>
      </Box>
    </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Blog;
