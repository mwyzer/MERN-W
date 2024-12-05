import React from "react";
import { useParams } from "react-router-dom"; // To get the product ID from URL
import { Box, Typography, Button, CardMedia } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { orange } from "@mui/material/colors";
import products from "../../data/Products.jsx";
 // Product data

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const product = products.find((p) => p.id.toString() === id); // Find the product by ID

  if (!product) {
    return <Typography variant="h4">Product not found</Typography>; // Handle invalid ID
  }

  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        alt={product.name}
        image={product.image[0] ? product.image[0].link : ""}
        sx={{ width: "80%", maxWidth: 600, borderRadius: 2 }}
      />

      {/* Product Information */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
            mt: 1,
          }}
        >
          {product.rating} <StarRoundedIcon sx={{ color: orange[500] }} />
        </Typography>
        <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mt: 2 }}>
          {`Rp ${parseFloat(product.price).toLocaleString("id-ID")}`}
        </Typography>
        <Typography sx={{ mt: 1, fontStyle: "italic" }}>Category: {product.category}</Typography>
        <Typography sx={{ mt: 1 }}>Stock: {product.stock}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {product.description}
        </Typography>
      </Box>

      {/* Actions */}
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Add to Cart
        </Button>
        <Button variant="outlined" color="secondary">
          Back to Products
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
