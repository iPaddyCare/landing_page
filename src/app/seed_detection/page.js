"use client";

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Badge,
  Grid,
  LinearProgress,
} from '@mui/material';
import {
  PhotoCamera,
  TrendingUp,
  Assessment,
  ArrowBack,
  Verified as AwardIcon,
  Language as GlobeIcon,
  Menu as MenuIcon,
  Smartphone as SmartphoneIcon,
  PlayArrow as PlayArrowIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const SeedDetection = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    demo: false,
    steps: false,
    cta: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    ['hero', 'demo', 'steps', 'cta'].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const navItems = ['Features', 'Benefits', 'Mobile App', 'Contact'];

  const drawer = (
    <Box
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        height: '100%',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      onClick={handleDrawerToggle}
    >
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, pl: 1 }}>
          <Image
            src="/images/logo.png"
            alt="iPaddyCare Logo"
            width={24}
            height={24}
            style={{ height: 'auto', maxWidth: '100%' }}
          />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1F2A44' }}>
            iPaddyCare
          </Typography>
        </Box>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                href={`#${item === 'Mobile App' ? 'app' : item.toLowerCase().replace(' ', '')}`}
                scroll={true}
                sx={{
                  py: 1.5,
                  '&:hover': { bgcolor: 'rgba(212, 160, 23, 0.1)' },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: {
                      color: '#1F2A44',
                      fontWeight: 500,
                      fontSize: '1rem',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Button
        component={motion.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variant="contained"
        sx={{
          bgcolor: '#D4A017',
          color: '#1F2A44',
          '&:hover': {
            bgcolor: '#E0B84B',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          },
          px: 4,
          py: 1.5,
          borderRadius: 6,
          fontWeight: 600,
          fontSize: '1rem',
          mx: 2,
          mb: 2,
        }}
      >
        Get Started
      </Button>
    </Box>
  );

  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Box sx={{ minHeight: '100vh', bgcolor: '#F9FAFB', fontFamily: 'Poppins, sans-serif', position: 'relative' }}>
        {/* Particles Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              number: { value: 50, density: { enable: true, value_area: 800 } },
              color: { value: ['#2F855A', '#D4A017', '#F7E7CE'] },
              shape: { type: 'circle' },
              opacity: { value: 0.5, random: true },
              size: { value: 3, random: true },
              move: { enable: true, speed: 1, direction: 'none', random: true, out_mode: 'out' },
            },
            interactivity: {
              events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
              modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
            },
            detectRetina: true,
          }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        />

        {/* Navigation */}
        <AppBar
          position="sticky"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            py: 1,
          }}
        >
          <Toolbar
            sx={{
              maxWidth: 'xl',
              width: '100%',
              mx: 'auto',
              px: { xs: 1, md: 2 },
              overflowX: 'hidden',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Image
                src="/images/logo.png"
                alt="iPaddyCare Logo"
                width={24}
                height={24}
                style={{ height: 'auto' }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: '#1F2A44', fontSize: '1.5rem' }}
              >
                iPaddyCare
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`#${item === 'Mobile App' ? 'app' : item.toLowerCase().replace(' ', '')}`}
                    scroll={true}
                  >
                    <Typography
                      component={motion.div}
                      whileHover={{ scale: 1.1, color: '#D4A017' }}
                      sx={{
                        color: '#1F2A44',
                        fontWeight: 500,
                        fontSize: '1rem',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {item}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Button
                    startIcon={<ArrowBack />}
                    variant="outlined"
                    sx={{
                      borderColor: '#2F855A',
                      color: '#2F855A',
                      '&:hover': {
                        bgcolor: '#2F855A11',
                        borderColor: '#2F855A',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      },
                      px: 3,
                      py: 1,
                      borderRadius: 6,
                      fontWeight: 600,
                      fontSize: '1rem',
                    }}
                  >
                    Back to Home
                  </Button>
                </Link>
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  sx={{
                    bgcolor: '#D4A017',
                    color: '#1F2A44',
                    '&:hover': {
                      bgcolor: '#E0B84B',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    },
                    px: 4,
                    py: 1.5,
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#1F2A44' }}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Toolbar>
          <Drawer
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                width: 250,
                boxSizing: 'border-box',
                bgcolor: 'transparent',
              },
            }}
          >
            {drawer}
          </Drawer>
        </AppBar>

        {/* Hero Section */}
        <Box
          id="hero"
          component="section"
          sx={{
            py: { xs: 8, lg: 12 },
            px: { xs: 2, lg: 12 },
            position: 'relative',
            bgcolor: 'transparent',
            overflow: 'hidden',
          }}
        >
          <Box
            component={motion.div}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'linear-gradient(135deg, #F7E7CE33 0%, #2F855A11 100%)',
              transform: 'translateY(10%)',
            }}
          />
          <Container maxWidth="xl" disableGutters>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections.hero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Stack spacing={3} sx={{ maxWidth: 'md', mx: 'auto' }}>
                <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Badge
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      bgcolor: 'rgba(247, 231, 206, 0.9)',
                      color: '#2F855A',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 500,
                      fontSize: '0.85rem',
                      backdropFilter: 'blur(5px)',
                    }}
                  >
                    <AwardIcon sx={{ fontSize: 16, mr: 1 }} />
                    AI-Powered
                  </Badge>
                  <Badge
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      bgcolor: 'rgba(247, 231, 206, 0.9)',
                      color: '#2F855A',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 500,
                      fontSize: '0.85rem',
                      backdropFilter: 'blur(5px)',
                    }}
                  >
                    <GlobeIcon sx={{ fontSize: 16, mr: 1 }} />
                    Smart Sorting
                  </Badge>
                </Stack>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    color: '#1F2A44',
                    fontSize: { xs: 'clamp(1.5rem, 5vw, 2.5rem)', lg: 'clamp(3rem, 5vw, 4rem)' },
                    lineHeight: 1.2,
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  AI-Driven Seed Sorting
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#4B5563',
                    fontWeight: 400,
                    fontSize: { xs: '0.9rem', lg: '1.1rem' },
                    lineHeight: 1.5,
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Precision Purity with Smart Technology
                </Typography>
                <Typography
                  sx={{
                    color: '#4B5563',
                    fontSize: { xs: '0.9rem', lg: '1rem' },
                    lineHeight: 1.8,
                    maxWidth: '90%',
                    textAlign: { xs: 'center', md: 'left' },
                    mx: { xs: 'auto', md: 0 },
                  }}
                >
                  Revolutionize your seed processing with our AI-powered system, integrated with a custom-built sorting machine to detect and remove wild or mixed seeds, ensuring unparalleled purity and efficiency.
                </Typography>
                {/* System Highlights Integrated */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mt: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}
                >
                  {[
                    'Advanced AI image processing',
                    'Integrated sorting machine',
                    'High-purity seed output',
                    'Streamlined workflow',
                  ].map((feature, index) => (
                    <Box
                      key={index}
                      component={motion.div}
                      initial={{ opacity: 0, x: -20 }}
                      animate={visibleSections.hero ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 2,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        flex: 1,
                        border: '1px solid rgba(212, 160, 23, 0.2)',
                        backdropFilter: 'blur(5px)',
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: '#D4A017',
                        }}
                      />
                      <Typography sx={{ color: '#1F2A44', fontSize: '0.85rem', fontWeight: 500 }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  sx={{
                    bgcolor: '#D4A017',
                    color: '#1F2A44',
                    '&:hover': {
                      bgcolor: '#E0B84B',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    },
                    px: 5,
                    py: 1.5,
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: '1rem',
                    mt: 3,
                    alignSelf: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  Start Sorting Now
                </Button>
              </Stack>
            </motion.div>
          </Container>
        </Box>

        {/* Demo Video Section */}
        <Box
          id="demo"
          component="section"
          sx={{
            py: 8,
            bgcolor: 'linear-gradient(135deg, #F9FAFB 0%, #F7E7CE22 100%)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections.demo ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: '#1F2A44',
                    fontSize: { xs: 'clamp(1.75rem, 5vw, 2.25rem)', lg: 'clamp(2.5rem, 5vw, 3rem)' },
                    mb: 2,
                  }}
                >
                  Watch Our AI Sorting in Action
                </Typography>
                <Typography
                  sx={{
                    color: '#4B5563',
                    maxWidth: '48rem',
                    mx: 'auto',
                    fontSize: { xs: '0.9rem', lg: '1rem' },
                    lineHeight: 1.6,
                  }}
                >
                  See how our AI-powered system analyzes seed images and integrates with our custom sorting machine to deliver high-purity seed batches.
                </Typography>
              </Box>
              <Box
                component={motion.div}
                whileHover={{ scale: 1.02, boxShadow: '0 6px 16px rgba(0,0,0,0.15)' }}
                sx={{
                  maxWidth: 700,
                  mx: 'auto',
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    bgcolor: '#1F2A44',
                    overflow: 'hidden',
                  }}
                >
                  {/* Video Placeholder */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: '#2F855A11',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(212, 160, 23, 0.2)',
                      },
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <IconButton
                        component={motion.button}
                        whileHover={{ scale: 1.2, rotate: 10, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
                        whileTap={{ scale: 0.9 }}
                        sx={{
                          bgcolor: '#D4A017',
                          '&:hover': { bgcolor: '#E0B84B' },
                          borderRadius: '50%',
                          width: 60,
                          height: 60,
                          border: '2px solid rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        <PlayArrowIcon sx={{ fontSize: 32, color: '#1F2A44' }} />
                      </IconButton>
                      <Typography
                        sx={{ color: '#F9FAFB', mt: 2, fontSize: '0.9rem', fontWeight: 500 }}
                      >
                        Demo Video Placeholder (Add Your Video Here)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ textAlign: 'center', py: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: '#1F2A44', mb: 1, fontWeight: 600, fontSize: '1.1rem' }}
                  >
                    AI Seed Sorting Demo
                  </Typography>
                  <Typography sx={{ color: '#4B5563', fontSize: '0.9rem', maxWidth: '90%', mx: 'auto' }}>
                    Watch our system detect and sort seeds with precision using AI and our custom-built machine.
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Steps Section (Carousel) */}
        <Box
          id="steps"
          component="section"
          sx={{
            py: 12,
            bgcolor: 'linear-gradient(135deg, #F9FAFB 0%, #F7E7CE22 100%)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections.steps ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: '#1F2A44',
                    fontSize: { xs: 'clamp(1.75rem, 5vw, 2.25rem)', lg: 'clamp(2.5rem, 5vw, 3rem)' },
                    mb: 2,
                  }}
                >
                  How Our System Works
                </Typography>
                <Typography
                  sx={{
                    color: '#4B5563',
                    maxWidth: '48rem',
                    mx: 'auto',
                    fontSize: { xs: '0.9rem', lg: '1rem' },
                    lineHeight: 1.6,
                  }}
                >
                  A seamless process to ensure high-purity seed batches with AI and automation
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  overflowX: 'auto',
                  gap: 3,
                  pb: 2,
                  scrollSnapType: 'x mandatory',
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': { display: 'none' },
                }}
              >
                {[
                  {
                    step: '1',
                    title: 'Capture Seed Batch',
                    description: 'Take a high-resolution photo of your seed batch on a white background',
                    icon: <PhotoCamera sx={{ fontSize: 40, color: '#2F855A' }} />,
                    image: (
                      <Box
                        sx={{
                          width: '100%',
                          height: 180,
                          bgcolor: '#F3F4F6',
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '2px dashed #D1D5DB',
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>
                          <PhotoCamera sx={{ fontSize: 40, color: '#9CA3AF', mb: 1 }} />
                          <Typography sx={{ color: '#9CA3AF', fontSize: '0.85rem' }}>
                            Seed Batch Image
                          </Typography>
                        </Box>
                      </Box>
                    ),
                  },
                  {
                    step: '2',
                    title: 'AI Image Analysis',
                    description: 'Our AI processes the image to detect wild or mixed seeds with precision',
                    icon: <TrendingUp sx={{ fontSize: 40, color: '#2F855A' }} />,
                    image: (
                      <Box
                        sx={{
                          width: '100%',
                          height: 180,
                          bgcolor: '#F3F4F6',
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '2px dashed #D1D5DB',
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>
                          <TrendingUp sx={{ fontSize: 40, color: '#9CA3AF', mb: 1 }} />
                          <Typography sx={{ color: '#9CA3AF', fontSize: '0.85rem' }}>
                            AI Analysis Interface
                          </Typography>
                        </Box>
                      </Box>
                    ),
                  },
                  {
                    step: '3',
                    title: 'Automated Sorting',
                    description: 'Our custom machine sorts seeds based on AI results for maximum purity',
                    icon: <Assessment sx={{ fontSize: 40, color: '#2F855A' }} />,
                    image: (
                      <Box
                        sx={{
                          width: '100%',
                          height: 180,
                          bgcolor: '#F3F4F6',
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '2px dashed #D1D5DB',
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>
                          <Assessment sx={{ fontSize: 40, color: '#9CA3AF', mb: 1 }} />
                          <Typography sx={{ color: '#9CA3AF', fontSize: '0.85rem' }}>
                            Sorting Machine
                          </Typography>
                        </Box>
                      </Box>
                    ),
                  },
                ].map((step, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, x: 50 }}
                    animate={visibleSections.steps ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.2, type: 'spring' }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                    }}
                    sx={{
                      minWidth: { xs: 280, sm: 320 },
                      scrollSnapAlign: 'center',
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: 3,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      backdropFilter: 'blur(10px)',
                      p: 3,
                      mx: { xs: 1, sm: 0 },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          bgcolor: '#2F855A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '1.1rem',
                          mr: 2,
                        }}
                      >
                        {step.step}
                      </Box>
                      {step.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        color: '#1F2A44',
                        fontSize: '1.1rem',
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#4B5563',
                        mb: 3,
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </Typography>
                    {step.image}
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          id="cta"
          component="section"
          sx={{
            py: 12,
            bgcolor: '#2F855A',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1,
          }}
        >
          <Box
            component={motion.div}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'radial-gradient(circle at center, #F7E7CE33 0%, transparent 70%)',
            }}
          />
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections.cta ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  fontSize: { xs: 'clamp(1.75rem, 5vw, 2.25rem)', lg: 'clamp(2.5rem, 5vw, 3rem)' },
                  mb: 2,
                }}
              >
                Transform Your Seed Processing
              </Typography>
              <Typography
                sx={{
                  color: '#F9FAFB',
                  mb: 4,
                  maxWidth: '48rem',
                  mx: 'auto',
                  fontSize: { xs: '0.9rem', lg: '1rem' },
                  lineHeight: 1.6,
                }}
              >
                Leverage our AI-driven system and custom sorting machine to achieve unmatched seed purity and efficiency.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#D4A017',
                    color: '#1F2A44',
                    '&:hover': {
                      bgcolor: '#E0B84B',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    },
                    px: 5,
                    py: 1.5,
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}
                >
                  Start Free Trial
                </Button>
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'white',
                      color: '#2F855A',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    },
                    px: 5,
                    py: 1.5,
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}
                >
                  Schedule Demo
                </Button>
              </Stack>
            </motion.div>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          id="contact"
          sx={{ py: 8, bgcolor: '#1F2A44', color: 'white' }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={4}>
                <Grid sx={{ width: { xs: '100%', md: '25%' } }}>
                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                    <Image
                      src="/images/logo.png"
                      alt="iPaddyCare Logo"
                      width={24}
                      height={24}
                      style={{ height: 'auto' }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
                      iPaddyCare
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: '#D1D5DB',
                      mb: 2,
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                    }}
                  >
                    Empowering Sri Lankan farmers with smart agricultural technology.
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {['Globe', 'Smartphone'].map((icon, index) => (
                      <IconButton
                        key={index}
                        component={motion.button}
                        whileHover={{ scale: 1.1 }}
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
                        }}
                      >
                        {icon === 'Globe' ? (
                          <GlobeIcon sx={{ color: 'white', fontSize: 20 }} />
                        ) : (
                          <SmartphoneIcon sx={{ color: 'white', fontSize: 20 }} />
                        )}
                      </IconButton>
                    ))}
                  </Stack>
                </Grid>
                <Grid sx={{ width: { xs: '100%', md: '25%' } }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2, fontSize: '1.1rem' }}
                  >
                    Solutions
                  </Typography>
                  <Stack spacing={1} sx={{ color: '#D1D5DB', fontSize: '0.9rem' }}>
                    <Typography component={motion.div} whileHover={{ color: 'white' }}>
                      Seed Quality Detection
                    </Typography>
                    <Typography component={motion.div} whileHover={{ color: 'white' }}>
                      Moisture Monitoring
                    </Typography>
                    <Typography component={motion.div} whileHover={{ color: 'white' }}>
                      Soil pH Analysis
                    </Typography>
                    <Typography component={motion.div} whileHover={{ color: 'white' }}>
                      Pest Detection
                    </Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ width: { xs: '100%', md: '25%' } }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2, fontSize: '1.1rem' }}
                  >
                    Support
                  </Typography>
                  <Stack spacing={1} sx={{ color: '#D1D5DB', fontSize: '0.9rem' }}>
                    <Typography component={motion.div} whileHover={{ color: 'white' }}>
                      Documentation
                    </Typography>
                    <Typography component={motion.div} whileHover={{ color: 'white' }}>
                      Training Videos
                    </Typography>
                    <Typography component={motion.div} whileHover={{ color: 'white' }}>
                      Expert Consultation
                    </Typography>
                    <Typography component={motion.div} whileHover={{ color: 'white' }}>
                      24/7 Support
                    </Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ width: { xs: '100%', md: '25%' } }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2, fontSize: '1.1rem' }}
                  >
                    Contact
                  </Typography>
                  <Stack spacing={1} sx={{ color: '#D1D5DB', fontSize: '0.9rem' }}>
                    <Typography>iPaddyCare</Typography>
                    <Typography>Sri Lanka</Typography>
                    <Typography>ipaddycare@gmail.com</Typography>
                    <Typography>+94 11 234 5678</Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Typography sx={{ color: '#D1D5DB', fontSize: '0.9rem' }}>
                  © 2025 iPaddyCare. All rights reserved.
                </Typography>
                <Stack direction="row" spacing={3}>
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                    <Typography
                      key={index}
                      component={motion.div}
                      whileHover={{ color: 'white' }}
                      sx={{
                        color: '#D1D5DB',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            </motion.div>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default SeedDetection;