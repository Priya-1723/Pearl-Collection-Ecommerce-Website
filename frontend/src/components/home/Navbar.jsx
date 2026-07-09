import React from "react";
import { Box, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import pearlImg from "/assets/pearl.png";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const Navbar = () => {
  const items = [
    {
      label: "Home",
      link: "#",
    },
    {
      label: "Shop",
      link: "#",
    },
    {
      label: "New Arrivals",
      link: "#",
    },
    {
      label: "About",
      link: "#",
    },
    {
      label: "Contact",
      link: "#",
    },
  ];
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.pink",
          height: "40px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "0.75rem",
              md: "1rem",
            },
            p: 1,
          }}
        >
          Free Shipping on Orders Above ₹999
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "background.default",
          // height: "100px",
          height: {
            xs: 70,
            md: 100,
          },
          // border: "1px solid green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1320px",
            mx: "auto",
            px: { xs: 2, sm: 3, md: 4 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3.5rem",
                  },
                  color: "heading.main",
                  lineHeight: 1,
                }}
              >
                Pearl
              </Typography>
              <Box
                component="img"
                src={pearlImg}
                alt="pearlImg"
                sx={{
                  width: "15px",
                  height: "15px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                color: "heading.main",
                letterSpacing: 2,
                fontSize: {
                  xs: "0.6rem",
                  sm: "0.75rem",
                  md: "0.8rem",
                },
                lineHeight: 1,
                ml: 1,
              }}
            >
              Collection
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              // border: "1px solid green",
            }}
          >
            {items.map((item) => (
              <Typography key={item.label} sx={{ fontSize: "1.2rem" }}>
                {item.label}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: {
                xs: 1,
                md: 3,
              },
              // border: "1px solid green",
            }}
          >
            <PersonOutlineOutlinedIcon sx={{ fontSize: "2rem" }} />
            <ShoppingBagOutlinedIcon sx={{ fontSize: "2rem" }} />
            <IconButton
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
