import React from "react";
import HeroImg from "/assets/bgImg2.png";
import pearlImg from "/assets/pearl.png";
import { Box, Button, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        component="img"
        src={HeroImg}
        alt="HeroImg"
        sx={{
          width: "100%",
          height: {
            xs: "70vh",
            sm: "75vh",
            md: "85vh",
            lg: "90vh",
          },
          objectFit: "cover",
          objectPosition: {
            xs: "75% center", // adjust based on where your model is
            md: "center",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "1320px",
            width: "100%",
            mx: "auto",
            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          }}
        >
          <Box
            sx={{
              maxWidth: {
                xs: "100%",
                md: "550px",
              },
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                color: "heading.peach",
                mb: 2,
                fontSize: {
                  xs: "0.75rem",
                  md: "0.9rem",
                },
                letterSpacing: 2,
              }}
            >
              New season, new you
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.8rem",
                  sm: "3.8rem",
                  md: "5rem",
                  lg: "6rem",
                },
                color: "heading.main",
                lineHeight: 1,
              }}
            >
              Pearl
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.8rem",
                  sm: "3.8rem",
                  md: "5rem",
                  lg: "6rem",
                },
                color: "heading.main",
                lineHeight: 1,
              }}
            >
              Collection
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 3 }}>
              <Box
                sx={{ bgcolor: "heading.peach", width: "30%", height: "0.5px" }}
              ></Box>
              <Box
                component="img"
                src={pearlImg}
                alt="pearlImg"
                sx={{
                  width: "30px",
                  height: "30px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{ bgcolor: "heading.peach", width: "30%", height: "0.5px" }}
              ></Box>
            </Box>
            <Typography
              sx={{
                mt: 2,
                fontSize: {
                  xs: "0.9rem",
                  md: "1.1rem",
                },
              }}
            >
              Timeless Elegance. Effortless You.
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  md: "1.1rem",
                },
              }}
            >
              Discover styles that shine in every moment.
            </Typography>
            <Button
              sx={{
                bgcolor: "heading.peach",
                color: "#fff",
                mt: 4,
                px: {
                  xs: 2.5,
                  md: 4,
                },
                py: {
                  xs: 1,
                  md: 1.5,
                },
                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                },
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
