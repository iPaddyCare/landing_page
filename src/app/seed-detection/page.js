"use client";

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack, Paper, IconButton, Badge } from '@mui/material';
import { Camera as CameraIcon, PhotoCamera, CheckCircle, TrendingUp, Assessment, ArrowBack, Verified as AwardIcon, Language as GlobeIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const SeedDetectionPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F9FAFB",
        fontFamily: "Poppins, sans-serif",
        py: { xs: 8, lg: 12 },
        px: { xs: 2, lg: 12 },
      }}
    >
      <Container maxWidth="xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ mb: 4 }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button
              startIcon={<ArrowBack />}
              variant="outlined"
              sx={{
                borderColor: '#D4A017',
                color: '#D4A017',
                '&:hover': {
                  borderColor: '#E0B84B',
                  bgcolor: 'rgba(212, 160, 23, 0.04)',
                },
                mb: 4,
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
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
                  AI Powered
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
                  High Accuracy
                </Badge>
              </Stack>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <CameraIcon sx={{ fontSize: { xs: 48, lg: 64 }, color: "#2F855A", mr: 2 }} />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: "#1F2A44",
                    fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
                  }}
                >
                  AI Seed Quality Detection
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#6B7280",
                  mb: 3,
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Automated seed sorting with AI imaging for unmatched purity
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#4B5563",
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                }}
              >
                Our advanced AI analyzes seed images to identify and sort varieties, delivering detailed purity reports to ensure top-quality seeds for your fields.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                component={motion.div}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                }}
                sx={{
                  p: { xs: 2, lg: 3 },
                  border: "1px solid #E5E7EB",
                  bgcolor: "rgba(255, 255, 255, 0.95)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  borderRadius: 2,
                  backdropFilter: "blur(5px)",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: "#1F2A44" }}>
                    Key Features
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#2F855A' }} />
                      <Typography variant="body2" sx={{ color: '#4B5563' }}>
                        High-resolution image analysis
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#2F855A' }} />
                      <Typography variant="body2" sx={{ color: '#4B5563' }}>
                        Automated seed variety identification
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#2F855A' }} />
                      <Typography variant="body2" sx={{ color: '#4B5563' }}>
                        Detailed purity reports
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#2F855A' }} />
                      <Typography variant="body2" sx={{ color: '#4B5563' }}>
                        Quality assurance recommendations
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Demo Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{ mb: 8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: "#1F2A44", mb: 2 }}>
              See AI in Action
            </Typography>
            <Typography variant="body1" sx={{ color: "#6B7280", maxWidth: 600, mx: 'auto' }}>
              Watch how our AI analyzes seed images to provide instant quality assessments
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: 400,
              bgcolor: '#E5E7EB',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <PhotoCamera sx={{ fontSize: 64, color: '#9CA3AF', mb: 2 }} />
              <Typography variant="h6" sx={{ color: '#6B7280', mb: 1 }}>
                Seed Analysis Demo
              </Typography>
              <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
                Interactive demonstration of AI seed quality detection
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Step-by-Step Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: "#1F2A44", mb: 2 }}>
              How It Works
            </Typography>
            <Typography variant="body1" sx={{ color: "#6B7280", maxWidth: 600, mx: 'auto' }}>
              Follow these simple steps to analyze your seeds with AI
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: "1",
                title: "Capture Seed Image",
                description: "Take a clear photo of your seeds on a white background",
                icon: <PhotoCamera sx={{ fontSize: 40, color: "#2F855A" }} />,
                image: (
                  <Box
                    sx={{
                      width: '100%',
                      height: 200,
                      bgcolor: '#F3F4F6',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px dashed #D1D5DB',
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <PhotoCamera sx={{ fontSize: 48, color: '#9CA3AF', mb: 1 }} />
                      <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
                        Seed Image Placeholder
                      </Typography>
                    </Box>
                  </Box>
                ),
              },
              {
                step: "2",
                title: "Upload to AI System",
                description: "Upload your image to our advanced AI analysis platform",
                icon: <TrendingUp sx={{ fontSize: 40, color: "#2F855A" }} />,
                image: (
                  <Box
                    sx={{
                      width: '100%',
                      height: 200,
                      bgcolor: '#F3F4F6',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px dashed #D1D5DB',
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <TrendingUp sx={{ fontSize: 48, color: '#9CA3AF', mb: 1 }} />
                      <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
                        Upload Interface
                      </Typography>
                    </Box>
                  </Box>
                ),
              },
              {
                step: "3",
                title: "Get Instant Results",
                description: "Receive detailed analysis and quality recommendations",
                icon: <Assessment sx={{ fontSize: 40, color: "#2F855A" }} />,
                image: (
                  <Box
                    sx={{
                      width: '100%',
                      height: 200,
                      bgcolor: '#F3F4F6',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px dashed #D1D5DB',
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Assessment sx={{ fontSize: 48, color: '#9CA3AF', mb: 1 }} />
                      <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
                        Results Dashboard
                      </Typography>
                    </Box>
                  </Box>
                ),
              },
            ].map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: '1px solid #E5E7EB',
                      borderRadius: 2,
                      bgcolor: 'white',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: '#2F855A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 600,
                          mr: 2,
                        }}
                      >
                        {step.step}
                      </Box>
                      {step.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: "#1F2A44" }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6B7280", mb: 3 }}>
                      {step.description}
                    </Typography>
                    {step.image}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          sx={{ mt: 8 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              p: 4,
              bgcolor: 'white',
              borderRadius: 2,
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600, color: "#1F2A44", mb: 2 }}>
              Ready to Analyze Your Seeds?
            </Typography>
            <Typography variant="body1" sx={{ color: "#6B7280", mb: 3 }}>
              Start using AI-powered seed quality detection today
            </Typography>
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
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                },
                px: 4,
                py: 1.5,
                borderRadius: 6,
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
              }}
            >
              Get Started Now
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SeedDetectionPage; 