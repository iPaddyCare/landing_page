"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import {
  ArrowBack,
  Menu as MenuIcon,
  Language as GlobeIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export default function Navbar({ showBackButton = false }) {
  const { t, language, changeLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (newLang) => {
    changeLanguage(newLang);
    handleLanguageClose();
  };

  const navItems = [
    t("navigation.features"),
    t("navigation.benefits"),
    t("navigation.mobile_app"),
    t("navigation.contact"),
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "si", name: "සිංහල" },
    { code: "ta", name: "தமிழ்" },
  ];

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
            {t("common.company_name")}
          </Typography>
        </Box>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                href={`#${
                  item === t("navigation.mobile_app")
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
        {t("navigation.get_started")}
      </Button>
    </Box>
  );

  return (
    <>
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
              sx={{ fontWeight: 700, color: "#1F2A44", fontSize: "1.5rem" }}
            >
              {t("common.company_name")}
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
                    item === t("navigation.mobile_app")
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Language Dropdown */}
              <Box>
                <Button
                  onClick={handleLanguageClick}
                  startIcon={<GlobeIcon />}
                  sx={{
                    color: "#1F2A44",
                    "&:hover": { bgcolor: "rgba(212, 160, 23, 0.1)" },
                  }}
                >
                  {languages.find(lang => lang.code === language)?.name || "English"}
                </Button>
                <Menu
                  anchorEl={languageAnchorEl}
                  open={Boolean(languageAnchorEl)}
                  onClose={handleLanguageClose}
                  sx={{
                    "& .MuiPaper-root": {
                      bgcolor: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(212, 160, 23, 0.2)",
                    },
                  }}
                >
                  {languages.map((lang) => (
                    <MenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      selected={language === lang.code}
                      sx={{
                        color: "#1F2A44",
                        "&:hover": { bgcolor: "rgba(212, 160, 23, 0.1)" },
                        "&.Mui-selected": {
                          bgcolor: "rgba(212, 160, 23, 0.2)",
                          "&:hover": { bgcolor: "rgba(212, 160, 23, 0.3)" },
                        },
                      }}
                    >
                      {lang.name}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Back to Home Button (conditional) */}
              {showBackButton && (
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Button
                    startIcon={<ArrowBack />}
                    variant="outlined"
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
                      fontSize: "1rem",
                    }}
                  >
                    {t("common.back_to_home")}
                  </Button>
                </Link>
              )}

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
              >
                {t("navigation.get_started")}
              </Button>
            </Box>
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
    </>
  );
}
