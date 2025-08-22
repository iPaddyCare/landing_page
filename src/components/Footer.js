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

// Import the useLanguage hook
import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

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
                  {t('common.company_name')}
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
                {t('common.company_description')}
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
                {t('footer.solutions')}
              </Typography>
              <Stack spacing={1} sx={{ color: "#D1D5DB", fontSize: "0.9rem" }}>
                <Typography
                  component={motion.div}
                  whileHover={{ color: "white" }}
                >
                  {t('footer.seed_quality')}
                </Typography>
                <Typography
                  component={motion.div}
                  whileHover={{ color: "white" }}
                >
                  {t('footer.moisture_monitoring')}
                </Typography>
                <Typography
                  component={motion.div}
                  whileHover={{ color: "white" }}
                >
                  {t('footer.soil_ph')}
                </Typography>
                <Typography
                  component={motion.div}
                  whileHover={{ color: "white" }}
                >
                  {t('footer.pest_detection')}
                </Typography>
              </Stack>
            </Grid>

            <Grid sx={{ width: { xs: "100%", md: "25%" } }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, fontSize: "1.1rem" }}
              >
                {t('footer.support')}
              </Typography>
              <Stack spacing={1} sx={{ color: "#D1D5DB", fontSize: "0.9rem" }}>
                <Typography
                  component={motion.div}
                  whileHover={{ color: "white" }}
                >
                  {t('footer.documentation')}
                </Typography>
                <Typography
                  component={motion.div}
                  whileHover={{ color: "white" }}
                >
                  {t('footer.training_videos')}
                </Typography>
                <Typography
                  component={motion.div}
                  whileHover={{ color: "white" }}
                >
                  {t('footer.expert_consultation')}
                </Typography>
                <Typography
                  component={motion.div}
                  whileHover={{ color: "white" }}
                >
                  {t('footer.support_24_7')}
                </Typography>
              </Stack>
            </Grid>

            <Grid sx={{ width: { xs: "100%", md: "25%" } }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, fontSize: "1.1rem" }}
              >
                {t('footer.contact')}
              </Typography>
              <Stack spacing={1} sx={{ color: "#D1D5DB", fontSize: "0.9rem" }}>
                <Typography>{t('footer.company')}</Typography>
                <Typography>{t('footer.country')}</Typography>
                <Typography>{t('footer.email')}</Typography>
                <Typography>{t('footer.phone')}</Typography>
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
              {t('footer.copyright')}
            </Typography>
            <Stack direction="row" spacing={3}>
              {[
                t('footer.privacy_policy'),
                t('footer.terms_of_service'),
                t('footer.cookie_policy')
              ].map((item, index) => (
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
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}