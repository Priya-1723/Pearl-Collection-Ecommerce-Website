import { Box, Button, Typography } from "@mui/material";
import React from "react";
import kurta from "/assets/kurta.png";
import saree from "/assets/saree.png";
import western from "/assets/western.png";
import accessories from "/assets/accessories.png";
import dress from "/assets/Dress.png";
import essentialsImg from "/assets/img1.png";
import newArrivalImg from "/assets/img2.png";

const CategoriesSection = () => {
  const categories = [
    {
      img: kurta,
      title: "Kurtas",
    },
    {
      img: western,
      title: "Western Wear",
    },
    {
      img: saree,
      title: "Saree",
    },
    {
      img: accessories,
      title: "Accessories",
    },
    {
      img: dress,
      title: "Dresses",
    },
  ];
  const posters = [
    {
      collection: "Summer",
      type: "Essentials",
      desc: "Light. Brizzy. Beautiful.",
      button: "Explore",
      img: essentialsImg,
      bgColor: "background.poster2",
    },
    {
      collection: "New Arrivals",
      type: "Just For You",
      desc: "To Refresh Your Wardrobe.",
      button: "Shop Collection",
      img: newArrivalImg,
      bgColor: "background.poster1",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1320px",
        mx: "auto",
        py: 5,
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {categories.map((cat, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: { xs: 120, sm: 150, md: 180 },
                height: { xs: 120, sm: 150, md: 180 },
                borderRadius: "50%",
                border: "2px solid",
                borderColor: "primary.main",
                bgcolor: "#F7F3F1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={cat.img}
                alt={cat.title}
                sx={{
                  width: "85%",
                  height: "85%",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: "1rem", md: "1.3rem" },
                fontWeight: 500,
                color: "heading.main",
              }}
            >
              {cat.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: 6,
          flexWrap: "wrap",
        }}
      >
        {posters.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              minWidth: { xs: "100%", md: "48%" },
              bgcolor: item.bgColor,
              pt: { xs: 3, md: 5 },
              pl: { xs: 3, md: 5 },
              pr: { xs: 3, md: 5 },
              pb: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Box sx={{ maxWidth: "55%" }}>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "heading.peach",
                  letterSpacing: 2,
                  fontSize: 14,
                  mb: 1,
                }}
              >
                {item.collection}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "2rem", md: "2.7rem" },
                  fontWeight: 600,
                  color: "heading.main",
                  lineHeight: 1.1,
                }}
              >
                {item.type}
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  // color: "text.secondary",
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                }}
              >
                {item.desc}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 4,
                  borderColor: "heading.peach",
                  color: "heading.main",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "btnHover.main",
                    color: "#fff", // or "common.white"
                    borderColor: "btnHover.main",
                  },
                }}
              >
                {item.button}
              </Button>
            </Box>
            {/* Right Image */}
            <Box
              component="img"
              src={item.img}
              alt={item.collection}
              sx={{
                width: { xs: 140, sm: 180, md: 230 },
                height: { xs: 140, sm: 180, md: 230 },
                objectFit: "contain",
                alignSelf: "flex-end",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesSection;
// #ded0c3 brown
// #f3dfd7
