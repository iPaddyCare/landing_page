"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Stack,
  Badge,
  Divider,
  LinearProgress,
  Typography,
  Button,
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
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

// Import your custom language hook
import { useLanguage } from '../hooks/useLanguage';

export default function Home() {
  const { t } = useLanguage(); // Use your custom hook instead of next-i18next
  
  const [activeFeature, setActiveFeature] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    benefits: false,
    features: false,
    app: false,
    marketplace: false,
    contact: false,
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

    ["hero", "benefits", "features", "app", "marketplace", "contact"].forEach(
      (id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    );

    return () => observer.disconnect();
  }, []);





  const features = [
    {
      icon: (
        <CameraIcon sx={{ fontSize: { xs: 32, lg: 40 }, color: "#2F855A" }} />
      ),
      title: t('features.ai_seed_quality'),
      description: t('features.ai_seed_quality_desc'),
      details: t('features.ai_seed_quality_details'),
      path: "/seed_detection",
    },
    {
      icon: (
        <DropletsIcon sx={{ fontSize: { xs: 32, lg: 40 }, color: "#2F855A" }} />
      ),
      title: t('features.moisture_detection'),
      description: t('features.moisture_detection_desc'),
      details: t('features.moisture_detection_details'),
      path: "/moisture_detection",
    },
    {
      icon: (
        <TestTubeIcon sx={{ fontSize: { xs: 32, lg: 40 }, color: "#2F855A" }} />
      ),
      title: t('features.soil_ph'),
      description: t('features.soil_ph_desc'),
      details: t('features.soil_ph_details'),
      path: "/ph_detection",
    },
    {
      icon: <BugIcon sx={{ fontSize: { xs: 32, lg: 40 }, color: "#2F855A" }} />,
      title: t('features.pest_disease'),
      description: t('features.pest_disease_desc'),
      details: t('features.pest_disease_details'),
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
      title: t('benefits.boost_yields'),
      description: t('benefits.boost_yields_desc'),
    },
    {
      icon: <ZapIcon sx={{ fontSize: { xs: 24, lg: 28 }, color: "#2F855A" }} />,
      title: t('benefits.save_time'),
      description: t('benefits.save_time_desc'),
    },
    {
      icon: (
        <TargetIcon sx={{ fontSize: { xs: 24, lg: 28 }, color: "#2F855A" }} />
      ),
      title: t('benefits.high_precision'),
      description: t('benefits.high_precision_desc'),
    },
    {
      icon: (
        <AwardIcon sx={{ fontSize: { xs: 24, lg: 28 }, color: "#2F855A" }} />
      ),
      title: t('benefits.expert_backed'),
      description: t('benefits.expert_backed_desc'),
    },
  ];

  const appFeatures = [
    t('mobile_app.multilingual'),
    t('mobile_app.connect_officers'),
    t('mobile_app.ai_recommendations'),
    t('mobile_app.harvest_forecasts'),
    t('mobile_app.integrated_marketplace'),
    t('mobile_app.test_history'),
  ];

  const marketplaceItems = [
    {
      icon: <LeafIcon sx={{ color: "#2F855A", fontSize: 28 }} />,
      title: t('marketplace.seeds_fertilizers'),
      description: t('marketplace.seeds_fertilizers_desc'),
    },
    {
      icon: <ZapIcon sx={{ color: "#2F855A", fontSize: 28 }} />,
      title: t('marketplace.tools_equipment'),
      description: t('marketplace.tools_equipment_desc'),
    },
    {
      icon: <UsersIcon sx={{ color: "#2F855A", fontSize: 28 }} />,
      title: t('marketplace.expert_services'),
      description: t('marketplace.expert_services_desc'),
    },
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
        <Navbar />

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
                      {t('hero.badge_expert_approved')}
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
                      {t('hero.badge_multilingual')}
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
                    {t('hero.title_transform')}
                    <Box
                      component="span"
                      sx={{ color: "#2F855A", display: "block" }}
                    >
                      {t('hero.title_paddy_farming')}
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
                    {t('hero.description')}
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
                      {t('hero.watch_demo')}
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
                      {t('hero.download_app')}
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
                      <Typography sx={{ fontWeight: 600 }}>4.9</Typography>
                      <Typography>{t('hero.user_rating')}</Typography>
                    </Stack>
                    <Divider
                      orientation="vertical"
                      sx={{ height: 20, bgcolor: "#D1D5DB" }}
                    />
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <UsersIcon
                        sx={{ color: "#2F855A", fontSize: { xs: 16, lg: 20 } }}
                      />
                      <Typography sx={{ fontWeight: 600 }}>10K+</Typography>
                      <Typography>{t('hero.active_users')}</Typography>
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
                          {t('hero.ai_analysis_accuracy')}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#2F855A",
                            fontWeight: 600,
                            fontSize: { xs: "0.8rem", lg: "0.9rem" },
                          }}
                        >
                          99.5% {t('hero.accurate')}
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
                          },
                        }}
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
                          <Typography>{t('hero.pest_detection_time')}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <TrendingUpIcon
                            sx={{
                              fontSize: { xs: 14, lg: 16 },
                              color: "#8B5CF6",
                            }}
                          />
                          <Typography>{t('hero.yield_boost')}</Typography>
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
                  {t('benefits.title')}
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
                  {t('benefits.subtitle')}
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
                  {t('features.title')}
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
                  {t('features.subtitle')}
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
                            {t('common.company_name')}
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
                            {t('mobile_app.seed_analysis')}
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
                            {t('mobile_app.moisture_test')}
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
                            {t('mobile_app.ph_analysis')}
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
                    {t('mobile_app.badge')}
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
                    {t('mobile_app.title')}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4B5563",
                      mb: 3,
                      fontSize: { xs: "0.9rem", lg: "1rem" },
                      lineHeight: 1.6,
                    }}
                  >
                    {t('mobile_app.description')}
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
                      {t('mobile_app.download_ios')}
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
                      {t('mobile_app.get_android')}
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
                  {t('marketplace.title')}
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
                  {t('marketplace.subtitle')}
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
                {marketplaceItems.map((item, index) => (
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
                {t('cta.title')}
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
                {t('cta.subtitle')}
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
                  {t('cta.start_free_trial')}
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
                  {t('cta.schedule_demo')}
                </Button>
              </Stack>
            </motion.div>
          </Container>
        </Box>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </Box>
    </>
  );
}