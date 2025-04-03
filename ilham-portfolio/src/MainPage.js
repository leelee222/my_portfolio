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
  IconButton,
  TextField,
  Zoom,
  Fade,
  Slide,
  Tooltip,
  styled
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Create custom styled components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  transition: 'all 0.3s ease',
  border: `2px solid ${theme.palette.primary.main}20`,
  overflow: 'hidden',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(160, 145, 230, 0.2)',
    border: `2px solid ${theme.palette.primary.main}`,
  }
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: '10px 24px',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '120%',
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'skewX(-20deg)',
    transition: 'all 0.5s ease',
  },
  '&:hover': {
    transform: 'scale(1.05)',
    '&::after': {
      left: '-20%',
    }
  }
}));

const GlowingText = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  color: theme.palette.primary.main,
  textShadow: '0 0 10px rgba(160, 145, 230, 0.5)',
  '&::after': {
    content: "''",
    position: 'absolute',
    width: '0%',
    height: '3px',
    bottom: '-5px',
    left: '0',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.4s ease',
  },
  '&:hover::after': {
    width: '100%',
  }
}));

// Create a custom theme with font imports
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
    fontFamily: "'Nunito', 'Roboto', sans-serif",
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.5px',
    },
    h5: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        
        body {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${mode === 'dark' ? '#1a1a29' : '#f1f1f1'};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${mode === 'dark' ? '#a091e6' : '#6f52ed'};
          border-radius: 10px;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes glow {
          0% { filter: drop-shadow(0 0 2px rgba(160, 145, 230, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(160, 145, 230, 0.7)); }
          100% { filter: drop-shadow(0 0 2px rgba(160, 145, 230, 0.4)); }
        }
      `,
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
  },
});

const Portfolio = () => {
  const [mode, setMode] = useState('dark');
  const [activeSection, setActiveSection] = useState('about');
  const theme = React.useMemo(() => getTheme(mode), [mode]);
  
  const toggleTheme = () => {
    setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
  };
  
  // Projects data
  const projects = [
    {
      title: "AREA",
      description: "Task automation platform (IFTTT type) with ReactJS, Redux, JWT auth, and Tailwind CSS.",
      tech: ["React", "Redux", "Tailwind", "JWT"],
      color: "#6366f1"
    },
    {
      title: "DevOps Project",
      description: "Containerized deployment with CI/CD pipelines and server automation.",
      tech: ["Kubernetes", "Docker", "Jenkins", "Ansible"],
      color: "#8b5cf6"
    },
    {
      title: "Trellix",
      description: "Shopping website with WordPress and responsive designs from Figma.",
      tech: ["WordPress", "Figma", "HTML/CSS"],
      color: "#a78bfa"
    }
  ];
  
  // Skills data
  const skills = {
    devops: ["Docker", "Jenkins", "Ansible", "Kubernetes", "GitHub Actions", "Pentesting"],
    development: ["React", "JavaScript", "HTML/CSS", "Node.js", "NextJS", "VueJS"],
    general: ["UI/UX Design", "Microsoft Office", "Git", "REST API"]
  };

  // Cat Avatar component with animation
  const CatAvatar = () => {
    return (
      <Box sx={{ position: 'relative', width: 180, height: 180, margin: '0 auto', animation: 'float 4s ease-in-out infinite' }}>
        <Box
          component="svg"
          viewBox="0 0 200 200"
          width={180}
          height={180}
          sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0,
            animation: 'glow 3s ease-in-out infinite',
            filter: 'drop-shadow(0 0 8px rgba(160, 145, 230, 0.5))'
          }}
        >
          {/* Cat body */}
          <path
            d="M50,100 C50,70 80,50 100,50 C120,50 150,70 150,100 C150,130 130,160 100,160 C70,160 50,130 50,100"
            fill={theme.palette.primary.main}
          />
          {/* Cat ears */}
          <path
            d="M70,60 L90,80 L60,90 Z"
            fill={theme.palette.primary.main}
          />
          <path
            d="M130,60 L110,80 L140,90 Z"
            fill={theme.palette.primary.main}
          />
          {/* Cat face */}
          <circle cx="85" cy="90" r="5" fill="#000" />
          <circle cx="115" cy="90" r="5" fill="#000" />
          {/* Glasses */}
          <rect x="75" y="85" width="20" height="10" rx="5" fill="none" stroke="#000" strokeWidth="2" />
          <rect x="105" y="85" width="20" height="10" rx="5" fill="none" stroke="#000" strokeWidth="2" />
          <line x1="95" y1="90" x2="105" y2="90" stroke="#000" strokeWidth="2" />
          {/* Cat mouth */}
          <path d="M95,105 Q100,110 105,105" fill="none" stroke="#000" strokeWidth="1" />
          {/* Cat tail */}
          <path
            d="M150,120 Q170,140 180,120"
            fill="none"
            stroke={theme.palette.primary.main}
            strokeWidth="10"
            strokeLinecap="round"
          />
        </Box>
        {/* Shield */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            width: 40,
            height: 40,
            animation: 'pulse 2s infinite'
          }}
        >
          <SecurityIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
        </Box>
      </Box>
    );
  };

  // Skill Bubble component
  const SkillBubble = ({ skill, color, delay }) => (
    <Zoom in={true} style={{ transitionDelay: `${delay}ms` }}>
      <Box 
        sx={{
          bgcolor: color || 'primary.main',
          color: 'white',
          py: 0.5,
          px: 2,
          borderRadius: 10,
          display: 'inline-block',
          m: 0.5,
          boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          cursor: 'default',
          '&:hover': {
            transform: 'translateY(-5px) scale(1.05)',
            boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
          }
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          {skill}
        </Typography>
      </Box>
    </Zoom>
  );

  // Project Card component
  const ProjectCard = ({ project, index }) => (
    <Slide in={true} direction="up" timeout={500 + (index * 100)}>
      <StyledCard>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, height: 60 }}>
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {project.tech.map((tech, i) => (
              <Box 
                key={i}
                sx={{ 
                  bgcolor: `${project.color}40`,
                  color: 'text.primary',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 5,
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </CardContent>
      </StyledCard>
    </Slide>
  );

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {/* Navigation */}
        <Box sx={{ 
          position: 'fixed', 
          top: 20, 
          right: 20, 
          zIndex: 10, 
          display: 'flex', 
          gap: 1,
          flexDirection: 'column',
          alignItems: 'center' 
        }}>
          <Tooltip title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <IconButton 
              onClick={toggleTheme} 
              sx={{ 
                bgcolor: 'background.paper', 
                boxShadow: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'rotate(180deg)',
                  bgcolor: 'primary.main',
                  color: 'white'
                }
              }}
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Contact Me">
            <IconButton 
              onClick={() => scrollToSection('contact')} 
              sx={{ 
                bgcolor: 'background.paper', 
                boxShadow: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  bgcolor: 'primary.main',
                  color: 'white'
                }
              }}
            >
              <EmailIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="GitHub">
            <IconButton 
              component="a" 
              href="https://github.com/leelee222" 
              target="_blank"
              sx={{ 
                bgcolor: 'background.paper', 
                boxShadow: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  bgcolor: 'primary.main',
                  color: 'white'
                }
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Hero Section */}
        <Box 
          id="about"
          sx={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Fade in={true} timeout={1000}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography variant="h6" color="primary" fontWeight="bold" sx={{ mb: 1 }}>
                  👋 Hello, I'm
                </Typography>
                <GlowingText variant="h2" gutterBottom>
                  ADIOS Ilham
                </GlowingText>
                <Typography variant="h5" color="secondary" gutterBottom>
                  Frontend Developer & DevSecOps Junior
                </Typography>
                
                <Typography variant="body1" sx={{ mt: 3, mb: 4, maxWidth: '90%' }}>
                  Aspiring DevOps and Software Engineering professional with hands-on experience in 
                  front-end development, security, and technical project management.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <AnimatedButton 
                    variant="contained" 
                    color="primary"
                    onClick={() => scrollToSection('projects')}
                  >
                    View Projects
                  </AnimatedButton>
                  <AnimatedButton 
                    variant="outlined" 
                    color="primary"
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact Me
                  </AnimatedButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                <CatAvatar />
              </Grid>
            </Grid>
          </Fade>
          
          <Box 
            sx={{ 
              position: 'absolute', 
              bottom: 40, 
              left: '50%', 
              transform: 'translateX(-50%)',
              animation: 'float 2s ease-in-out infinite',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('skills')}
          >
            <ExpandMoreIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          </Box>
        </Box>

        {/* Skills Section */}
        <Box id="skills" sx={{ minHeight: '60vh', py: 10 }}>
          <Fade in={true} timeout={1000}>
            <Typography variant="h2" color="primary" gutterBottom>
              Skills
            </Typography>
          </Fade>
          
          <Fade in={true} timeout={1500}>
            <Typography variant="h5" color="secondary" sx={{ mb: 2 }}>
              DevOps & Security
            </Typography>
          </Fade>
          
          <Box sx={{ mb: 4 }}>
            {skills.devops.map((skill, index) => (
              <SkillBubble 
                key={index} 
                skill={skill} 
                color="#6366f1" 
                delay={index * 100} 
              />
            ))}
          </Box>
          
          <Fade in={true} timeout={1500}>
            <Typography variant="h5" color="secondary" sx={{ mb: 2 }}>
              Development
            </Typography>
          </Fade>
          
          <Box sx={{ mb: 4 }}>
            {skills.development.map((skill, index) => (
              <SkillBubble 
                key={index} 
                skill={skill} 
                color="#8b5cf6" 
                delay={index * 100} 
              />
            ))}
          </Box>
          
          <Fade in={true} timeout={1500}>
            <Typography variant="h5" color="secondary" sx={{ mb: 2 }}>
              General
            </Typography>
          </Fade>
          
          <Box>
            {skills.general.map((skill, index) => (
              <SkillBubble 
                key={index} 
                skill={skill} 
                color="#a78bfa" 
                delay={index * 100} 
              />
            ))}
          </Box>
        </Box>

        {/* Projects Section */}
        <Box id="projects" sx={{ minHeight: '60vh', py: 10 }}>
          <Fade in={true} timeout={1000}>
            <Typography variant="h2" color="primary" gutterBottom>
              Projects and Work Experience
            </Typography>
          </Fade>
          
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProjectCard project={project} index={index} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Education & Experience */}
        <Box id="experience" sx={{ minHeight: '50vh', py: 10 }}>
          <Fade in={true} timeout={1000}>
            <Typography variant="h2" color="primary" gutterBottom>
              Education & Experience
            </Typography>
          </Fade>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Slide in={true} direction="right" timeout={800}>
                <StyledCard sx={{ height: '100%' }}>
                  <Box sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <SchoolIcon sx={{ color: 'primary.main', mr: 1, fontSize: 28 }} />
                      <Typography variant="h5" fontWeight="bold">Education</Typography>
                    </Box>
                    <Box sx={{ p: 2, borderLeft: `3px solid ${theme.palette.primary.main}` }}>
                      <Typography variant="h6">EPITECH BENIN</Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Oct. 2022 – Present
                      </Typography>
                      <Typography variant="body2">
                        Bachelor Degree in Computer Science<br />
                        Data Structures, Algorithms, DevOps, Software Engineering
                      </Typography>
                    </Box>
                  </Box>
                </StyledCard>
              </Slide>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Slide in={true} direction="left" timeout={800}>
                <StyledCard sx={{ height: '100%' }}>
                  <Box sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <WorkIcon sx={{ color: 'primary.main', mr: 1, fontSize: 28 }} />
                      <Typography variant="h5" fontWeight="bold">Experience</Typography>
                    </Box>
                    <Box sx={{ p: 2, borderLeft: `3px solid ${theme.palette.primary.main}` }}>
                      <Typography variant="h6">TRAINING VOLUNTEER - EPITECH X IMPACT</Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        July 2024 – Aug 2024
                      </Typography>
                      <Typography variant="body2">
                        Provided hands-on training in Microsoft Office applications and digital security skills.
                      </Typography>
                    </Box>
                  </Box>
                </StyledCard>
              </Slide>
            </Grid>
          </Grid>
        </Box>

        {/* Contact Section */}
        <Box id="contact" sx={{ minHeight: '60vh', py: 10, pb: 20 }}>
          <Fade in={true} timeout={1000}>
            <Typography variant="h2" color="primary" gutterBottom>
              Contact Me
            </Typography>
          </Fade>
          
          <Zoom in={true} timeout={1000}>
            <StyledCard>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Feel free to reach out if you have any questions or opportunities!
                </Typography>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField 
                    fullWidth 
                    variant="outlined" 
                    label="Your Name"
                    InputProps={{
                      sx: {
                        borderRadius: 3
                      }
                    }}
                  />
                  <TextField 
                    fullWidth 
                    variant="outlined" 
                    label="Your Email"
                    InputProps={{
                      sx: {
                        borderRadius: 3
                      }
                    }}
                  />
                  <TextField 
                    fullWidth 
                    variant="outlined" 
                    label="Message"
                    multiline
                    rows={4}
                    InputProps={{
                      sx: {
                        borderRadius: 3
                      }
                    }}
                  />
                  <AnimatedButton 
                    variant="contained" 
                    color="primary" 
                    sx={{ alignSelf: 'flex-end', mt: 2 }}
                    endIcon={<SendIcon />}
                  >
                    Send Message
                  </AnimatedButton>
                </Box>
              </CardContent>
            </StyledCard>
          </Zoom>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Portfolio;