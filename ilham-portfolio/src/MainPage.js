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
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import BusinessIcon from '@mui/icons-material/Business';
import Divider from '@mui/material/Divider';
import DevicesIcon from '@mui/icons-material/Devices';
import SearchIcon from '@mui/icons-material/Search';

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
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h5: {
      fontWeight: 600,
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
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Lexend';
          font-style: normal;
          font-weight: 500;
          src: url('/Lexend-Medium.ttf') format('truetype');
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Lexend';
          font-style: normal;
          font-weight: 600;
          src: url('/Lexend-SemiBold.ttf') format('truetype');
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Lexend';
          font-style: normal;
          font-weight: 700;
          src: url('/Lexend-Bold.ttf') format('truetype');
          font-display: swap;
        }
        
        body {
          scroll-behavior: smooth;
          font-family: 'Lexend', sans-serif;
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

  const projects = [
    {
      title: "AREA",
      description: "Task automation platform (IFTTT-like) built using ReactJS, Redux, and JWT authentication.",
      tech: ["React", "Redux", "REST API", "JWT"],
      color: "#6366f1"
    },
    {
      title: "Gestionnaire de Contrats",
      description: "Web application for streamlined employment contract management with ReactJS front-end and Django back-end. Features contract tracking, expiration alerts, and compliance management for HR personnel.",
      tech: ["React", "Django", "Contract Management", "HR System"],
      color: "#10b981"
    },
    {
      title: "Whanos",
      description: "CI/CD infrastructure project integrating Docker, Jenkins, and Kubernetes for automated deployment.",
      tech: ["Docker", "Jenkins", "Kubernetes", "IaC"],
      color: "#8b5cf6"
    },
    {
      title: "Personal Portfolio",
      description: "Interactive portfolio website built with React and Material UI with dark/light mode and animations.",
      tech: ["React", "Material UI", "JavaScript", "Responsive Design"],
      color: "#a78bfa"
    },
    {
      title: "Secure Pipeline Demo",
      description: "End-to-end DevSecOps pipeline integrating CI/CD, Docker security, IaC scans, and automated Kubernetes deployment.",
      tech: ["GitHub Actions", "Docker", "Trivy", "Gitleaks", "SonarQube", "Kubernetes", "Minikube"],
      color: "#10b981"
    },
    {
      title: "IaC Cloud Security Demo",
      description: "Infrastructure-as-Code project provisioning secure AWS resources with Terraform, hardened using Checkov, and integrated into an automated cloud deployment pipeline.",
      tech: ["Terraform", "AWS", "Checkov", "IAM", "S3", "EC2", "CloudTrail"],
      color: "#f59e0b"
    }
  ];

  const workExperience = [
    {
      company: "YemalinTech",
      role: "Frontend & Mobile Development Intern",
      period: "April 2025- September 2025",
      description: [
        "Developed and maintained mobile app (StationMap) and web dashboard for petroleum group",
        "Built responsive and intuitive interfaces using Next.js (web) and React Native (mobile)",
        "Improved UI/UX consistency across platforms ensuring seamless user experience"
      ],
      color: "#8b5cf6"
    },
    {
      company: "CDPAT-AFRIQUE",
      role: "Fullstack Development Intern",
      period: "Oct 2024 - Jan 2025",
      description: [
        "Developed with ReactJS for frontend and Django for backend services",
        "Implemented CI/CD pipelines for automated testing and deployment",
        "Built RESTful APIs and integrated database functionality"
      ],
      color: "#8b5cf6"
    },
    {
      company: "TRELLIX",
      role: "Front-End Intern",
      period: "Aug 2023 - Nov 2023",
      description: [
        "Developed a WordPress shopping website with enhanced UX",
        "Translated Figma designs into responsive front-end code",
        "Collaborated with design and development teams to maintain consistency"
      ],
      color: "#a78bfa"
    },
    {
      company: "EPITECH X IMPACT",
      role: "Training Volunteer",
      period: "July 2024 - Aug 2024",
      description: [
        "Engaged with participants through interactive training sessions",
        "Provided hands-on training in Microsoft Office applications",
        "Taught digital security fundamentals and best practices"
      ],
      color: "#c084fc"
    }
  ];

  // const skills = {
  //   devops: {
  //     tools: ["Docker", "Jenkins", "Ansible", "Kubernetes", "GitHub Actions", "GitLab", "CI/CD"],
  //     focus: "Automation, Containerization, CI/CD"
  //   },
  //   security: {
  //     tools: ["SpiderFoot", "Metaploist", "Maltego", "TheHarvester", "OSINT Framework", "Nmap", "Burp Suite", "SQLMap", "Hydra"],
  //     focus: "OSINT, Pentesting, Network Recon, Intelligence Gathering, Digital Investigations"
  //   },
  //   development: {
  //     tools: ["Python", "React", "Node.js", "HTML/CSS", "NextJS", "MongoDB", "Git", "React Native"],
  //     focus: "Responsive UI, Web & Mobile Apps"
  //   },
  // };

  const skills = {
    devsecops: {
      tools: [
        "GitHub Actions",
        "Jenkins",
        "SonarCloud",
        "Trivy",
        "Gitleaks",
        "Checkov",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible"
      ],
      focus: "Secure CI/CD, IaC Security, Cloud Security, Container Security"
    },
    devops: {
      tools: [
        "Docker",
        "Jenkins",
        "Ansible",
        "Kubernetes",
        "GitHub Actions",
        "GitLab",
        "CI/CD"
      ],
      focus: "Automation, Containerization, Continuous Delivery"
    },
    security: {
      tools: [
        "SpiderFoot",
        "Metasploit",
        "Maltego",
        "TheHarvester",
        "OSINT Framework",
        "Nmap",
        "Burp Suite",
        "SQLMap",
        "Hydra"
      ],
      focus: "OSINT, Pentesting, Reconnaissance, Digital Investigations"
    },
    development: {
      tools: [
        "Python",
        "React",
        "Node.js",
        "HTML/CSS",
        "NextJS",
        "MongoDB",
        "Git",
        "React Native"
      ],
      focus: "Responsive UI, Web & Mobile Applications"
    }
  };


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

  const CatAvatar = () => {
    return (
      <Box sx={{
        position: 'relative',
        width: 220,
        height: 220,
        margin: '0 auto',
        animation: 'float 4s ease-in-out infinite',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box
          component="img"
          src="/cat-avatar.png"
          alt="Profile Avatar"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            animation: 'glow 3s ease-in-out infinite',
            filter: 'drop-shadow(0 0 8px rgba(160, 145, 230, 0.5))',
            borderRadius: '50%',
          }}
        />

        {/* DevSecOps badge */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            bgcolor: 'background.paper',
            borderRadius: '50%',
            p: 0.5,
            boxShadow: 3
          }}
        >
          <SecurityIcon sx={{ fontSize: 34, color: 'primary.main' }} />
        </Box>
      </Box>
    );
  };

  const ProjectCard = ({ project, index }) => (
    <Slide in={true} direction="up" timeout={500 + (index * 100)}>
      <StyledCard sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}>
        <CardContent sx={{ p: 3, flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
            <FolderSpecialIcon sx={{ color: project.color, mr: 1.5, fontSize: 24 }} />
            <Typography variant="h5" fontWeight="bold">
              {project.title}
            </Typography>
          </Box>
          <Divider sx={{ mb: 2, borderColor: `${project.color}40` }} />
          <Typography variant="body2" sx={{ mb: 2, minHeight: 60 }}>
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 'auto' }}>
            {project.tech.map((tech, i) => (
              <Box
                key={i}
                sx={{
                  bgcolor: `${project.color}20`,
                  color: 'text.primary',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 5,
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  border: `1px solid ${project.color}40`
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

  const ExperienceCard = ({ experience, index }) => (
    <Slide in={true} direction={index % 2 === 0 ? "right" : "left"} timeout={500 + (index * 100)}>
      <StyledCard sx={{ height: '100%', mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
            <BusinessIcon sx={{ color: experience.color, mr: 1.5, fontSize: 24 }} />
            <Typography variant="h5" fontWeight="bold" color="primary">
              {experience.role}
            </Typography>
          </Box>
          <Divider sx={{ mb: 2, borderColor: `${experience.color}40` }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {experience.company}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                bgcolor: `${experience.color}30`,
                px: 2,
                py: 0.5,
                borderRadius: 5,
                fontWeight: 'medium'
              }}
            >
              {experience.period}
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            {experience.description.map((item, i) => (
              <Typography key={i} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'flex-start' }}>
                <Box
                  component="span"
                  sx={{
                    minWidth: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    bgcolor: experience.color,
                    display: 'inline-block',
                    mr: 1.5,
                    mt: 0.7
                  }}
                />
                {item}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 'auto' }}>
            {experience.tags && experience.tags.map((tag, i) => (
              <Box
                key={i}
                sx={{
                  bgcolor: `${experience.color}20`,
                  color: 'text.primary',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 5,
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  border: `1px solid ${experience.color}40`
                }}
              >
                {tag}
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

          <Tooltip title="LinkedIn">
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/adios-ilham-152226239/"
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
              <LinkedInIcon />
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
                  Full Stack Developer & Junior DevSecOps Engineer
                </Typography>

                <Typography variant="body1" sx={{ mt: 3, mb: 4, maxWidth: '90%' }}>
                  Passionate Full Stack Developer at the end of my Bachelor's in Computer Science at EPITECH, with hands-on experience building secure, scalable web and mobile applications. I specialize in end-to-end development from responsive frontends with React/Next.js to robust backends with Node.js and Django, complemented by strong DevSecOps practices. My expertise spans designing intuitive user interfaces, architecting secure APIs, and implementing CI/CD pipelines with Docker and Kubernetes. With a keen interest in cybersecurity, I integrate security best practices throughout development. Recently completed internship developing mobile applications for the petroleum industry and now contributing to automation platforms, driven by creating digital solutions that are both user-friendly and security-conscious.
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

        <Box id="skills" sx={{ mt: 3, maxWidth: '900px', mx: 'auto' }}>
          <Typography variant="h2" color="primary" gutterBottom>
            Skills
          </Typography>
          <Divider sx={{ width: '80px', height: '3px', bgcolor: 'primary.main', mb: 4, mx: 'auto' }} />

          <StyledCard sx={{ mb: 4 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <DevicesIcon sx={{ color: '#6366f1', mr: 1.5, fontSize: 24 }} />
                <Typography variant="h5" fontWeight="bold" color="primary">
                  DevOps
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
                Focus: {skills.devops.focus}
              </Typography>
              <Divider sx={{ mb: 3, borderColor: '#6366f140' }} />
              <Box>
                {skills.devops.tools.map((skill, index) => (
                  <SkillBubble
                    key={index}
                    skill={skill}
                    color="#6366f1"
                    delay={index * 100}
                  />
                ))}
              </Box>
            </CardContent>
          </StyledCard>

          <StyledCard sx={{ mb: 4 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <SecurityIcon sx={{ color: '#10b981', mr: 1.5, fontSize: 24 }} />
                <Typography variant="h5" fontWeight="bold" color="primary">
                  Cybersecurity
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
                Focus: {skills.security.focus}
              </Typography>
              <Divider sx={{ mb: 3, borderColor: '#10b98140' }} />
              <Box>
                {skills.security.tools.map((skill, index) => (
                  <SkillBubble
                    key={index}
                    skill={skill}
                    color="#10b981"
                    delay={index * 100}
                  />
                ))}
              </Box>
            </CardContent>
          </StyledCard>

          <StyledCard sx={{ mb: 4 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <CodeIcon sx={{ color: '#8b5cf6', mr: 1.5, fontSize: 24 }} />
                <Typography variant="h5" fontWeight="bold" color="primary">
                  Frontend/Mobile Development
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
                Focus: {skills.development.focus}
              </Typography>
              <Divider sx={{ mb: 3, borderColor: '#8b5cf640' }} />
              <Box>
                {skills.development.tools.map((skill, index) => (
                  <SkillBubble
                    key={index}
                    skill={skill}
                    color="#8b5cf6"
                    delay={index * 100}
                  />
                ))}
              </Box>
            </CardContent>
          </StyledCard>
        </Box>

        <Box id="projects" sx={{ minHeight: '60vh', py: 8, px: { xs: 1, md: 4 } }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h2" color="primary" gutterBottom>
                Projects
              </Typography>
              <Divider sx={{ width: '80px', height: '3px', bgcolor: 'primary.main', mb: 4 }} />
              <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: '800px', mb: 3 }}>
                Here are some of the key projects I've worked on. Each one has helped me develop my skills
                in different areas of software engineering and DevOps.
              </Typography>
            </Box>
          </Fade>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: '900px' }}>
              {projects.map((project, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <ProjectCard project={project} index={index} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box id="work" sx={{ minHeight: '60vh', py: 8, px: { xs: 1, md: 4 } }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h2" color="primary" gutterBottom>
                Work Experience
              </Typography>
              <Divider sx={{ width: '80px', height: '3px', bgcolor: 'primary.main', mb: 4 }} />
              <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: '800px', mb: 3 }}>
                My professional journey has equipped me with practical experience in frontend development,
                fullstack solutions, and digital literacy training.
              </Typography>
            </Box>
          </Fade>

          <Box sx={{ mt: 3, maxWidth: '900px', mx: 'auto' }}>
            {workExperience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </Box>
        </Box>


        <Box id="education" sx={{ minHeight: '50vh', py: 8, px: { xs: 1, md: 4 } }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h2" color="primary" gutterBottom>
                Education
              </Typography>
              <Divider sx={{ width: '80px', height: '3px', bgcolor: 'primary.main', mb: 4 }} />
            </Box>
          </Fade>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>
              <Slide in={true} direction="up" timeout={800}>
                <StyledCard sx={{ height: '100%', overflow: 'visible', position: 'relative', mb: 5 }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -25,
                      left: { xs: 20, md: 40 },
                      bgcolor: theme.palette.primary.main,
                      p: 1.5,
                      borderRadius: 2,
                      boxShadow: 3
                    }}
                  >
                    <SchoolIcon sx={{ color: 'white', fontSize: 32 }} />
                  </Box>
                  <Box sx={{ p: { xs: 3, md: 4 }, pt: { xs: 4, md: 5 } }}>
                    <Typography variant="h4" fontWeight="bold" color="primary" sx={{ mb: 2 }}>
                      EPITECH BENIN
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                      <Typography variant="h6" fontWeight="medium">
                        Bachelor Degree in Computer Science
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: 5,
                          fontWeight: 'medium'
                        }}
                      >
                        Oct. 2022 – Sept 2025
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 3, borderColor: 'primary.light' }} />
                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                      Relevant Coursework:
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 4 }}>
                      {['Data Structures', 'Algorithms', 'DevOps', 'Software Engineering'].map((course, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                          <Box
                            sx={{
                              bgcolor: `${theme.palette.primary.main}15`,
                              p: 1.5,
                              borderRadius: 2,
                              textAlign: 'center',
                              border: `1px solid ${theme.palette.primary.main}30`,
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-3px)',
                                bgcolor: `${theme.palette.primary.main}25`,
                              }
                            }}
                          >
                            <Typography variant="body1" fontWeight="medium">
                              {course}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>

                    {/* Integrated Cybersecurity Achievements in the same card */}
                    <Divider sx={{ mb: 3, borderColor: 'primary.light' }} />
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                      Cybersecurity Achievements:
                    </Typography>

                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: `${theme.palette.primary.main}10`,
                            border: `1px solid ${theme.palette.primary.main}30`,
                            height: '100%',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-3px)',
                              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                            }
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box
                              sx={{
                                bgcolor: '#ef4444',
                                p: 1,
                                borderRadius: '50%',
                                mr: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <SecurityIcon sx={{ color: 'white', fontSize: 20 }} />
                            </Box>
                            <Box>
                              <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                                Hackerlab 2024 – Top 10
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Competed in various challenges including web vulnerabilities and OSINT exploitation
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: `${theme.palette.primary.main}10`,
                            border: `1px solid ${theme.palette.primary.main}30`,
                            height: '100%',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-3px)',
                              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                            }
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box
                              sx={{
                                bgcolor: '#f59e0b',
                                p: 1,
                                borderRadius: '50%',
                                mr: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <SearchIcon sx={{ color: 'white', fontSize: 20 }} />
                            </Box>
                            <Box>
                              <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                                OSINT Investigations
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Conducted OSINT investigations on anonymized targets – Research and analysis of public data
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </StyledCard>
              </Slide>
            </Grid>
          </Grid>
        </Box>

        {/* Remove the separate divider and Cybersecurity Achievements section */}

        {/* <Box id="education" sx={{ minHeight: '50vh', py: 8, px: { xs: 1, md: 4 } }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h2" color="primary" gutterBottom>
                Education
              </Typography>
              <Divider sx={{ width: '80px', height: '3px', bgcolor: 'primary.main', mb: 4 }} />
            </Box>
          </Fade>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>
              <Slide in={true} direction="up" timeout={800}>
                <StyledCard sx={{ height: '100%', overflow: 'visible', position: 'relative' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -25,
                      left: { xs: 20, md: 40 },
                      bgcolor: theme.palette.primary.main,
                      p: 1.5,
                      borderRadius: 2,
                      boxShadow: 3
                    }}
                  >
                    <SchoolIcon sx={{ color: 'white', fontSize: 32 }} />
                  </Box>
                  <Box sx={{ p: { xs: 3, md: 4 }, pt: { xs: 4, md: 5 } }}>
                    <Typography variant="h4" fontWeight="bold" color="primary" sx={{ mb: 2 }}>
                      EPITECH BENIN
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                      <Typography variant="h6" fontWeight="medium">
                        Bachelor Degree in Computer Science
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: 5,
                          fontWeight: 'medium'
                        }}
                      >
                        Oct. 2022 – Present
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 3, borderColor: 'primary.light' }} />
                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                      Relevant Coursework:
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      {['Data Structures', 'Algorithms', 'DevOps', 'Software Engineering'].map((course, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                          <Box
                            sx={{
                              bgcolor: `${theme.palette.primary.main}15`,
                              p: 1.5,
                              borderRadius: 2,
                              textAlign: 'center',
                              border: `1px solid ${theme.palette.primary.main}30`,
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-3px)',
                                bgcolor: `${theme.palette.primary.main}25`,
                              }
                            }}
                          >
                            <Typography variant="body1" fontWeight="medium">
                              {course}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </StyledCard>
              </Slide>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 3, borderColor: 'primary.light' }} />

        <Typography variant="h6" sx={{ mb: 1.5 }}>
          Cybersecurity Achievements:
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
            <SecurityIcon sx={{ color: theme.palette.primary.main, mr: 1.5, fontSize: 20, mt: 0.5 }} />
            <Box>
              <Typography variant="body1" fontWeight="medium">
                Hackerlab 2024 – Top 10 (CTF & Cybersecurity)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Competed in various challenges including web vulnerabilities and OSINT exploitation
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
            <SearchIcon sx={{ color: theme.palette.primary.main, mr: 1.5, fontSize: 20, mt: 0.5 }} />
            <Box>
              <Typography variant="body1" fontWeight="medium">
                OSINT Investigations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Conducted OSINT investigations on anonymized targets – Research and analysis of public data
              </Typography>
            </Box>
          </Box>
        </Box> */}

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