import { Box } from "@mui/material";
import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";

const ProductDetails = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Appbar />
      <Box sx={{ display: "flex", height: "85vh" }}>
        <Box sx={{ display: "flex", flex: 2 }}>Product</Box>
        <Box sx={{ display: "flex", flex: 1 }}>Counter</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductDetails;
