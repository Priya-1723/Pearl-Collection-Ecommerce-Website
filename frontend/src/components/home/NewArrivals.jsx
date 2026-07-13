import React from "react";
import kurta from "/assets/kurta.png";
import western from "/assets/western.png";
import img3 from "/assets/img2.png";
import img4 from "/assets/img3.png";
import { Box, Typography, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const NewArrivals = () => {
  const items = [
    {
      img: img3,
      title: "Short Cotton Kurti",
      price: "1800",
      isFavourite: true,
    },
    {
      img: kurta,
      title: "Floral Kurti",
      price: "899",
      isFavourite: false,
    },
    {
      img: img4,
      title: "Pink Kurta Set",
      price: "2500",
      isFavourite: true,
    },
    {
      img: western,
      title: "Beige Western Dress",
      price: "1299",
      isFavourite: false,
    },
  ];
  return (
    <Box sx={{ maxWidth: "1320px", mx: "auto", py: 6 }}>
      {/* Heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            flex: 1,
            textAlign: "center",
            fontWeight: 600,
            color: "heading.main",
          }}
        >
          NEW ARRIVALS
        </Typography>

        <Typography
          sx={{
            cursor: "pointer",
            color: "heading.peach",
          }}
        >
          View All
        </Typography>
      </Box>

      {/* Products */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
          },
          gap: 3,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #ececec",
              borderRadius: 2,
              overflow: "hidden",
              bgcolor: "#fff",
              transition: ".3s",

              "&:hover": {
                boxShadow: 3,
              },
            }}
          >
            {/* Image */}
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: 330,
                  objectFit: "contain",
                  display: "block",
                }}
              />

              <IconButton
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  bgcolor: "#fff",

                  "&:hover": {
                    bgcolor: "#fff",
                  },
                }}
              >
                {item.isFavourite ? (
                  <FavoriteOutlinedIcon color="error" />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
              </IconButton>
            </Box>

            {/* Details */}
            <Box sx={{ p: 2 }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "heading.main",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontWeight: 600,
                  color: "heading.main",
                }}
              >
                ₹{item.price.toLocaleString("en-IN")}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NewArrivals;
