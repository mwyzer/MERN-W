import React, { useState, useEffect } from "react";
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
  BottomNavigation,
  BottomNavigationAction,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Pagination,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const vouchers = [
    {
      id: 1,
      name: "Unlimited",
      category: "High-Speed",
      duration: "30 Hari",
      originalPrice: "Rp 400.000",
      discountedPrice: "Rp 200.000",
      discount: 50,
      stock: 20,
    },
    {
      id: 2,
      name: "25 GB",
      category: "Standard",
      duration: "30 Hari",
      originalPrice: "Rp 35.000",
      discountedPrice: "Rp 21.000",
      discount: 40,
      stock: 5,
    },
    {
      id: 3,
      name: "40 GB",
      category: "Standard",
      duration: "30 Hari",
      originalPrice: "Rp 56.000",
      discountedPrice: "Rp 36.400",
      discount: 35,
      stock: 7,
    },
    {
      id: 4,
      name: "20 GB",
      category: "Budget",
      duration: "25 Hari",
      originalPrice: "Rp 20.000",
      discountedPrice: "Rp 20.000",
      stock: "Unlimited",
    },
    {
      id: 5,
      name: "30 GB",
      category: "Budget",
      duration: "30 Hari",
      originalPrice: "Rp 30.000",
      discountedPrice: "Rp 30.000",
      stock: "Unlimited",
    },
  ];

  const vouchersPerPage = 2;

  // Filtered vouchers based on search and category
  const filteredVouchers = vouchers.filter((voucher) => {
    const matchesSearch = voucher.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || voucher.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const pageCount = Math.ceil(filteredVouchers.length / vouchersPerPage);

  // Ensure the current page is valid when filtered vouchers change
  useEffect(() => {
    if (currentPage > pageCount) {
      setCurrentPage(1); // Reset to page 1 if current page exceeds the total pages
    }
  }, [filteredVouchers, pageCount]);

  const paginatedVouchers = filteredVouchers.slice(
    (currentPage - 1) * vouchersPerPage,
    currentPage * vouchersPerPage
  );

  const categories = [...new Set(vouchers.map((voucher) => voucher.category))];

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to page 1 when search term changes
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to page 1 when category changes
  };

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

      {/* Search and Category Filters */}
      <Box sx={{ padding: "20px", display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Input
          placeholder="Cari Voucher..."
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ flex: 1, minWidth: "200px" }}
        />
        <FormControl sx={{ flex: 1, minWidth: "200px" }}>
          <InputLabel>Kategori</InputLabel>
          <Select value={selectedCategory} onChange={handleCategoryChange}>
            <MenuItem value="">Semua Kategori</MenuItem>
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Voucher List */}
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={3}>
          {paginatedVouchers.map((voucher) => (
            <Grid item xs={12} sm={6} md={4} key={voucher.id}>
              <Card>
                <CardContent>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={8}>
                      <Typography variant="h6">{voucher.name}</Typography>
                      <Typography variant="subtitle1">{voucher.duration}</Typography>
                      <Typography variant="body2" color="text.secondary">
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
                      <Typography variant="caption" color="text.secondary">
                        Stock: {voucher.stock} Pcs
                      </Typography>
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

      {/* Pagination */}
      <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

      {/* Bottom Navigation */}
      <BottomNavigation showLabels sx={{ position: "fixed", bottom: 0, width: "100%" }}>
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
