import React, { useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Chip,
  Collapse,
  Divider,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  MenuItem,
  Pagination,
  Select,
  Slider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const COLORS = {
  background: "#FCFAF8",
  paper: "#FFFFFF",
  text: "#624D48",
  muted: "#8C7771",
  border: "#EEE5E0",
  primary: "#C97578",
  lightPrimary: "#F8E9E7",
};

const products = [
  {
    id: 1,
    name: "Pink Embroidered Kurta Set",
    price: 1899,
    category: "Kurtas",
    color: "Pink",
    pattern: "Embroidered",
    occasion: "Festive",
    size: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 2,
    name: "Floral A-Line Dress",
    price: 1699,
    category: "Dresses",
    color: "White",
    pattern: "Floral",
    occasion: "Casual",
    size: ["XS", "S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 3,
    name: "Sage Green Printed Kurta",
    price: 1499,
    category: "Kurtas",
    color: "Green",
    pattern: "Printed",
    occasion: "Office Wear",
    size: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e4?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 4,
    name: "Lavender Tiered Dress",
    price: 1799,
    category: "Dresses",
    color: "Purple",
    pattern: "Solid",
    occasion: "Party Wear",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 5,
    name: "Linen Co-ord Set",
    price: 2199,
    category: "Western Wear",
    color: "Blue",
    pattern: "Solid",
    occasion: "Casual",
    size: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 6,
    name: "Beige Printed Kurta",
    price: 1499,
    category: "Kurtas",
    color: "Beige",
    pattern: "Printed",
    occasion: "Festive",
    size: ["S", "M", "L", "XL", "XXL"],
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 7,
    name: "Off White Embroidered Kurta",
    price: 1999,
    category: "Kurtas",
    color: "White",
    pattern: "Embroidered",
    occasion: "Office Wear",
    size: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 8,
    name: "Peach Anarkali Set",
    price: 2299,
    category: "Kurtas",
    color: "Peach",
    pattern: "Solid",
    occasion: "Festive",
    size: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 9,
    name: "Light Green Kurta Set",
    price: 1599,
    category: "Kurtas",
    color: "Green",
    pattern: "Embroidered",
    occasion: "Casual",
    size: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 10,
    name: "White Floral Dress",
    price: 1699,
    category: "Dresses",
    color: "White",
    pattern: "Floral",
    occasion: "Party Wear",
    size: ["XS", "S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 11,
    name: "Coral Straight Kurta Set",
    price: 1799,
    category: "Kurtas",
    color: "Pink",
    pattern: "Embroidered",
    occasion: "Festive",
    size: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 12,
    name: "Yellow Printed Dress",
    price: 1399,
    category: "Dresses",
    color: "Yellow",
    pattern: "Printed",
    occasion: "Casual",
    size: ["XS", "S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500&q=85",
  },
];

const filterGroups = [
  {
    title: "CATEGORIES",
    key: "categories",
    options: [
      { label: "All Categories", value: "All", count: 48 },
      { label: "Kurtas", value: "Kurtas", count: 18 },
      { label: "Dresses", value: "Dresses", count: 12 },
      { label: "Dupattas", value: "Dupattas", count: 8 },
      { label: "Western Wear", value: "Western Wear", count: 6 },
      { label: "Accessories", value: "Accessories", count: 4 },
    ],
  },
  {
    title: "PATTERN",
    key: "patterns",
    options: [
      { label: "Floral", value: "Floral", count: 16 },
      { label: "Embroidered", value: "Embroidered", count: 14 },
      { label: "Printed", value: "Printed", count: 10 },
      { label: "Solid", value: "Solid", count: 8 },
    ],
  },
  {
    title: "OCCASION",
    key: "occasions",
    options: [
      { label: "Casual", value: "Casual", count: 20 },
      { label: "Festive", value: "Festive", count: 16 },
      { label: "Office Wear", value: "Office Wear", count: 8 },
      { label: "Party Wear", value: "Party Wear", count: 4 },
    ],
  },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const colors = [
  { name: "Pink", hex: "#E9B7B8" },
  { name: "Beige", hex: "#E8D2B9" },
  { name: "Green", hex: "#ADB38A" },
  { name: "Blue", hex: "#B7C5CF" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Black", hex: "#222222" },
  { name: "Yellow", hex: "#E5B43F" },
  { name: "Purple", hex: "#B9A0CE" },
];

const initialFilters = {
  categories: [],
  patterns: [],
  occasions: [],
  sizes: [],
  colors: [],
  price: [499, 4999],
};

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Box sx={{ mb: 1.6 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setOpen(!open)}
        sx={{ cursor: "pointer", py: 0.7 }}
      >
        <Typography
          sx={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 0.3,
            color: COLORS.text,
          }}
        >
          {title}
        </Typography>

        <Typography sx={{ fontSize: 14, color: COLORS.text }}>
          {open ? "−" : "+"}
        </Typography>
      </Stack>

      <Collapse in={open}>
        <Box sx={{ pt: 0.4 }}>{children}</Box>
      </Collapse>

      <Divider sx={{ mt: 1.4, borderColor: COLORS.border }} />
    </Box>
  );
}

function ProductFilters({ filters, setFilters, onClear }) {
  const updateArrayFilter = (key, value) => {
    setFilters((previous) => {
      const current = previous[key];

      if (key === "categories" && value === "All") {
        return { ...previous, categories: [] };
      }

      if (key === "categories") {
        const next = current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current.filter((item) => item !== "All"), value];

        return { ...previous, categories: next };
      }

      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];

      return { ...previous, [key]: next };
    });
  };

  const selectedCategories = filters.categories;

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 700,
          color: COLORS.text,
          mb: 1.6,
        }}
      >
        FILTERS
      </Typography>

      <Divider sx={{ mb: 1.5, borderColor: COLORS.border }} />

      {filterGroups.slice(0, 1).map((group) => (
        <FilterSection key={group.key} title={group.title}>
          <FormGroup>
            {group.options.map((option) => {
              const checked =
                option.value === "All"
                  ? selectedCategories.length === 0
                  : selectedCategories.includes(option.value);

              return (
                <FormControlLabel
                  key={option.value}
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={() =>
                        updateArrayFilter(group.key, option.value)
                      }
                      size="small"
                      sx={{
                        p: 0.3,
                        mr: 0.5,
                        color: "#D8C9C3",
                        "&.Mui-checked": { color: COLORS.primary },
                        "& .MuiSvgIcon-root": { fontSize: 14 },
                      }}
                    />
                  }
                  label={`${option.label} (${option.count})`}
                  sx={{
                    m: 0,
                    minHeight: 21,
                    "& .MuiFormControlLabel-label": {
                      fontSize: 10,
                      color: COLORS.text,
                    },
                  }}
                />
              );
            })}
          </FormGroup>
        </FilterSection>
      ))}

      <FilterSection title="PRICE RANGE">
        <Slider
          value={filters.price}
          onChange={(_, value) =>
            setFilters((previous) => ({ ...previous, price: value }))
          }
          min={499}
          max={4999}
          step={100}
          size="small"
          sx={{
            color: COLORS.primary,
            px: 0.3,
            mt: 0.4,
            mb: 0.5,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              boxShadow: "none",
            },
            "& .MuiSlider-rail": {
              opacity: 0.45,
              backgroundColor: "#D6C6C0",
            },
          }}
        />

        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ fontSize: 9, color: COLORS.text }}>
            ₹{filters.price[0].toLocaleString("en-IN")}
          </Typography>
          <Typography sx={{ fontSize: 9, color: COLORS.text }}>
            ₹{filters.price[1].toLocaleString("en-IN")}
          </Typography>
        </Stack>
      </FilterSection>

      <FilterSection title="SIZE">
        <Stack direction="row" flexWrap="wrap" gap={0.6}>
          {sizes.map((size) => (
            <Button
              key={size}
              onClick={() => updateArrayFilter("sizes", size)}
              variant={filters.sizes.includes(size) ? "contained" : "outlined"}
              sx={{
                minWidth: 29,
                height: 25,
                px: 0.7,
                borderRadius: 0.4,
                borderColor: COLORS.border,
                color: filters.sizes.includes(size) ? "#FFFFFF" : COLORS.text,
                backgroundColor: filters.sizes.includes(size)
                  ? COLORS.primary
                  : "transparent",
                fontSize: 9,
                "&:hover": {
                  borderColor: COLORS.primary,
                  backgroundColor: COLORS.lightPrimary,
                  color: COLORS.text,
                },
              }}
            >
              {size}
            </Button>
          ))}
        </Stack>
      </FilterSection>

      <FilterSection title="COLOR">
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {colors.map((color) => {
            const selected = filters.colors.includes(color.name);

            return (
              <Box
                key={color.name}
                title={color.name}
                onClick={() => updateArrayFilter("colors", color.name)}
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  bgcolor: color.hex,
                  cursor: "pointer",
                  border:
                    selected || color.name === "White"
                      ? `1px solid ${selected ? COLORS.primary : "#E6DCD7"}`
                      : "1px solid transparent",
                  outline: selected ? `1px solid ${COLORS.primary}` : "none",
                  outlineOffset: 2,
                  transition: "outline 0.15s",
                }}
              />
            );
          })}
        </Stack>
      </FilterSection>

      {filterGroups.slice(1).map((group) => (
        <FilterSection key={group.key} title={group.title}>
          <FormGroup>
            {group.options.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    size="small"
                    checked={filters[group.key].includes(option.value)}
                    onChange={() => updateArrayFilter(group.key, option.value)}
                    sx={{
                      p: 0.3,
                      mr: 0.5,
                      color: "#D8C9C3",
                      "&.Mui-checked": { color: COLORS.primary },
                      "& .MuiSvgIcon-root": { fontSize: 14 },
                    }}
                  />
                }
                label={`${option.label} (${option.count})`}
                sx={{
                  m: 0,
                  minHeight: 21,
                  "& .MuiFormControlLabel-label": {
                    fontSize: 10,
                    color: COLORS.text,
                  },
                }}
              />
            ))}
          </FormGroup>
        </FilterSection>
      ))}

      <Button
        fullWidth
        variant="outlined"
        onClick={onClear}
        endIcon={<RestartAltIcon sx={{ fontSize: 13 }} />}
        sx={{
          mt: 0.3,
          borderColor: COLORS.primary,
          color: COLORS.primary,
          borderRadius: 0.5,
          fontSize: 9,
          py: 0.65,
          "&:hover": {
            borderColor: COLORS.primary,
            backgroundColor: COLORS.lightPrimary,
          },
        }}
      >
        CLEAR ALL FILTERS
      </Button>
    </Box>
  );
}

function ProductCard({ product, isFavorite, onToggleFavorite, listView }) {
  return (
    <Box
      sx={{
        minWidth: 0,
        display: listView ? "flex" : "block",
        border: `1px solid ${COLORS.border}`,
        borderRadius: 0.7,
        overflow: "hidden",
        backgroundColor: COLORS.paper,
        transition: "box-shadow 0.2s, transform 0.2s",
        "&:hover": {
          boxShadow: "0 5px 18px rgba(89, 59, 47, 0.09)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: listView ? 145 : "100%",
          flexShrink: 0,
          aspectRatio: listView ? "3 / 4" : "3 / 4.5",
          bgcolor: "#F2E8E1",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s",
            "&:hover": { transform: "scale(1.04)" },
          }}
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />

        <IconButton
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => onToggleFavorite(product.id)}
          sx={{
            position: "absolute",
            top: 5,
            right: 5,
            width: 25,
            height: 25,
            bgcolor: "rgba(255,255,255,0.95)",
            "&:hover": { bgcolor: "#FFFFFF" },
          }}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ fontSize: 16, color: COLORS.primary }} />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: 16, color: COLORS.text }} />
          )}
        </IconButton>
      </Box>

      <Box
        sx={{
          p: 1,
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 0.7,
        }}
      >
        <Typography
          sx={{
            color: COLORS.text,
            fontSize: 10,
            lineHeight: 1.55,
            minHeight: listView ? 0 : 30,
            overflowWrap: "anywhere",
          }}
        >
          {product.name}
        </Typography>

        <Typography
          sx={{
            color: COLORS.primary,
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          ₹{product.price.toLocaleString("en-IN")}
        </Typography>

        {listView && (
          <Typography sx={{ color: COLORS.muted, fontSize: 10 }}>
            {product.color} · {product.pattern}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

function Shop() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [filters, setFilters] = useState(initialFilters);
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState("featured");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const productsPerPage = 12;

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);

      const patternMatch =
        filters.patterns.length === 0 ||
        filters.patterns.includes(product.pattern);

      const occasionMatch =
        filters.occasions.length === 0 ||
        filters.occasions.includes(product.occasion);

      const colorMatch =
        filters.colors.length === 0 || filters.colors.includes(product.color);

      const sizeMatch =
        filters.sizes.length === 0 ||
        filters.sizes.some((size) => product.size.includes(size));

      const priceMatch =
        product.price >= filters.price[0] && product.price <= filters.price[1];

      return (
        categoryMatch &&
        patternMatch &&
        occasionMatch &&
        colorMatch &&
        sizeMatch &&
        priceMatch
      );
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [filters, sortBy]);

  const pageCount = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage),
  );

  const currentProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage,
  );

  const clearFilters = () => {
    setFilters({
      ...initialFilters,
      categories: [],
      patterns: [],
      occasions: [],
      sizes: [],
      colors: [],
    });
    setPage(1);
  };

  const updateFilters = (updater) => {
    setFilters((previous) => {
      const next = typeof updater === "function" ? updater(previous) : updater;

      return next;
    });

    setPage(1);
  };

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id],
    );
  };

  const filterPanel = (
    <ProductFilters
      filters={filters}
      setFilters={updateFilters}
      onClear={clearFilters}
    />
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: COLORS.background,
        color: COLORS.text,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto",
          display: "flex",
          alignItems: "flex-start",
          gap: { xs: 0, md: 2.5 },
          px: { xs: 1.5, sm: 2.5, md: 3 },
          py: { xs: 2, md: 2.5 },
        }}
      >
        {!isMobile && (
          <Box
            component="aside"
            sx={{
              width: 170,
              flexShrink: 0,
              borderRight: `1px solid ${COLORS.border}`,
              pr: 2.2,
              mr: 0.3,
              minHeight: "95vh",
            }}
          >
            {filterPanel}
          </Box>
        )}

        <Box component="main" sx={{ flex: 1, minWidth: 0 }}>
          {/* Toolbar */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            gap={1.2}
            sx={{ mb: 2 }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              {isMobile && (
                <Button
                  startIcon={<MenuIcon />}
                  onClick={() => setMobileFiltersOpen(true)}
                  sx={{
                    minWidth: 0,
                    color: COLORS.text,
                    fontSize: 11,
                    px: 0.5,
                  }}
                >
                  Filters
                </Button>
              )}

              <Typography sx={{ fontSize: 10, color: COLORS.text }}>
                Showing{" "}
                {filteredProducts.length === 0
                  ? 0
                  : (page - 1) * productsPerPage + 1}
                –{Math.min(page * productsPerPage, filteredProducts.length)} of{" "}
                {filteredProducts.length} products
              </Typography>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1.2}
              sx={{ ml: "auto" }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                sx={{
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 0.6,
                  px: 0.7,
                  height: 34,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    color: COLORS.muted,
                    whiteSpace: "nowrap",
                  }}
                >
                  Sort by:
                </Typography>

                <Select
                  value={sortBy}
                  onChange={(event) => {
                    setSortBy(event.target.value);
                    setPage(1);
                  }}
                  variant="standard"
                  disableUnderline
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    fontSize: 10,
                    minWidth: 82,
                    "& .MuiSelect-select": { py: 0.5, pr: 2 },
                    "& .MuiSvgIcon-root": {
                      fontSize: 16,
                      color: COLORS.muted,
                    },
                  }}
                >
                  <MenuItem value="featured">Featured</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="name">Name</MenuItem>
                </Select>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={0.2}>
                <Typography
                  sx={{
                    fontSize: 10,
                    color: COLORS.muted,
                    display: { xs: "none", sm: "block" },
                    mr: 0.4,
                  }}
                >
                  View:
                </Typography>

                <IconButton
                  aria-label="Grid view"
                  onClick={() => setView("grid")}
                  size="small"
                  sx={{
                    color: view === "grid" ? COLORS.primary : COLORS.muted,
                    p: 0.4,
                  }}
                >
                  <GridViewIcon sx={{ fontSize: 19 }} />
                </IconButton>

                <IconButton
                  aria-label="List view"
                  onClick={() => setView("list")}
                  size="small"
                  sx={{
                    color: view === "list" ? COLORS.primary : COLORS.muted,
                    p: 0.4,
                  }}
                >
                  <ViewListIcon sx={{ fontSize: 19 }} />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>

          <Divider sx={{ mb: 2, borderColor: COLORS.border }} />

          {/* Product grid */}
          {currentProducts.length > 0 ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns:
                  view === "list"
                    ? "1fr"
                    : {
                        xs: "repeat(2, minmax(0, 1fr))",
                        sm: "repeat(3, minmax(0, 1fr))",
                        lg: "repeat(3, minmax(0, 1fr))",
                      },
                gap: { xs: 1.2, sm: 1.5 },
              }}
            >
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  onToggleFavorite={toggleFavorite}
                  listView={view === "list"}
                />
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: 2,
              }}
            >
              <Typography sx={{ fontSize: 18, mb: 1 }}>
                No products found
              </Typography>
              <Typography sx={{ fontSize: 12, color: COLORS.muted, mb: 2 }}>
                Try adjusting your filters to find something you love.
              </Typography>
              <Button
                onClick={clearFilters}
                variant="outlined"
                sx={{
                  color: COLORS.primary,
                  borderColor: COLORS.primary,
                }}
              >
                Clear filters
              </Button>
            </Box>
          )}

          {/* Pagination */}
          {filteredProducts.length > productsPerPage && (
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ mt: 2.5, mb: 1 }}
            >
              <Pagination
                count={pageCount}
                page={page}
                onChange={(_, value) => {
                  setPage(value);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                size="small"
                siblingCount={1}
                boundaryCount={1}
                sx={{
                  "& .MuiPaginationItem-root": {
                    borderRadius: 0.5,
                    minWidth: 28,
                    height: 28,
                    fontSize: 11,
                    color: COLORS.text,
                  },
                  "& .Mui-selected": {
                    bgcolor: `${COLORS.primary} !important`,
                    color: "#FFFFFF !important",
                  },
                  "& .MuiPaginationItem-root:hover": {
                    bgcolor: COLORS.lightPrimary,
                  },
                }}
              />
            </Stack>
          )}
        </Box>
      </Box>

      {/* Mobile filter drawer */}
      <Drawer
        anchor="left"
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        PaperProps={{
          sx: {
            width: "min(310px, 85vw)",
            bgcolor: COLORS.background,
            p: 2,
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography sx={{ fontWeight: 700, color: COLORS.text }}>
            Filters
          </Typography>

          <IconButton
            onClick={() => setMobileFiltersOpen(false)}
            aria-label="Close filters"
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        {filterPanel}

        <Button
          variant="contained"
          onClick={() => setMobileFiltersOpen(false)}
          sx={{
            mt: 2,
            bgcolor: COLORS.primary,
            "&:hover": { bgcolor: "#B76669" },
          }}
        >
          Show {filteredProducts.length} products
        </Button>
      </Drawer>
    </Box>
  );
}

export default Shop;
