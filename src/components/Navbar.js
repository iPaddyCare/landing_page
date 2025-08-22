"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, ArrowBack } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ showBackButton = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#1F2A44" }}>
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                    Back to Home
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
                onClick={() => {
                  /* Add navigation logic for Get Started */
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
