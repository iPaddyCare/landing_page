"use client";
import { motion } from "framer-motion";
import {
  BugReport,
  PhotoCamera,
  TrendingUp,
  Assessment,
  Verified as AwardIcon,
  Language as GlobeIcon,
  CheckCircle,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Paper,
  Chip,
  IconButton,
  Badge,
  Container,
} from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PestDetectionPage = () => {
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

    ["hero", "demo", "steps", "cta"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      step: "1",
      title:
        "Take Photo of a Spot You Suspect Has Been Damaged by Pests or Disease",
      description:
        "Capture a clear photo of the affected plant area using the mobile app",
      icon: PhotoCamera,
      color: "#2F855A",
    },
    {
      step: "2",
      title: "AI Analyzes Photo and Identifies Pest or Disease",
      description:
        "Our AI automatically analyzes the photo and identifies the specific pest or disease",
      icon: TrendingUp,
      color: "#2563EB",
    },
    {
      step: "3",
      title: "Receive Treatment Plan and Recommendations",
      description:
        "Get detailed information and a personalized treatment plan based on the AI analysis",
      icon: Assessment,
      color: "#7C3AED",
    },
  ];

  const features = [
    "Mobile photo capture",
    "AI pest identification",
    "Treatment suggestions",
    "Supplier locations",
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F8FAFC 0%, #F0FDF4 100%)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Navigation */}
      <Navbar showBackButton={true} />

      {/* Main Content */}
      <Box sx={{ py: { xs: 4, lg: 6 }, px: { xs: 2, lg: 6 } }}>
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
              animate={visibleSections.hero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Stack spacing={3} sx={{ maxWidth: "md", mx: "auto" }}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    mb: 3,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
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
                    AI-Powered
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
                    Instant Detection
                  </Badge>
                </Stack>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    color: "#1F2A44",
                    fontSize: {
                      xs: "clamp(1.5rem, 5vw, 2.5rem)",
                      lg: "clamp(3rem, 5vw, 4rem)",
                    },
                    lineHeight: 1.2,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  AI-Driven Pest Detection
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#4B5563",
                    fontWeight: 400,
                    fontSize: { xs: "0.9rem", lg: "1.1rem" },
                    lineHeight: 1.5,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Early Detection with Smart Technology
                </Typography>
                <Typography
                  sx={{
                    color: "#4B5563",
                    fontSize: { xs: "0.9rem", lg: "1rem" },
                    lineHeight: 1.8,
                    maxWidth: "90%",
                    textAlign: { xs: "center", md: "left" },
                    mx: { xs: "auto", md: 0 },
                  }}
                >
                  Capture plant photos for instant AI identification of pests or
                  diseases, with treatment suggestions and supplier locations
                  for comprehensive crop protection.
                </Typography>
                {/* System Highlights Integrated */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{
                    mt: 3,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  {[
                    "Mobile photo capture",
                    "AI pest identification",
                    "Treatment suggestions",
                    "Supplier locations",
                  ].map((feature, index) => (
                    <Box
                      key={index}
                      component={motion.div}
                      initial={{ opacity: 0, x: -20 }}
                      animate={visibleSections.hero ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      }}
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.9)",
                        borderRadius: 2,
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        flex: 1,
                        border: "1px solid rgba(212, 160, 23, 0.2)",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "#D4A017",
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#1F2A44",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                        }}
                      >
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
                    bgcolor: "#D4A017",
                    color: "#1F2937",
                    "&:hover": {
                      bgcolor: "#E0B84B",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    },
                    px: 5,
                    py: 1.5,
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: "1rem",
                    mt: 3,
                    alignSelf: { xs: "center", md: "flex-start" },
                  }}
                >
                  Start Detection Now
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
            bgcolor: "linear-gradient(135deg, #F9FAFB 0%, #F7E7CE22 100%)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections.demo ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: "#1F2A44",
                    fontSize: {
                      xs: "clamp(1.75rem, 5vw, 2.25rem)",
                      lg: "clamp(2.5rem, 5vw, 3rem)",
                    },
                    mb: 2,
                  }}
                >
                  Watch Our AI Detection in Action
                </Typography>
                <Typography
                  sx={{
                    color: "#4B5563",
                    maxWidth: "48rem",
                    mx: "auto",
                    fontSize: { xs: "0.9rem", lg: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  See how our AI-powered system analyzes plant photos and
                  identifies pests or diseases with precision.
                </Typography>
              </Box>
              <Box
                component={motion.div}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                }}
                sx={{
                  maxWidth: 700,
                  mx: "auto",
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: 3,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "56.25%", // 16:9 aspect ratio
                    bgcolor: "#1F2A44",
                    overflow: "hidden",
                  }}
                >
                  {/* Video Placeholder */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#2F855A11",
                      borderRadius: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "rgba(212, 160, 23, 0.2)",
                      },
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <IconButton
                        component={motion.button}
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                        }}
                        whileTap={{ scale: 0.9 }}
                        sx={{
                          bgcolor: "#D4A017",
                          "&:hover": { bgcolor: "#E0B84B" },
                          borderRadius: "50%",
                          width: 60,
                          height: 60,
                          border: "2px solid rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        <PlayArrowIcon
                          sx={{ fontSize: 32, color: "#1F2A44" }}
                        />
                      </IconButton>
                      <Typography
                        sx={{
                          color: "#F9FAFB",
                          mt: 2,
                          fontSize: "0.9rem",
                          fontWeight: 500,
                        }}
                      >
                        Demo Video Placeholder (Add Your Video Here)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ textAlign: "center", py: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#1F2A44",
                      mb: 1,
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    AI Pest Detection Demo
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4B5563",
                      fontSize: "0.9rem",
                      maxWidth: "90%",
                      mx: "auto",
                    }}
                  >
                    Watch our system detect pests and diseases with precision
                    using AI technology.
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
            bgcolor: "linear-gradient(135deg, #F9FAFB 0%, #F7E7CE22 100%)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visibleSections.steps ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: "#1F2A44",
                    fontSize: {
                      xs: "clamp(1.75rem, 5vw, 2.25rem)",
                      lg: "clamp(2.5rem, 5vw, 3rem)",
                    },
                    mb: 2,
                  }}
                >
                  How Our System Works
                </Typography>
                <Typography
                  sx={{
                    color: "#4B5563",
                    maxWidth: "48rem",
                    mx: "auto",
                    fontSize: { xs: "0.9rem", lg: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  A seamless process to detect pests and diseases with AI
                  technology
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  overflowX: "auto",
                  gap: 3,
                  pb: 2,
                  scrollSnapType: "x mandatory",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {[
                  {
                    step: "1",
                    title: "Capture Plant Photo",
                    description:
                      "Take a clear photo of the affected plant area using the mobile app",
                    icon: (
                      <PhotoCamera sx={{ fontSize: 40, color: "#2F855A" }} />
                    ),
                    image: (
                      <Box
                        sx={{
                          width: "100%",
                          height: 180,
                          bgcolor: "#F3F4F6",
                          borderRadius: 3,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "2px dashed #D1D5DB",
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <PhotoCamera
                            sx={{ fontSize: 40, color: "#9CA3AF", mb: 1 }}
                          />
                          <Typography
                            sx={{ color: "#9CA3AF", fontSize: "0.85rem" }}
                          >
                            Plant Photo
                          </Typography>
                        </Box>
                      </Box>
                    ),
                  },
                  {
                    step: "2",
                    title: "AI Analysis",
                    description:
                      "Our AI processes the image to detect pests or diseases with precision",
                    icon: (
                      <TrendingUp sx={{ fontSize: 40, color: "#2F855A" }} />
                    ),
                    image: (
                      <Box
                        sx={{
                          width: "100%",
                          height: 180,
                          bgcolor: "#F3F4F6",
                          borderRadius: 3,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "2px dashed #D1D5DB",
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <TrendingUp
                            sx={{ fontSize: 40, color: "#9CA3AF", mb: 1 }}
                          />
                          <Typography
                            sx={{ color: "#9CA3AF", fontSize: "0.85rem" }}
                          >
                            AI Analysis Interface
                          </Typography>
                        </Box>
                      </Box>
                    ),
                  },
                  {
                    step: "3",
                    title: "Treatment Recommendations",
                    description:
                      "Get detailed treatment plans and supplier locations based on AI results",
                    icon: (
                      <Assessment sx={{ fontSize: 40, color: "#2F855A" }} />
                    ),
                    image: (
                      <Box
                        sx={{
                          width: "100%",
                          height: 180,
                          bgcolor: "#F3F4F6",
                          borderRadius: 3,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "2px dashed #D1D5DB",
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <Assessment
                            sx={{ fontSize: 40, color: "#9CA3AF", mb: 1 }}
                          />
                          <Typography
                            sx={{ color: "#9CA3AF", fontSize: "0.85rem" }}
                          >
                            Treatment Plan
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
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.2,
                      type: "spring",
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                    }}
                    sx={{
                      minWidth: { xs: 280, sm: 320 },
                      scrollSnapAlign: "center",
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: 3,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      backdropFilter: "blur(10px)",
                      p: 3,
                      mx: { xs: 1, sm: 0 },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          bgcolor: "#2F855A",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontWeight: 600,
                          fontSize: "1.1rem",
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
                        color: "#1F2A44",
                        fontSize: "1.1rem",
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#4B5563",
                        mb: 3,
                        fontSize: "0.9rem",
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
            bgcolor: "#2F855A",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <Box
            component={motion.div}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
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
              animate={visibleSections.cta ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: "white",
                  fontSize: {
                    xs: "clamp(1.75rem, 5vw, 2.25rem)",
                    lg: "clamp(2.5rem, 5vw, 3rem)",
                  },
                  mb: 2,
                }}
              >
                Transform Your Pest Detection
              </Typography>
              <Typography
                sx={{
                  color: "#F9FAFB",
                  mb: 4,
                  maxWidth: "48rem",
                  mx: "auto",
                  fontSize: { xs: "0.9rem", lg: "1rem" },
                  lineHeight: 1.6,
                }}
              >
                Leverage our AI-driven system to detect pests and diseases with
                unmatched accuracy and efficiency.
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
      </Box>

      <Footer />
      <ScrollToTopButton />
    </Box>
  );
};

export default PestDetectionPage;
