// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import products from "../../data/Products";

// const Products = () => {
//     return (
//         <>
//             {products.map(product => (
//                 <Card key={product.id} sx={{ width: 210, height: 280 }}>
//                     <CardActionArea>
//                         <CardMedia
//                             component="img"
//                             alt={product.name}
//                             height="140"
//                             image={product.image[0] ? product.image[0].link : null }
//                             // sx={{ minHeight: 200, objectFit: "cover" }}
//                         />
//                         {/* <CardContent>
//                             <Typography gutterBottom variant="h5" component="div">
//                                 {product.name}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 {product.description}
//                             </Typography>
//                         </CardContent> */}
//                     </CardActionArea>
//                     {/* <CardActions>
//                         <Button size="small" color="primary">
//                             Learn More
//                         </Button>
//                     </CardActions> */}
//                 </Card>
//             ))}
//         </>
//     );
// };

// export default Products;
import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Badge,
  AppBar,
  Toolbar,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";

const Products = () => {
  const vouchers = [
    {
      id: 1,
      name: "Unlimited",
      duration: "30 Hari",
      originalPrice: "Rp 400.000",
      discountedPrice: "Rp 200.000",
      discount: 50,
      stock: 20,
    },
    {
      id: 2,
      name: "25 GB",
      duration: "30 Hari",
      originalPrice: "Rp 35.000",
      discountedPrice: "Rp 21.000",
      discount: 40,
      stock: 5,
    },
    {
      id: 3,
      name: "40 GB",
      duration: "30 Hari",
      originalPrice: "Rp 56.000",
      discountedPrice: "Rp 36.400",
      discount: 35,
      stock: 7,
    },
    {
      id: 4,
      name: "20 GB",
      duration: "25 Hari",
      originalPrice: "Rp 20.000",
      discountedPrice: "Rp 20.000",
      stock: "Unlimited",
    },
    {
      id: 5,
      name: "30 GB",
      duration: "30 Hari",
      originalPrice: "Rp 30.000",
      discountedPrice: "Rp 30.000",
      stock: "Unlimited",
    },
  ];

  return (
    <Box>
      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Voucher WiFi</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Saldo Anda: Rp 350.000
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Flash Sale Section */}
      <Box sx={{ backgroundColor: "#ffeded", padding: "10px" }}>
        <Typography variant="h6" sx={{ color: "red" }}>
          FLASH SALE <span style={{ fontWeight: "bold" }}>00:30:59</span>
        </Typography>
      </Box>

      {/* Voucher List */}
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={2}>
          {vouchers.map((voucher) => (
            <Grid item xs={12} key={voucher.id}>
              <Card>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={8}>
                      <Typography variant="h6">{voucher.name}</Typography>
                      <Typography variant="subtitle1">{voucher.duration}</Typography>
                      <Typography variant="body2">
                        Voucher eksklusif untuk WiFi Weslycamp
                      </Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                      {voucher.discount && (
                        <Typography
                          variant="caption"
                          sx={{
                            backgroundColor: "red",
                            color: "white",
                            padding: "2px 5px",
                            borderRadius: "5px",
                          }}
                        >
                          {voucher.discount}% OFF
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        sx={{ textDecoration: "line-through", color: "gray" }}
                      >
                        {voucher.originalPrice}
                      </Typography>
                      <Typography variant="h6" sx={{ color: "green", fontWeight: "bold" }}>
                        {voucher.discountedPrice}
                      </Typography>
                      <Typography variant="caption">Stock: {voucher.stock} Pcs</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginRight: "10px" }}
                      >
                        Beli Sekarang
                      </Button>
                      <Button variant="outlined" color="primary">
                        + Keranjang
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Bottom Navigation */}
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Beranda" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Keranjang"
          icon={
            <Badge badgeContent={2} color="error">
              <ShoppingCartIcon />
            </Badge>
          }
        />
        <BottomNavigationAction label="Transaksi" icon={<ReceiptIcon />} />
        <BottomNavigationAction label="Pengaturan" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Products;
