"use client"
import { motion } from "framer-motion"
import { ArrowBack, BugReport, PhotoCamera, TrendingUp, Assessment, Verified, Language, CheckCircle } from "@mui/icons-material"
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack, Paper, Chip } from "@mui/material"
import Link from "next/link"

const PestDetectionPage = () => {
  const steps = [
    {
      step: "1",
      title: "Take Photo of a Spot You Suspect Has Been Damaged by Pests or Disease",
      description: "Capture a clear photo of the affected plant area using the mobile app",
      icon: PhotoCamera,
      color: "#2F855A",
    },
    {
      step: "2",
      title: "AI Analyzes Photo and Identifies Pest or Disease",
      description: "Our AI automatically analyzes the photo and identifies the specific pest or disease",
      icon: TrendingUp,
      color: "#2563EB",
    },
    {
      step: "3",
      title: "Receive Treatment Plan and Recommendations",
      description: "Get detailed information and a personalized treatment plan based on the AI analysis",
      icon: Assessment,
      color: "#7C3AED",
    },
  ]

  const features = ["Mobile photo capture", "AI pest identification", "Treatment suggestions", "Supplier locations"]

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F8FAFC 0%, #F0FDF4 100%)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 4, lg: 6 }, px: { xs: 2, lg: 6 } }}>
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
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
          <Grid item xs={12} lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Chip
                  icon={<Verified sx={{ fontSize: 16 }} />}
                  label="AI Powered"
                  sx={{
                    bgcolor: "rgba(34, 197, 94, 0.1)",
                    color: "#166534",
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: "rgba(34, 197, 94, 0.2)",
                    },
                  }}
                />
                <Chip
                  icon={<Language sx={{ fontSize: 16 }} />}
                  label="Instant Results"
                  sx={{
                    bgcolor: "rgba(59, 130, 246, 0.1)",
                    color: "#1E40AF",
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: "rgba(59, 130, 246, 0.2)",
                    },
                  }}
                />
              </Stack>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', borderRadius: 3, mr: 2 }}>
                  <BugReport sx={{ fontSize: { xs: 48, lg: 64 }, color: "#2F855A" }} />
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: "#1F2937",
                    fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                    lineHeight: 1.1,
                  }}
                >
                  Pest & Disease Detection
                </Typography>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  color: "#6B7280",
                  mb: 3,
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                Early pest and disease detection with mobile imaging
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#374151",
                  lineHeight: 1.7,
                  fontSize: "1.125rem",
                }}
              >
                Capture plant photos for instant AI identification of pests or diseases, with treatment suggestions and
                supplier locations.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={4}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  height: '100%',
                  border: 'none',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  p: 4,
                  position: 'relative',
                  right: { lg: -4 },
                  ml: 'auto',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: "#1F2937" }}>
                  Key Features
                </Typography>
                <Stack spacing={2}>
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#2F855A' }} />
                        <Typography variant="body1" sx={{ color: '#374151', fontWeight: 500 }}>
                          {feature}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginBottom: '4rem' }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 600, color: "#1F2937", mb: 2 }}>
              AI-Powered Pest Detection
            </Typography>
            <Typography variant="h6" sx={{ color: "#6B7280", maxWidth: 600, mx: 'auto' }}>
              See how our AI identifies pests and diseases from plant photos
            </Typography>
          </Box>

          <Card
            sx={{
              maxWidth: 1000,
              mx: 'auto',
              border: 'none',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                aspectRatio: '16/9',
                background: 'linear-gradient(135deg, #DCFCE7 0%, #DBEAFE 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <BugReport sx={{ fontSize: 96, color: "#2F855A", mb: 2 }} />
                </motion.div>
                <Typography variant="h5" sx={{ fontWeight: 600, color: "#374151", mb: 1 }}>
                  Pest Detection Demo
                </Typography>
                <Typography variant="body1" sx={{ color: "#6B7280" }}>
                  Interactive demonstration of AI pest identification
                </Typography>
              </Box>

              {/* Floating elements */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#4ADE80',
                  borderRadius: '50%',
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                style={{
                  position: 'absolute',
                  top: '2rem',
                  right: '2rem',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#60A5FA',
                  borderRadius: '50%',
                }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              />
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '2rem',
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#FBBF24',
                  borderRadius: '50%',
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />
            </Box>
          </Card>
        </motion.div>

        {/* Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 600, color: "#1F2937", mb: 2 }}>
              How It Works
            </Typography>
            <Typography variant="h6" sx={{ color: "#6B7280", maxWidth: 600, mx: 'auto' }}>
              Follow these simple steps to detect pests and diseases
            </Typography>
          </Box>

          <Stack spacing={4}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    border: '1px solid #E5E7EB',
                    borderRadius: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', minHeight: 400 }}>
                    {/* Content on the left */}
                    <Box sx={{ pr: { md: 4 }, pb: { md: 4 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            mr: 3,
                            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                            flexShrink: 0,
                          }}
                        >
                          {step.step}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                          <Box sx={{ p: 1.5, bgcolor: '#F3F4F6', borderRadius: 2, mr: 2 }}>
                            <step.icon sx={{ fontSize: 32, color: "#374151" }} />
                          </Box>
                          <Chip
                            label={`Step ${step.step}`}
                            variant="outlined"
                            sx={{
                              color: step.color,
                              borderColor: step.color,
                              fontWeight: 500,
                            }}
                          />
                        </Box>
                      </Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 2, 
                          fontWeight: 600, 
                          color: "#1F2937", 
                          lineHeight: 1.3,
                          hyphens: 'auto',
                          wordBreak: 'break-word',
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#6B7280", lineHeight: 1.7, fontSize: '1.125rem' }}>
                        {step.description}
                      </Typography>
                    </Box>
                    
                    {/* Image placeholder in bottom right corner */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: { xs: '100%', md: 400 },
                        height: { xs: 280, md: 320 },
                        bgcolor: '#F8FAFC',
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px dashed #D1D5DB',
                        overflow: 'hidden',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                        '&:hover': {
                          boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box sx={{ textAlign: 'center', p: 3 }}>
                        <step.icon sx={{ fontSize: { xs: 64, md: 80 }, color: '#9CA3AF', mb: 2 }} />
                        <Typography variant="h6" sx={{ color: '#6B7280', fontWeight: 600, mb: 1 }}>
                          {step.step === "1" && "Plant Photo"}
                          {step.step === "2" && "AI Analysis"}
                          {step.step === "3" && "Treatment Plan"}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
                          {step.step === "1" && "Upload clear photos of affected plants"}
                          {step.step === "2" && "AI processes and analyzes the image"}
                          {step.step === "3" && "Get detailed treatment recommendations"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          style={{ marginTop: '4rem' }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 6,
              border: 'none',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              color: 'white',
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}>
                  <CheckCircle sx={{ fontSize: 48 }} />
                </Box>
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Ready to Detect Pests?
              </Typography>
              <Typography variant="h6" sx={{ color: '#D1FAE5', mb: 4 }}>
                Start using AI-powered pest detection today and protect your crops
              </Typography>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#D4A017',
                    color: '#1F2937',
                    '&:hover': {
                      bgcolor: '#E0B84B',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    },
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    textTransform: 'none',
                  }}
                >
                  Get Started Now
                </Button>
              </motion.div>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}

export default PestDetectionPage