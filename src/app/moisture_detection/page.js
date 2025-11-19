"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Stack,
  Badge,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import {
  WaterDrop as MoistureIcon,
  Smartphone as SmartphoneIcon,
  Assessment,
  Verified as AwardIcon,
  Language as GlobeIcon,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/hooks/useLanguage";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const SeedMoisture = () => {
  const { t } = useLanguage();
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

  const particlesInit = async (main) => {
    await loadFull(main);
  };

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
        {/* Particles Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
              number: { value: 50, density: { enable: true, value_area: 800 } },
              color: { value: ["#2F855A", "#D4A017", "#F7E7CE"] },
              shape: { type: "circle" },
              opacity: { value: 0.5, random: true },
              size: { value: 3, random: true },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
              },
              modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
            },
            detectRetina: true,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />

        <Navbar showBackButton={true} />

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
                    {t("seed_moisture.iot_powered")}
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
                    {t("seed_moisture.real_time_monitoring")}
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
                  {t("seed_moisture.title")}
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
                  {t("seed_moisture.subtitle")}
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
                  {t("seed_moisture.description")}
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{
                    mt: 3,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  {[
                    t("seed_moisture.portable_device"),
                    t("seed_moisture.real_time_detection"),
                    t("seed_moisture.lab_guidance"),
                    t("seed_moisture.mobile_integration"),
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
                    color: "#1F2A44",
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
                  {t("seed_moisture.start_checking")}
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
                  {t("seed_moisture.demo_title")}
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
                  {t("seed_moisture.demo_description")}
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
                    paddingTop: "56.25%",
                    bgcolor: "#1F2A44",
                    overflow: "hidden",
                  }}
                >
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
                      "&:hover": { bgcolor: "rgba(212, 160, 23, 0.2)" },
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
                        <PlayArrowIcon sx={{ fontSize: 32, color: "#1F2A44" }} />
                      </IconButton>
                      <Typography
                        sx={{
                          color: "#F9FAFB",
                          mt: 2,
                          fontSize: "0.9rem",
                          fontWeight: 500,
                        }}
                      >
                        {t("seed_moisture.video_placeholder")}
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
                    {t("seed_moisture.video_title")}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4B5563",
                      fontSize: "0.9rem",
                      maxWidth: "90%",
                      mx: "auto",
                    }}
                  >
                    {t("seed_moisture.video_description")}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Steps Section */}
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
                  {t("seed_moisture.steps_title")}
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
                  {t("seed_moisture.steps_description")}
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
                    title: t("seed_moisture.step_1_title"),
                    description: t("seed_moisture.step_1_description"),
                    icon: <SmartphoneIcon sx={{ fontSize: 40, color: "#2F855A" }} />,
                    placeholder: t("seed_moisture.step_1_placeholder"),
                  },
                  {
                    step: "2",
                    title: t("seed_moisture.step_2_title"),
                    description: t("seed_moisture.step_2_description"),
                    icon: <MoistureIcon sx={{ fontSize: 40, color: "#2F855A" }} />,
                    placeholder: t("seed_moisture.step_2_placeholder"),
                  },
                  {
                    step: "3",
                    title: t("seed_moisture.step_3_title"),
                    description: t("seed_moisture.step_3_description"),
                    icon: <Assessment sx={{ fontSize: 40, color: "#2F855A" }} />,
                    placeholder: t("seed_moisture.step_3_placeholder"),
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
                        {step.icon}
                        <Typography sx={{ color: "#9CA3AF", fontSize: "0.85rem", mt: 1 }}>
                          {step.placeholder}
                        </Typography>
                      </Box>
                    </Box>
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
                {t("seed_moisture.cta_title")}
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
                {t("seed_moisture.cta_description")}
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
                  {t("seed_moisture.start_free_trial")}
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
                  {t("seed_moisture.schedule_demo")}
                </Button>
              </Stack>
            </motion.div>
          </Container>
        </Box>

        <Footer />
        <ScrollToTopButton />
      </Box>
    </>
  );
};

export default SeedMoisture;