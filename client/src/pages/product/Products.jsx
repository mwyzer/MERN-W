import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Pagination,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { orange } from "@mui/material/colors";
import products from "../../data/Products";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 30; // Number of products per page

  const searchFunction = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to page 1 when search term changes
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to page 1 when category changes
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const categories = [...new Set(products.map((product) => product.category))];

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const productDetailPage = (product) => {
    navigate(`/${product}`);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", p: 2 }}>
      {/* Search and Category Filters */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Align search to left, dropdown to right
          alignItems: "center",
          mb: 2,
        }}
      >
        <Input
          placeholder="Search Products..."
          type="text"
          onChange={searchFunction}
          value={search}
          sx={{
            p: 0.5,
            width: "300px", // Adjusted width for search bar
            height: "35px", // Smaller height
            fontSize: "0.875rem", // Smaller font size
          }}
        />
        <FormControl
          sx={{
            minWidth: 200, // Adjusted width for dropdown
            height: "35px", // Smaller height
          }}
        >
          <InputLabel sx={{ fontSize: "0.875rem" }}>Category</InputLabel>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            displayEmpty
            inputProps={{ "aria-label": "Category" }}
            sx={{
              height: "35px", // Smaller height
              fontSize: "0.875rem", // Smaller font size
            }}
          >
            <MenuItem value="">
              <em>All Categories</em>
            </MenuItem>
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Product Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {paginatedProducts.map((product, index) => (
          <Card
            key={index}
            sx={{
              width: 210,
              minHeight: 280,
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => productDetailPage(product.name)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt={product.name}
                image={product.image[0] ? product.image[0].link : ""}
                sx={{ minHeight: 200, objectFit: "cover" }}
              />
            </CardActionArea>
            <CardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography fontWeight="bold">
                {`Rp ${parseFloat(product.price).toLocaleString("id-ID")}`}
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                {product.rating} <StarRoundedIcon sx={{ color: orange[500] }} />
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                Stock: {product.stock}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Pagination */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default Products;
