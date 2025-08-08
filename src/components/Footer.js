"use client";
import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import {
  Language as GlobeIcon,
  Smartphone as SmartphoneIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
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
                Empowering Sri Lankan farmers with smart agricultural technology.
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
                      <SmartphoneIcon sx={{ color: "white", fontSize: 20 }} />
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
              <Stack spacing={1} sx={{ color: "#D1D5DB", fontSize: "0.9rem" }}>
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
              <Stack spacing={1} sx={{ color: "#D1D5DB", fontSize: "0.9rem" }}>
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
              <Stack spacing={1} sx={{ color: "#D1D5DB", fontSize: "0.9rem" }}>
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
  );
}
