"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Stack,
  IconButton,
  Badge,
  Divider,
  LinearProgress,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Agriculture as LeafIcon,
  Smartphone as SmartphoneIcon,
  Camera as CameraIcon,
  Water as DropletsIcon,
  Science as TestTubeIcon,
  BugReport as BugIcon,
  ArrowForward as ArrowRightIcon,
  CheckCircle as CheckCircleIcon,
  ShoppingCart as ShoppingCartIcon,
  People as UsersIcon,
  TrendingUp as TrendingUpIcon,
  FlashOn as ZapIcon,
  MyLocation as TargetIcon,
  Verified as AwardIcon,
  Language as GlobeIcon,
  PlayCircleOutline as PlayCircleIcon,
  Star as StarIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    benefits: false,
    features: false,
    app: false,
    marketplace: false,
    contact: false,
  });
  const [mobileOpen, setMobileOpen] = useState(false);

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

    ["hero", "benefits", "features", "app", "marketplace", "contact"].forEach(
      (id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    );

    return () => observer.disconnect();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ["Features", "Benefits", "Mobile App", "Contact"];

  const drawer = (
    <Box
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        height: "100%",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onClick={handleDrawerToggle}
    >
      <Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2, pl: 1 }}
        >
          <Image
            src="/images/logo.png"
            alt="iPaddyCare Logo"
            width={24}
            height={24}
            style={{ height: "auto", maxWidth: "100%" }}
          />
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#1F2A44" }}>
            iPaddyCare
          </Typography>
        </Box>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                href={`#${
                  item === "Mobile App"
                    ? "app"
                    : item.toLowerCase().replace(" ", "")
                }`}
                scroll={true}
                sx={{
                  py: 1.5,
                  "&:hover": { bgcolor: "rgba(212, 160, 23, 0.1)" },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: {
                      color: "#1F2A44",
                      fontWeight: 500,
                      fontSize: "1rem",
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
          bgcolor: "#D4A017",
          color: "#1F2A44",
          "&:hover": {
            bgcolor: "#E0B84B",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          },
          px: 4,
          py: 1.5,
          borderRadius: 6,
          fontWeight: 600,
          fontSize: "1rem",
          mx: 2,
          mb: 2,
        }}
      >
        Get Started
      </Button>
    </Box>
  );

  const features = [
    {
      icon: (
        <CameraIcon sx={{ fontSize: { xs: 32, lg: 40 }, color: "#2F855A" }} />
      ),
      title: "AI Seed Quality Detection",
      description:
        "Automated seed sorting with AI imaging for unmatched purity",
      details:
        "Our advanced AI analyzes seed images to identify and sort varieties, delivering detailed purity reports to ensure top-quality seeds for your fields.",
      path: "/seed_detection",
    },
    {
      icon: (
        <DropletsIcon sx={{ fontSize: { xs: 32, lg: 40 }, color: "#2F855A" }} />
      ),
      title: "Portable Moisture Detection",
      description: "Instant moisture monitoring via your mobile device",
      details:
        "Get real-time, accurate moisture readings in the field with automated logging and expert recommendations for optimal levels.",
      path: "/moisture_detection",
    },
    {
      icon: (
        <TestTubeIcon sx={{ fontSize: { xs: 32, lg: 40 }, color: "#2F855A" }} />
      ),
      title: "Smart Soil pH Monitoring",
      description: "Real-time soil pH analysis with AI-driven insights",
      details:
        "Measure soil pH instantly and receive tailored fertilizer and treatment recommendations, accessible to agricultural officers.",
      path: "/ph_detection",
    },
    {
      icon: <BugIcon sx={{ fontSize: { xs: 32, lg: 40 }, color: "#2F855A" }} />,
      title: "Pest & Disease Detection",
      description: "Early pest and disease detection with mobile imaging",
      details:
        "Capture plant photos for instant AI identification of pests or diseases, with treatment suggestions and supplier locations.",
      path: "/pest_detection",
    },
  ];

  const benefits = [
    {
      icon: (
        <TrendingUpIcon
          sx={{ fontSize: { xs: 24, lg: 28 }, color: "#2F855A" }}
        />
      ),
      title: "Boost Yields",
      description: "Increase crop yields by up to 30% with proactive solutions",
    },
    {
      icon: <ZapIcon sx={{ fontSize: { xs: 24, lg: 28 }, color: "#2F855A" }} />,
      title: "Save Time",
      description: "Cut testing time by 80% with automated tools",
    },
    {
      icon: (
        <TargetIcon sx={{ fontSize: { xs: 24, lg: 28 }, color: "#2F855A" }} />
      ),
      title: "High Precision",
      description: "99.5% accuracy in seed and pest analysis",
    },
    {
      icon: (
        <AwardIcon sx={{ fontSize: { xs: 24, lg: 28 }, color: "#2F855A" }} />
      ),
      title: "Expert Backed",
      description: "Developed with Central Province agricultural experts",
    },
  ];

  const appFeatures = [
    "Multilingual (Sinhala, Tamil, English)",
    "Connect with agriculture officers",
    "AI-driven seed recommendations",
    "Harvest and income forecasts",
    "Integrated marketplace",
    "Full test history",
  ];

  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#F9FAFB",
          fontFamily: "Poppins, sans-serif",
          position: "relative",
        }}
      >
        {/* Navigation */}
        <AppBar
          position="sticky"
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            py: 1,
          }}
        >
          <Toolbar
            sx={{
              maxWidth: "xl",
              width: "100%",
              mx: "auto",
              px: { xs: 1, md: 2 },
              overflowX: "hidden",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Image
                src="/images/logo.png"
                alt="iPaddyCare Logo"
                width={24}
                height={24}
                style={{ height: "auto" }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#1F2A44" }}
              >
                iPaddyCare
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 6,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`#${
                      item === "Mobile App"
                        ? "app"
                        : item.toLowerCase().replace(" ", "")
                    }`}
                    scroll={true}
                  >
                    <Typography
                      component={motion.div}
                      whileHover={{ scale: 1.1, color: "#D4A017" }}
                      sx={{
                        color: "#1F2A44",
                        fontWeight: 500,
                        fontSize: "1rem",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="contained"
                sx={{
                  bgcolor: "#D4A017",
                  color: "#1F2A44",
                  "&:hover": {
                    bgcolor: "#E0B84B",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  },
                  px: 4,
                  py: 1.5,
                  borderRadius: 6,
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
                onClick={() => {
                  /* Add navigation logic for Get Started */
                }}
              >
                Get Started
              </Button>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "flex", md: "none" }, color: "#1F2A44" }}
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
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                width: 250,
                boxSizing: "border-box",
                bgcolor: "transparent",
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
            position: "relative",
            bgcolor: "transparent",
            overflow: "hidden",
          }}
        >
          <Box
            component={motion.div}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "linear-gradient(135deg, #F7E7CE33 0%, #2F855A11 100%)",
              transform: "translateY(10%)",
            }}
          />
          <Container maxWidth="xl" disableGutters>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                }}
              >
                {/* Left: Text, Badges, Buttons, Stats */}
                <Grid item xs={6} sx={{ minWidth: 0, pr: { xs: 1, lg: 2 } }}>
                  <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                    <Badge
                      component={motion.div}
                      whileHover={{ scale: 1.05 }}
                      sx={{
                        bgcolor: "rgba(247, 231, 206, 0.9)",
                        color: "#2F855A",
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 500,
                        fontSize: "0.85rem",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <AwardIcon sx={{ fontSize: 16, mr: 1 }} />
                      Expert Approved
                    </Badge>
                    <Badge
                      component={motion.div}
                      whileHover={{ scale: 1.05 }}
                      sx={{
                        bgcolor: "rgba(247, 231, 206, 0.9)",
                        color: "#2F855A",
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 500,
                        fontSize: "0.85rem",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <GlobeIcon sx={{ fontSize: 16, mr: 1 }} />
                      Multilingual
                    </Badge>
                  </Stack>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: {
                        xs: "clamp(1.5rem, 5vw, 2.5rem)",
                        lg: "clamp(3rem, 5vw, 4rem)",
                      },
                      fontWeight: 700,
                      color: "#1F2A44",
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    Transform Your
                    <Box
                      component="span"
                      sx={{ color: "#2F855A", display: "block" }}
                    >
                      Paddy Farming
                    </Box>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#4B5563",
                      mb: 4,
                      maxWidth: "90%",
                      fontWeight: 400,
                      fontSize: { xs: "0.9rem", lg: "1.1rem" },
                      lineHeight: 1.6,
                    }}
                  >
                    AI-powered tools for seed sorting, moisture detection, soil
                    analysis, and pest management, tailored for Sri Lankan
                    farmers.
                  </Typography>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ mb: 4 }}
                  >
                    <Button
                      component={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variant="contained"
                      size="large"
                      startIcon={<PlayCircleIcon />}
                      sx={{
                        bgcolor: "#D4A017",
                        color: "#1F2A44",
                        "&:hover": {
                          bgcolor: "#E0B84B",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        },
                        px: 3,
                        py: 1,
                        borderRadius: 6,
                        fontWeight: 600,
                        fontSize: { xs: "0.85rem", lg: "1rem" },
                      }}
                    >
                      Watch Demo
                    </Button>
                    <Button
                      component={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variant="outlined"
                      size="large"
                      endIcon={<ArrowRightIcon />}
                      sx={{
                        borderColor: "#2F855A",
                        color: "#2F855A",
                        "&:hover": {
                          bgcolor: "#2F855A11",
                          borderColor: "#2F855A",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        },
                        px: 3,
                        py: 1,
                        borderRadius: 6,
                        fontWeight: 600,
                        fontSize: { xs: "0.85rem", lg: "1rem" },
                      }}
                    >
                      Download App
                    </Button>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      color: "#4B5563",
                      fontSize: { xs: "0.8rem", lg: "0.9rem" },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <StarIcon
                        sx={{ color: "#D4A017", fontSize: { xs: 16, lg: 20 } }}
                      />
                      <Typography sx={{ fontWeight: 600 }}>4.9/5</Typography>
                      <Typography>User Rating</Typography>
                    </Stack>
                    <Divider
                      orientation="vertical"
                      sx={{ height: 20, bgcolor: "#D1D5DB" }}
                    />
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <UsersIcon
                        sx={{ color: "#2F855A", fontSize: { xs: 16, lg: 20 } }}
                      />
                      <Typography sx={{ fontWeight: 600 }}>10,000+</Typography>
                      <Typography>Active Users</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                {/* Right: Image and Card Content */}
                <Grid item xs={6} sx={{ minWidth: 0, pl: { xs: 1, lg: 2 } }}>
                  <Card
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    sx={{
                      p: 2,
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: 3,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Image
                      src="/images/hero.jpg"
                      alt="Modern farming technology"
                      width={600}
                      height={300}
                      component={motion.img}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "inset 0 4px 8px rgba(0,0,0,0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        borderRadius: 12,
                        marginBottom: 16,
                        border: "1px solid #E5E7EB",
                        outline: "3px solid rgba(212, 160, 23, 0.3)",
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                      }}
                    />
                    <Stack spacing={1.5}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          sx={{
                            color: "#1F2A44",
                            fontWeight: 600,
                            fontSize: { xs: "0.8rem", lg: "0.9rem" },
                          }}
                        >
                          AI Analysis Accuracy
                        </Typography>
                        <Typography
                          sx={{
                            color: "#2F855A",
                            fontWeight: 600,
                            fontSize: { xs: "0.8rem", lg: "0.9rem" },
                          }}
                        >
                          99.5% Accurate
                        </Typography>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={99.5}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: "#E5E7EB",
                          "& .MuiLinearProgress-bar": {
                            bgcolor: "#2F855A",
                            transition: "width 0.5s ease-in-out",
                          }}
                        }
                      />
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          color: "#4B5563",
                          fontSize: { xs: "0.75rem", lg: "0.85rem" },
                        }}
                      >
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <BugIcon
                            sx={{
                              fontSize: { xs: 14, lg: 16 },
                              color: "#3B82F6",
                            }}
                          />
                          <Typography>Pest Detection: &lt; 2 min</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <TrendingUpIcon
                            sx={{
                              fontSize: { xs: 14, lg: 16 },
                              color: "#8B5CF6",
                            }}
                          />
                          <Typography>Yield Boost: Up to 30%</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Card>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Benefits Section */}
        <Box
          id="benefits"
          component="section"
          sx={{ py: 8, bgcolor: "#F9FAFB" }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections.benefits ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
            >
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "clamp(1.5rem, 4vw, 2rem)",
                      lg: "clamp(2.25rem, 4vw, 2.75rem)",
                    },
                    fontWeight: 700,
                    color: "#1F2A44",
                    mb: 2,
                  }}
                >
                  Why iPaddyCare?
                </Typography>
                <Typography
                  sx={{
                    color: "#4B5563",
                    maxWidth: "48rem",
                    mx: "auto",
                    fontWeight: 400,
                    fontSize: { xs: "0.85rem", lg: "1rem" },
                  }}
                >
                  Built with expertise from Central Province agricultural
                  officers and the Department of Agriculture, Gannoruwa.
                </Typography>
              </Box>
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "center",
                  overflowX: "auto",
                  overflowY: "visible",
                  boxSizing: "border-box",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                  pb: 2,
                }}
              >
                {benefits.map((benefit, index) => (
                  <Grid
                    key={index}
                    item
                    xs={3}
                    sx={{
                      minWidth: 0,
                      flexShrink: 1,
                      width: { xs: "22vw", lg: "23vw" },
                      maxWidth: { xs: "90px", lg: "280px" },
                      overflow: "visible",
                    }}
                  >
                    <Box sx={{ overflow: "visible" }}>
                      <Card
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          visibleSections.benefits ? { opacity: 1, y: 0 } : {}
                        }
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                        }}
                        sx={{
                          p: { xs: 1.5, lg: 2 },
                          height: "100%",
                          maxHeight: { xs: "160px", lg: "200px" },
                          borderRadius: 3,
                          bgcolor: "rgba(255, 255, 255, 0.9)",
                          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          transition: "all 0.3s ease",
                          overflow: "hidden",
                        }}
                      >
                        <CardContent
                          sx={{ p: { xs: 1, lg: 1.5 }, textAlign: "center" }}
                        >
                          <Box
                            sx={{
                              bgcolor: "rgba(247, 231, 206, 0.5)",
                              width: { xs: 40, lg: 48 },
                              height: { xs: 40, lg: 48 },
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mx: "auto",
                              mb: { xs: 1, lg: 1.5 },
                            }}
                          >
                            {benefit.icon}
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: "#1F2A44",
                              fontSize: { xs: "0.8rem", lg: "1rem" },
                              lineHeight: 1.2,
                              mb: { xs: 0.5, lg: 1 },
                            }}
                          >
                            {benefit.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#4B5563",
                              fontSize: { xs: "0.65rem", lg: "0.85rem" },
                              lineHeight: 1.3,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {benefit.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Features Section */}
        <Box
          id="features"
          component="section"
          sx={{
            py: 12,
            bgcolor: "linear-gradient(135deg, #F9FAFB 0%, #F7E7CE22 100%)",
          }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections.features ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "clamp(1.75rem, 5vw, 2.25rem)",
                      lg: "clamp(2.5rem, 5vw, 3rem)",
                    },
                    fontWeight: 700,
                    color: "#1F2A44",
                    mb: 2,
                  }}
                >
                  Your All-in-One Farming Toolkit
                </Typography>
                <Typography
                  sx={{
                    color: "#4B5563",
                    maxWidth: "48rem",
                    mx: "auto",
                    fontWeight: 400,
                    fontSize: { xs: "0.9rem", lg: "1rem" },
                  }}
                >
                  Comprehensive solutions to tackle every aspect of modern paddy
                  cultivation.
                </Typography>
              </Box>
              <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                <Grid sx={{ width: "100%", maxWidth: 900, mx: "auto" }}>
                  <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="stretch"
                  >
                    {features.map((feature, index) => (
                      <Grid
                        key={index}
                        item
                        xs={12}
                        sm={6}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Link href={feature.path} passHref style={{ textDecoration: 'none', width: '100%' }}>
                          <Card
                            component={motion.div}
                            whileHover={{
                              scale: 1.02,
                              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                            }}
                            sx={{
                              width: "100%",
                              maxWidth: 400,
                              p: { xs: 1.5, lg: 2 },
                              cursor: "pointer",
                              border: "1px solid #E5E7EB",
                              bgcolor: "rgba(255, 255, 255, 0.95)",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                              borderRadius: 2,
                              backdropFilter: "blur(5px)",
                              transition: "all 0.3s ease",
                              height: "100%",
                              overflow: "hidden",
                            }}
                          >
                            <CardContent
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: { xs: 1.5, lg: 2 },
                                p: { xs: 1.5, lg: 2 },
                              }}
                            >
                              <Box
                                sx={{
                                  p: 1,
                                  borderRadius: 2,
                                  bgcolor: "#F7E7CE",
                                  color: "#2F855A",
                                }}
                              >
                                {feature.icon}
                              </Box>
                              <Box>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    fontWeight: 600,
                                    color: "#1F2A44",
                                    fontSize: { xs: "1rem", lg: "1.15rem" },
                                    lineHeight: 1.2,
                                  }}
                                >
                                  {feature.title}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: "#4B5563",
                                    fontSize: { xs: "0.9rem", lg: "0.95rem" },
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  {feature.description}
                                </Typography>
                              </Box>
                            </CardContent>
                          </Card>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Mobile App Section */}
        <Box id="app" component="section" sx={{ py: 12, bgcolor: "#F9FAFB" }}>
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections.app ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Grid
                container
                spacing={4}
                alignItems="center"
                justifyContent="center"
                sx={{
                  flexWrap: { xs: "wrap", lg: "nowrap" },
                  overflow: "hidden",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                <Grid
                  item
                  xs={12}
                  lg={6}
                  sx={{
                    minWidth: 0,
                    flexShrink: 1,
                    order: { xs: 1, lg: 1 },
                  }}
                >
                  <Card
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    sx={{
                      p: 3,
                      bgcolor: "rgba(31, 42, 68, 0.95)",
                      borderRadius: 3,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "white",
                        borderRadius: 2,
                        p: 3,
                      }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ mb: 2 }}
                      >
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              color: "#1F2A44",
                              fontSize: "1.1rem",
                            }}
                          >
                            iPaddyCare
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                          <Box
                            sx={{
                              width: 10,
                              height: 10,
                              bgcolor: "#EF4444",
                              borderRadius: "50%",
                            }}
                          />
                          <Box
                            sx={{
                              width: 10,
                              height: 10,
                              bgcolor: "#F59E0B",
                              borderRadius: "50%",
                            }}
                          />
                          <Box
                            sx={{
                              width: 10,
                              height: 10,
                              bgcolor: "#2F855A",
                              borderRadius: "50%",
                            }}
                          />
                        </Stack>
                      </Stack>
                      <Image
                        src="/images/app.jpg"
                        alt="Mobile app interface"
                        width={600}
                        height={200}
                        component={motion.img}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "inset 0 4px 8px rgba(0,0,0,0.1)",
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: 12,
                          marginBottom: 16,
                          border: "1px solid #E5E7EB",
                          outline: "3px solid rgba(212, 160, 23, 0.3)",
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                        }}
                      />
                      <Stack spacing={1.5} sx={{ fontSize: "0.9rem" }}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography sx={{ color: "#4B5563" }}>
                            Seed Analysis
                          </Typography>
                          <CheckCircleIcon
                            sx={{ color: "#3B82F6", fontSize: 16 }}
                          />
                        </Stack>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography sx={{ color: "#4B5563" }}>
                            Moisture Test
                          </Typography>
                          <CheckCircleIcon
                            sx={{ color: "#3B82F6", fontSize: 16 }}
                          />
                        </Stack>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography sx={{ color: "#4B5563" }}>
                            pH Analysis
                          </Typography>
                          <CheckCircleIcon
                            sx={{ color: "#3B82F6", fontSize: 16 }}
                          />
                        </Stack>
                      </Stack>
                    </Box>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  sx={{
                    minWidth: 0,
                    flexShrink: 1,
                    order: { xs: 2, lg: 2 },
                  }}
                >
                  <Badge
                    sx={{
                      bgcolor: "rgba(247, 231, 206, 0.9)",
                      color: "#2F855A",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      mb: 2,
                      fontWeight: 500,
                      fontSize: "0.85rem",
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <SmartphoneIcon sx={{ fontSize: 16, mr: 1 }} />
                    Mobile App
                  </Badge>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: {
                        xs: "clamp(1.75rem, 5vw, 2.25rem)",
                        lg: "clamp(2.5rem, 5vw, 3rem)",
                      },
                      fontWeight: 700,
                      color: "#1F2A44",
                      mb: 2,
                    }}
                  >
                    Farming at Your Fingertips
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4B5563",
                      mb: 3,
                      fontSize: { xs: "0.9rem", lg: "1rem" },
                      lineHeight: 1.6,
                    }}
                  >
                    Manage your farm with our intuitive mobile app, designed for
                    farmers and agricultural professionals in Sri Lanka.
                  </Typography>
                  <Stack spacing={1.5} sx={{ mb: 3 }}>
                    {appFeatures.map((feature, index) => (
                      <Stack
                        key={index}
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        component={motion.div}
                        initial={{ opacity: 0, x: 10 }}
                        animate={
                          visibleSections.app ? { opacity: 1, x: 0 } : {}
                        }
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        <CheckCircleIcon
                          sx={{ color: "#2F855A", fontSize: 20 }}
                        />
                        <Typography
                          sx={{ color: "#4B5563", fontSize: "0.9rem" }}
                        >
                          {feature}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Button
                      component={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variant="contained"
                      size="large"
                      startIcon={<SmartphoneIcon />}
                      sx={{
                        bgcolor: "#1F2A44",
                        color: "#F9FAFB",
                        "&:hover": {
                          bgcolor: "#374151",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        },
                        px: 4,
                        borderRadius: 6,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      Download for iOS
                    </Button>
                    <Button
                      component={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variant="outlined"
                      size="large"
                      startIcon={<SmartphoneIcon />}
                      sx={{
                        borderColor: "#1F2A44",
                        color: "#1F2A44",
                        "&:hover": {
                          bgcolor: "#1F2A4411",
                          borderColor: "#1F2A44",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        },
                        px: 4,
                        borderRadius: 6,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      Get on Android
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Marketplace Section */}
        <Box
          id="marketplace"
          component="section"
          sx={{
            py: 12,
            bgcolor: "linear-gradient(135deg, #F9FAFB 0%, #F7E7CE22 100%)",
          }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections.marketplace ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Box
                  sx={{
                    bgcolor: "rgba(247, 231, 206, 0.5)",
                    p: 2,
                    borderRadius: "50%",
                    display: "inline-flex",
                    mb: 2,
                  }}
                >
                  <ShoppingCartIcon sx={{ color: "#2F855A", fontSize: 36 }} />
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "clamp(1.75rem, 5vw, 2.25rem)",
                      lg: "clamp(2.5rem, 5vw, 3rem)",
                    },
                    fontWeight: 700,
                    color: "#1F2A44",
                    mb: 2,
                  }}
                >
                  Explore Our Marketplace
                </Typography>
                <Typography
                  sx={{
                    color: "#4B5563",
                    maxWidth: "48rem",
                    mx: "auto",
                    fontWeight: 400,
                    fontSize: { xs: "0.9rem", lg: "1rem" },
                  }}
                >
                  Find premium seeds, tools, and expert services to elevate your
                  farming operations.
                </Typography>
              </Box>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={{
                  flexWrap: "wrap",
                  overflow: "hidden",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {[
                  {
                    icon: <LeafIcon sx={{ color: "#2F855A", fontSize: 28 }} />,
                    title: "Seeds & Fertilizers",
                    description:
                      "High-quality seeds and organic fertilizers from trusted suppliers",
                  },
                  {
                    icon: <ZapIcon sx={{ color: "#2F855A", fontSize: 28 }} />,
                    title: "Tools & Equipment",
                    description:
                      "Advanced tools to enhance your farming efficiency",
                  },
                  {
                    icon: <UsersIcon sx={{ color: "#2F855A", fontSize: 28 }} />,
                    title: "Expert Services",
                    description:
                      "Access professional agricultural consultation and support",
                  },
                ].map((item, index) => (
                  <Grid
                    key={index}
                    sx={{
                      width: { xs: "100%", md: "30%" },
                      maxWidth: { md: "384px" },
                      minWidth: 0,
                      flexShrink: 1,
                    }}
                  >
                    <Card
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        visibleSections.marketplace ? { opacity: 1, y: 0 } : {}
                      }
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                      }}
                      sx={{
                        p: 3,
                        height: "100%",
                        borderRadius: 3,
                        bgcolor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <CardContent>
                        <Box
                          sx={{
                            bgcolor: "rgba(247, 231, 206, 0.5)",
                            width: 50,
                            height: 50,
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: "#1F2A44",
                            mb: 1,
                            fontSize: "1.1rem",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#4B5563",
                            fontSize: "0.9rem",
                            lineHeight: 1.5,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          component="section"
          sx={{
            py: 12,
            bgcolor: "#2F855A",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            component={motion.div}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1 }}
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor:
                "radial-gradient(circle at center, #F7E7CE33 0%, transparent 70%)",
            }}
          />
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "clamp(1.75rem, 5vw, 2.25rem)",
                    lg: "clamp(2.5rem, 5vw, 3rem)",
                  },
                  fontWeight: 700,
                  color: "white",
                  mb: 2,
                }}
              >
                Transform Your Farm Today
              </Typography>
              <Typography
                sx={{
                  color: "#F9FAFB",
                  mb: 4,
                  maxWidth: "48rem",
                  mx: "auto",
                  fontWeight: 400,
                  fontSize: { xs: "0.9rem", lg: "1rem" },
                }}
              >
                Join over 10,000 farmers using iPaddyCare to boost yields and
                streamline operations.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ justifyContent: "center" }}
              >
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#D4A017",
                    color: "#1F2A44",
                    "&:hover": {
                      bgcolor: "#E0B84B",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    },
                    px: 5,
                    py: 1.5,
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: "1rem",
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
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      bgcolor: "white",
                      color: "#2F855A",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    },
                    px: 5,
                    py: 1.5,
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: "1rem",
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
          sx={{ py: 8, bgcolor: "#1F2A44", color: "white" }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={4}>
                <Grid sx={{ width: { xs: "100%", md: "25%" } }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1.5}
                    sx={{ mb: 2 }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="iPaddyCare Logo"
                      width={24}
                      height={24}
                      style={{ height: "auto" }}
                    />
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, fontSize: "1.5rem" }}
                    >
                      iPaddyCare
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "#D1D5DB",
                      mb: 2,
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Empowering Sri Lankan farmers with smart agricultural
                    technology.
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {["Globe", "Smartphone"].map((icon, index) => (
                      <IconButton
                        key={index}
                        component={motion.button}
                        whileHover={{ scale: 1.1 }}
                        sx={{
                          bgcolor: "rgba(255, 255, 255, 0.1)",
                          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                        }}
                      >
                        {icon === "Globe" ? (
                          <GlobeIcon sx={{ color: "white", fontSize: 20 }} />
                        ) : (
                          <SmartphoneIcon
                            sx={{ color: "white", fontSize: 20 }}
                          />
                        )}
                      </IconButton>
                    ))}
                  </Stack>
                </Grid>
                <Grid sx={{ width: { xs: "100%", md: "25%" } }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2, fontSize: "1.1rem" }}
                  >
                    Solutions
                  </Typography>
                  <Stack
                    spacing={1}
                    sx={{ color: "#D1D5DB", fontSize: "0.9rem" }}
                  >
                    <Typography
                      component={motion.div}
                      whileHover={{ color: "white" }}
                    >
                      Seed Quality Detection
                    </Typography>
                    <Typography
                      component={motion.div}
                      whileHover={{ color: "white" }}
                    >
                      Moisture Monitoring
                    </Typography>
                    <Typography
                      component={motion.div}
                      whileHover={{ color: "white" }}
                    >
                      Soil pH Analysis
                    </Typography>
                    <Typography
                      component={motion.div}
                      whileHover={{ color: "white" }}
                    >
                      Pest Detection
                    </Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ width: { xs: "100%", md: "25%" } }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2, fontSize: "1.1rem" }}
                  >
                    Support
                  </Typography>
                  <Stack
                    spacing={1}
                    sx={{ color: "#D1D5DB", fontSize: "0.9rem" }}
                  >
                    <Typography
                      component={motion.div}
                      whileHover={{ color: "white" }}
                    >
                      Documentation
                    </Typography>
                    <Typography
                      component={motion.div}
                      whileHover={{ color: "white" }}
                    >
                      Training Videos
                    </Typography>
                    <Typography
                      component={motion.div}
                      whileHover={{ color: "white" }}
                    >
                      Expert Consultation
                    </Typography>
                    <Typography
                      component={motion.div}
                      whileHover={{ color: "white" }}
                    >
                      24/7 Support
                    </Typography>
                  </Stack>
                </Grid>
                <Grid sx={{ width: { xs: "100%", md: "25%" } }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2, fontSize: "1.1rem" }}
                  >
                    Contact
                  </Typography>
                  <Stack
                    spacing={1}
                    sx={{ color: "#D1D5DB", fontSize: "0.9rem" }}
                  >
                    <Typography>iPaddyCare</Typography>
                    <Typography>Sri Lanka</Typography>
                    <Typography>ipaddycare@gmail.com</Typography>
                    <Typography>+94 11 234 5678</Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Divider sx={{ my: 4, bgcolor: "rgba(255, 255, 255, 0.2)" }} />
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography sx={{ color: "#D1D5DB", fontSize: "0.9rem" }}>
                  © 2025 iPaddyCare. All rights reserved.
                </Typography>
                <Stack direction="row" spacing={3}>
                  {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                    (item, index) => (
                      <Typography
                        key={index}
                        component={motion.div}
                        whileHover={{ color: "white" }}
                        sx={{
                          color: "#D1D5DB",
                          fontSize: "0.9rem",
                          cursor: "pointer",
                        }}
                      >
                        {item}
                      </Typography>
                    )
                  )}
                </Stack>
              </Stack>
            </motion.div>
          </Container>
        </Box>

        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </Box>
    </>
  );
}
