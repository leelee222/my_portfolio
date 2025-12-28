import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Fade,
  Chip,
  Divider,
  IconButton,
  Tooltip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      marginTop: '2rem',
      marginBottom: '1rem',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.8,
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

const blogPostsData = {
  'devsecops-cicd': {
    title: "Building Secure CI/CD Pipelines with DevSecOps",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "DevSecOps",
    color: "#ef4444",
    content: `
      <h4>Introduction</h4>
      <p>In today's fast-paced development environment, security can't be an afterthought. DevSecOps integrates security practices into every phase of the development lifecycle, ensuring that your applications are secure from the ground up.</p>
      
      <h4>Why DevSecOps Matters</h4>
      <p>Traditional security approaches often create bottlenecks in the development process. DevSecOps automates security testing and integrates it seamlessly into your CI/CD pipeline, allowing teams to:</p>
      <ul>
        <li>Detect vulnerabilities early in the development cycle</li>
        <li>Reduce the cost of fixing security issues</li>
        <li>Maintain development velocity without compromising security</li>
        <li>Ensure compliance with security standards</li>
      </ul>
      
      <h4>Essential Security Tools</h4>
      <p><strong>Trivy:</strong> A comprehensive vulnerability scanner for containers and other artifacts. It detects vulnerabilities in OS packages and application dependencies.</p>
      <p><strong>Gitleaks:</strong> Scans your git repositories for secrets, passwords, and API keys that might have been accidentally committed.</p>
      <p><strong>SonarCloud:</strong> Performs static code analysis to identify bugs, code smells, and security vulnerabilities in your source code.</p>
      
      <h4>Implementing DevSecOps in Your Pipeline</h4>
      <p>Start by integrating automated security scans at key points in your CI/CD pipeline:</p>
      <ol>
        <li>Pre-commit hooks for secret scanning</li>
        <li>Build-time static analysis and dependency checks</li>
        <li>Container image scanning before deployment</li>
        <li>Runtime security monitoring</li>
      </ol>
      
      <h4>Best Practices</h4>
      <p>Make security everyone's responsibility. Provide developers with immediate feedback on security issues, use policy-as-code to enforce security standards, and continuously monitor and update your security tools.</p>
      
      <h4>Conclusion</h4>
      <p>DevSecOps is not just about tools—it's a cultural shift that makes security an integral part of the development process. By automating security testing and making it a shared responsibility, organizations can build more secure applications faster.</p>
    `
  },
  'osint-techniques': {
    title: "OSINT Techniques for Security Researchers",
    date: "December 10, 2024",
    readTime: "8 min read",
    category: "OSINT",
    color: "#10b981",
    content: `
      <h4>Understanding OSINT</h4>
      <p>Open Source Intelligence (OSINT) is the collection and analysis of information from publicly available sources. For security researchers, OSINT is an invaluable tool for reconnaissance, threat intelligence, and vulnerability assessment.</p>
      
      <h4>Core OSINT Tools</h4>
      <p><strong>Maltego:</strong> A powerful data mining tool that visualizes relationships between people, companies, domains, and networks. Perfect for mapping complex infrastructure and identifying potential attack vectors.</p>
      <p><strong>SpiderFoot:</strong> An automation tool that queries over 100 public data sources to gather intelligence about IP addresses, domain names, email addresses, and more.</p>
      <p><strong>TheHarvester:</strong> Specializes in gathering email addresses, subdomains, IPs, and URLs from public sources like search engines and PGP key servers.</p>
      
      <h4>OSINT Methodology</h4>
      <p>Effective OSINT requires a systematic approach:</p>
      <ol>
        <li>Define your objectives and scope</li>
        <li>Identify relevant data sources</li>
        <li>Collect and organize information</li>
        <li>Analyze and correlate findings</li>
        <li>Document and present results</li>
      </ol>
      
      <h4>Legal and Ethical Considerations</h4>
      <p>Always ensure your OSINT activities comply with applicable laws and respect privacy. Only use publicly available information, document your sources, and obtain proper authorization before conducting investigations.</p>
      
      <h4>Advanced Techniques</h4>
      <p>Learn to use advanced search operators, automate data collection with scripts, correlate information from multiple sources, and leverage social media intelligence for comprehensive digital footprint analysis.</p>
      
      <h4>Conclusion</h4>
      <p>OSINT is a critical skill for modern security professionals. By mastering these tools and techniques, you can gather valuable intelligence while staying within legal and ethical boundaries.</p>
    `
  },
  'iac-security': {
    title: "Infrastructure as Code Security with Terraform & Checkov",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Cloud Security",
    color: "#f59e0b",
    content: `
      <h4>The IaC Security Challenge</h4>
      <p>Infrastructure as Code (IaC) has revolutionized cloud infrastructure management, but it also introduces new security challenges. Misconfigurations in IaC templates can lead to serious security vulnerabilities in production environments.</p>
      
      <h4>Why Terraform Security Matters</h4>
      <p>Terraform is one of the most popular IaC tools, but without proper security controls, it can deploy insecure infrastructure at scale. Common security issues include:</p>
      <ul>
        <li>Publicly accessible storage buckets</li>
        <li>Unencrypted data at rest and in transit</li>
        <li>Overly permissive IAM policies</li>
        <li>Missing logging and monitoring configurations</li>
      </ul>
      
      <h4>Introducing Checkov</h4>
      <p>Checkov is a static code analysis tool for IaC that scans Terraform, CloudFormation, Kubernetes, and other IaC configurations for security and compliance issues. It includes over 1,000 built-in policies covering CIS benchmarks, PCI-DSS, and HIPAA requirements.</p>
      
      <h4>Implementing IaC Security Scanning</h4>
      <p>Integrate Checkov into your development workflow:</p>
      <ol>
        <li>Install Checkov in your CI/CD pipeline</li>
        <li>Configure policies based on your compliance requirements</li>
        <li>Scan IaC files before they're merged</li>
        <li>Generate reports and track remediation</li>
      </ol>
      
      <h4>Best Practices</h4>
      <p>Use version control for all IaC code, implement policy-as-code for security standards, automate security scanning in your pipeline, and regularly review and update your security policies. Always use encrypted state files and implement proper access controls.</p>
      
      <h4>Conclusion</h4>
      <p>Securing your Infrastructure as Code is essential for maintaining a strong security posture in the cloud. Tools like Checkov make it easier to catch security issues before they reach production.</p>
    `
  },
  'container-security': {
    title: "Container Security Best Practices",
    date: "November 30, 2024",
    readTime: "7 min read",
    category: "Container Security",
    color: "#3b82f6",
    content: `
      <h4>The Container Security Landscape</h4>
      <p>Containers have become the standard for application deployment, but they introduce unique security challenges. From image vulnerabilities to runtime threats, container security requires a comprehensive approach.</p>
      
      <h4>Key Container Security Risks</h4>
      <ul>
        <li>Vulnerable base images and dependencies</li>
        <li>Misconfigured container runtime settings</li>
        <li>Excessive container privileges</li>
        <li>Insecure container registries</li>
        <li>Lack of network segmentation</li>
      </ul>
      
      <h4>Container Security Tools</h4>
      <p><strong>Image Scanning:</strong> Use tools like Trivy, Clair, or Anchore to scan container images for known vulnerabilities before deployment.</p>
      <p><strong>Runtime Security:</strong> Implement runtime protection with tools like Falco to detect anomalous behavior and potential threats.</p>
      <p><strong>Policy Enforcement:</strong> Use admission controllers like OPA Gatekeeper to enforce security policies in Kubernetes.</p>
      
      <h4>Best Practices for Secure Containers</h4>
      <ol>
        <li>Use minimal base images (distroless or scratch)</li>
        <li>Run containers as non-root users</li>
        <li>Implement resource limits and quotas</li>
        <li>Enable read-only root filesystems</li>
        <li>Use secrets management solutions</li>
        <li>Regularly update and patch images</li>
        <li>Implement network policies for segmentation</li>
      </ol>
      
      <h4>Kubernetes Security Considerations</h4>
      <p>When running containers in Kubernetes, additional security measures are crucial: enable RBAC, use Pod Security Standards, implement network policies, secure the API server, and regularly audit cluster configurations.</p>
      
      <h4>Conclusion</h4>
      <p>Container security is an ongoing process that requires attention at every stage—from build to deployment to runtime. By following these best practices and using the right tools, you can significantly reduce your container attack surface.</p>
    `
  },
  'github-actions-security': {
    title: "Securing GitHub Actions Workflows",
    date: "November 20, 2024",
    readTime: "6 min read",
    category: "DevSecOps",
    color: "#ef4444",
    content: `
      <h4>GitHub Actions Security Overview</h4>
      <p>GitHub Actions has become the go-to CI/CD platform for many organizations, but misconfigurations can lead to serious security vulnerabilities. Understanding and implementing GitHub Actions security best practices is essential for protecting your code and infrastructure.</p>
      
      <h4>Common Security Risks</h4>
      <ul>
        <li>Secrets exposure in logs or artifacts</li>
        <li>Malicious workflow modifications via pull requests</li>
        <li>Untrusted third-party actions</li>
        <li>Excessive workflow permissions</li>
        <li>Supply chain attacks through dependencies</li>
      </ul>
      
      <h4>Securing Secrets</h4>
      <p>Use GitHub's encrypted secrets for sensitive data, never hard-code credentials, mask sensitive outputs in logs, and rotate secrets regularly. Consider using OIDC for temporary credentials instead of long-lived tokens.</p>
      
      <h4>Workflow Security Best Practices</h4>
      <ol>
        <li>Use the principle of least privilege for GITHUB_TOKEN permissions</li>
        <li>Pin actions to specific commit SHAs instead of tags</li>
        <li>Review and audit third-party actions before use</li>
        <li>Implement required approval workflows for production deployments</li>
        <li>Use environment protection rules</li>
        <li>Enable branch protection and required status checks</li>
      </ol>
      
      <h4>Monitoring and Auditing</h4>
      <p>Regularly review workflow runs, enable audit logs for all workflow changes, monitor for suspicious activity, and implement alerts for failed security checks. Use GitHub's security features like Dependabot and code scanning.</p>
      
      <h4>Conclusion</h4>
      <p>GitHub Actions is a powerful platform, but security must be a priority. By following these best practices, you can build secure CI/CD pipelines that protect your code and infrastructure from common threats.</p>
    `
  },
  'social-media-osint': {
    title: "Advanced OSINT: Social Media Intelligence Gathering",
    date: "November 15, 2024",
    readTime: "9 min read",
    category: "OSINT",
    color: "#10b981",
    content: `
      <h4>Social Media as an Intelligence Source</h4>
      <p>Social media platforms are treasure troves of information for OSINT practitioners. From personal connections to corporate leaks, social media intelligence (SOCMINT) can provide valuable insights for security research, threat intelligence, and investigations.</p>
      
      <h4>Major Platforms and Their Intelligence Value</h4>
      <p><strong>LinkedIn:</strong> Professional networks, company information, employee data, and organizational structures.</p>
      <p><strong>Twitter/X:</strong> Real-time information, sentiment analysis, trending topics, and network analysis.</p>
      <p><strong>Facebook:</strong> Personal relationships, location data, event information, and group memberships.</p>
      <p><strong>Instagram:</strong> Visual intelligence, location metadata, and lifestyle patterns.</p>
      
      <h4>SOCMINT Tools and Techniques</h4>
      <p>Use specialized tools like Social Analyzer, Sherlock, and OSINT Framework extensions to automate data collection. Implement reverse image search, metadata analysis, and graph database visualization for relationship mapping.</p>
      
      <h4>Advanced Techniques</h4>
      <ol>
        <li>Cross-platform identity correlation</li>
        <li>Timeline analysis for pattern detection</li>
        <li>Network mapping and influence analysis</li>
        <li>Sentiment analysis and trend tracking</li>
        <li>Geolocation and movement pattern analysis</li>
      </ol>
      
      <h4>Privacy and Ethics</h4>
      <p>Social media OSINT must be conducted ethically and legally. Respect privacy settings, comply with platform terms of service, obtain proper authorization for investigations, and consider the impact of your research on individuals' privacy.</p>
      
      <h4>Data Collection Best Practices</h4>
      <p>Document your methodology, preserve evidence properly, maintain chain of custody, use VPNs and privacy tools to protect your identity, and be aware of data protection regulations like GDPR.</p>
      
      <h4>Operational Security</h4>
      <p>When conducting SOCMINT operations, protect your own identity and operations. Use dedicated research accounts, avoid revealing your investigation techniques, and be cautious of anti-OSINT measures employed by sophisticated targets.</p>
      
      <h4>Conclusion</h4>
      <p>Social media intelligence is a powerful component of modern OSINT, but it requires careful attention to legal, ethical, and operational security considerations. Master these techniques to extract valuable intelligence while maintaining professional and ethical standards.</p>
    `
  }
};

const BlogPost = () => {
  const { postId } = useParams();
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

  const post = blogPostsData[postId];

  if (!post) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box sx={{ minHeight: '100vh', py: 8, textAlign: 'center' }}>
            <Typography variant="h2" color="primary">Post Not Found</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              The blog post you're looking for doesn't exist.
            </Typography>
            <IconButton 
              component="a"
              href="/blog"
              sx={{ mt: 4 }}
            >
              <ArrowBackIcon /> Back to Blog
            </IconButton>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

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
        <Tooltip title="Back to Blog" placement="right">
          <IconButton 
            component="a"
            href="/blog"
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
          <Box sx={{ maxWidth: '800px', mx: 'auto', px: { xs: 2, md: 4 } }}>
            <Fade in={true} timeout={1000}>
              <Box>
                <Box sx={{ mb: 4 }}>
                  <Chip 
                    label={post.category}
                    sx={{ 
                      bgcolor: post.color,
                      color: 'white',
                      fontWeight: 600,
                      mb: 2
                    }}
                  />
                  <Typography variant="h2" color="primary" gutterBottom>
                    {post.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 3, mt: 2, color: 'text.secondary' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarTodayIcon fontSize="small" />
                      <Typography variant="body2">{post.date}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon fontSize="small" />
                      <Typography variant="body2">{post.readTime}</Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box 
                  sx={{ 
                    textAlign: 'left',
                    '& h4': {
                      color: 'primary.main',
                      mt: 4,
                      mb: 2,
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      textAlign: 'left',
                    },
                    '& p': {
                      mb: 2,
                      lineHeight: 1.8,
                      fontSize: '1.125rem',
                      textAlign: 'justify',
                    },
                    '& ul, & ol': {
                      mb: 2,
                      pl: 3,
                      textAlign: 'left',
                      '& li': {
                        mb: 1,
                        lineHeight: 1.8,
                        fontSize: '1.125rem',
                        textAlign: 'justify',
                      }
                    },
                    '& strong': {
                      color: 'primary.main',
                      fontWeight: 600,
                    }
                  }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <Divider sx={{ my: 4 }} />

                <Box sx={{ textAlign: 'center' }}>
                  <IconButton 
                    component="a"
                    href="/blog"
                    sx={{ 
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <ArrowBackIcon sx={{ mr: 1 }} />
                    <Typography>Back to Blog</Typography>
                  </IconButton>
                </Box>
              </Box>
            </Fade>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default BlogPost;
