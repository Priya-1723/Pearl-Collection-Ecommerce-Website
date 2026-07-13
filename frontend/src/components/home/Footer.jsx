import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const features = [
    {
      icon: <LocalShippingOutlinedIcon />,
      title: "FREE SHIPPING",
      subtitle: "On orders above ₹999",
    },
    {
      icon: <AutorenewOutlinedIcon />,
      title: "EASY RETURNS",
      subtitle: "Hassle free returns",
    },
    {
      icon: <VerifiedUserOutlinedIcon />,
      title: "SECURE PAYMENTS",
      subtitle: "100% secure payments",
    },
    {
      icon: <SupportAgentOutlinedIcon />,
      title: "CUSTOMER SUPPORT",
      subtitle: "We're here to help",
    },
  ];

  return (
    <Box mt={8}>
      {/* Top Feature Bar */}
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          py: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
          },
          gap: 4,
        }}
      >
        {features.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                color: "heading.peach",
                fontSize: 32,
                display: "flex",
              }}
            >
              {item.icon}
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "heading.main",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "text.secondary",
                }}
              >
                {item.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Main Footer */}
      <Box
        sx={{
          bgcolor: "#F6E7E2",
          py: 6,
        }}
      >
        <Box
          sx={{
            maxWidth: "1320px",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "2fr 1fr 1fr 2fr",
            },
            gap: 5,
          }}
        >
          {/* Logo */}
          <Box>
            <Typography
              sx={{
                fontSize: 48,
                color: "heading.peach",
                fontFamily: "serif",
              }}
            >
              Pearl
            </Typography>

            <Typography
              sx={{
                letterSpacing: 3,
                fontSize: 12,
              }}
            >
              COLLECTION
            </Typography>

            <Typography mt={2} color="text.secondary">
              Elegant styles for the
              <br />
              modern woman.
            </Typography>

            <Box mt={2}>
              <IconButton>
                <InstagramIcon />
              </IconButton>

              <IconButton>
                <FacebookOutlinedIcon />
              </IconButton>

              <IconButton>
                <PinterestIcon />
              </IconButton>

              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </Box>

            <Typography mt={3} fontSize={12} color="text.secondary">
              © 2025 Pearl Collection. All Rights Reserved.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography fontWeight={600} mb={2}>
              QUICK LINKS
            </Typography>

            {[
              "Shop",
              "Collections",
              "About Us",
              "Contact Us",
              "Size Guide",
            ].map((link) => (
              <Typography
                key={link}
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": {
                    color: "heading.peach",
                  },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          {/* Help */}
          <Box>
            <Typography fontWeight={600} mb={2}>
              HELP
            </Typography>

            {[
              "FAQs",
              "Shipping & Delivery",
              "Returns & Exchanges",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((link) => (
              <Typography
                key={link}
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": {
                    color: "heading.peach",
                  },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          {/* Newsletter */}
          <Box>
            <Typography fontWeight={600} mb={2}>
              NEWSLETTER
            </Typography>

            <Typography mb={3} color="text.secondary">
              Subscribe to get updates on new arrivals and exclusive offers.
            </Typography>

            <Box display="flex">
              <TextField
                size="small"
                placeholder="Enter your email"
                sx={{
                  flex: 1,
                  bgcolor: "#fff",
                }}
              />

              <Button
                variant="contained"
                sx={{
                  borderRadius: 0,
                  bgcolor: "heading.peach",
                  px: 4,
                  "&:hover": {
                    bgcolor: "btnHover.main",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
