"use client";

import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { ArrowUpward as ArrowUpIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
  const [showPageUp, setShowPageUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowPageUp(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showPageUp && (
        <Fab
          component={motion.button}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            bgcolor: "#D4A317",
            color: "#1F2A44",
            "&:hover": {
              bgcolor: "#E0B84B",
            },
            zIndex: 1000,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon />
        </Fab>
      )}
    </>
  );
}