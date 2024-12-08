import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { orange } from "@mui/material/colors";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import OrderDetails from "./OrderDetails";

const createMarkUp = (html) => {
  return { __html: html };
};

const ProductDetails = () => {
  const product = {
    name: "Rodrick Schwant",
    image: [
      { link: "http://dummyimage.com/650x650.png/ff4444/ffffff" },
      { link: "http://dummyimage.com/650x650.png/ff4444/ffffff" },
      { link: "http://dummyimage.com/650x650.png/dddddd/000000" },
      { link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff" },
      { link: "http://dummyimage.com/650x650.png/dddddd/000000" },
    ],
    desc: "<p><span style=\"color: rgb(33, 33, 33);\">Infinix INBOOK X2</span></p><p><span style=\"color: rgb(33, 33, 33);\">Color : Grey, Blue, Red</span></p><p><br></p><p><span style=\"color: rgb(33, 33, 33);\">Perfect Style, Amazing Display</span></p><p><br></p><p><span style=\"color: rgb(33, 33, 33);\">• Processor : Intel® Core™ i7-1065G7 Processor 8M Cache, up to 3.90 GHz</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Memory : 8GB DDR4</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Storage : SSD 512GB M.2 NVMe PCIe 3.0</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Operating System : Windows 11 Home</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Display : 14\" FHD (1920*1080) IPS 300 nits, Colour Gamut100% sRGB, Viewing Angle178 degrees</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Graphics : Intel® Iris® Plus Graphics</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Battery : 50 Wh</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Wi-Fi : IEEE 802.11a/b/g/n/ac,160MHz 2.4GHz and 5GHz</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Bluetooth : BT 5.1</span></p><p><br></p><p><span style=\"color: rgb(33, 33, 33);\">• Ports :</span></p><p><span style=\"color: rgb(33, 33, 33);\">USB-C x 1 (Data, Charging and DisplayPort)</span></p><p><span style=\"color: rgb(33, 33, 33);\">USB-C x 1 (Data)</span></p><p><span style=\"color: rgb(33, 33, 33);\">USB 3.0 × 2</span></p><p><span style=\"color: rgb(33, 33, 33);\">HDMI 1.4 × 1</span></p><p><span style=\"color: rgb(33, 33, 33);\">SD card slot x 1</span></p><p><span style=\"color: rgb(33, 33, 33);\">3.5 mm Headset and Microphone Jack x 1</span></p><p><br></p><p><span style=\"color: rgb(33, 33, 33);\">• Keyboard : Full-size Backlit Chiclet Keyboard</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Touchpad : Touchpad with Multi-touch</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Camera : Dual-Star light HD Video Camera</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Audio : Dual DTS audio processing</span></p><p><span style=\"color: rgb(33, 33, 33);\">• Microphone : Microphone x 2</span></p><p><br></p><p><span style=\"color: rgb(33, 33, 33);\">• In The Box :</span></p><p><span style=\"color: rgb(33, 33, 33);\">Inbook X2</span></p><p><span style=\"color: rgb(33, 33, 33);\">45W USB-C Power Adapter</span></p><p><span style=\"color: rgb(33, 33, 33);\">USB-C Charger Cable</span></p><p><span style=\"color: rgb(33, 33, 33);\">Quick Start Guide</span></p><p><span style=\"color: rgb(33, 33, 33);\">Warranty Card</span></p><p><br></p><p><span style=\"color: rgb(33, 33, 33);\">Case : Aluminium Alloy</span></p><p><br></p><p><span style=\"color: rgb(33, 33, 33);\">Garansi Resmi Infinix Indonesia 2 Tahun</span></p>",
    price: 6562674,
    weight: 1708,
    rating: 4,
    reviews: [
      { user: "User1", rating: 5, comment: "Excellent product!" },
      { user: "User2", rating: 3, comment: "Decent quality." },
    ],
  };

  const [imageIndex, setImageIndex] = useState(0);

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return product.image.length - 1; // Go to the last image
      }
      return prevIndex - 1; // Decrement index
    });
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex === product.image.length - 1) {
        return 0; // Go to the first image
      }
      return prevIndex + 1; // Increment index
    });
  };

  return (
    <Box>
      <Appbar />
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        {/* Image Section */}
        <Box sx={{ display: "flex", flex: 2, alignItems: "start" }}>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              position: "relative",
            }}
          >
            <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <img
                src={product.image[imageIndex].link}
                alt={product.name}
                style={{
                  height: "450px",
                  width: "450px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              {/* Left Arrow */}
              <IconButton
                sx={{
                  position: "absolute",
                  left: -30,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                }}
                onClick={handlePrevImage}
              >
                <ArrowCircleLeftIcon fontSize="large" />
              </IconButton>
              {/* Right Arrow */}
              <IconButton
                sx={{
                  position: "absolute",
                  right: -30,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                }}
                onClick={handleNextImage}
              >
                <ArrowCircleRightIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
          {/* Detail Section */}
          <Box sx={{ display: "flex", flex: 1, p: 2, gap: 1, flexDirection: "column" }}>
            <Typography variant="h5" fontWeight="bold">
              {product.name}
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <StarRoundedIcon sx={{ color: orange[500] }} />
              {product.rating} dari {product.reviews.length} reviewers
            </Typography>
            <Typography sx={{ color: "gray" }}>
              {product.weight} gram
            </Typography>
            <Typography fontWeight="bold" variant="h5">
              {`Rp ${parseFloat(product.price).toLocaleString("id-ID")}`}
            </Typography>
            <Typography dangerouslySetInnerHTML={createMarkUp(product.desc)} />
          </Box>
        </Box>
        {/* Placeholder for Counter Section */}
        <Box sx={{ display: "flex", flex: 1, p: 2 }}>
          <OrderDetails />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductDetails;
