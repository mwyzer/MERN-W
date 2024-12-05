import React from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { Notifications, Wifi, AttachMoney, People, Group, Home, ShoppingCart, Receipt, Settings } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: "#0a2540", minHeight: "100vh", color: "white" }}>
      {/* Header Section */}
      <AppBar position="static" sx={{ backgroundColor: "#0a2540" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar alt="Profile" src="/profile.jpg" sx={{ width: 50, height: 50 }} />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Davriel Wija Grazio
              </Typography>
              <Typography variant="body2" color="gray">
                Member Silver
              </Typography>
            </Box>
          </Box>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <Notifications />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Balance Section */}
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "white",
          color: "#0a2540",
          borderRadius: 2,
          p: 2,
          mx: 2,
          mt: 3,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" color="gray">
              Saldo Anda
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              Rp 350.000
            </Typography>
            <Typography variant="body2" color="gray">
              20 Poin
            </Typography>
          </Box>
          <Button variant="contained" color="primary">
            Top Up
          </Button>
        </Box>
      </Paper>

      {/* Quick Actions */}
      <Grid container spacing={2} sx={{ textAlign: "center", mt: 3, px: 2 }}>
        {[
          { icon: <Wifi />, label: "Voucher WiFi" },
          { icon: <AttachMoney />, label: "Tukar Poin" },
          { icon: <Group />, label: "Mitra Wilzio" },
          { icon: <People />, label: "Referral" },
        ].map((action, idx) => (
          <Grid item xs={3} key={idx}>
            <Box
              sx={{
                backgroundColor: "#1976d2",
                borderRadius: "50%",
                p: 2,
                display: "inline-flex",
              }}
            >
              {action.icon}
            </Box>
            <Typography variant="body2" mt={1}>
              {action.label}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Promo Section */}
      <Box sx={{ px: 2, mt: 3 }}>
        <img
          src="/promo-banner.jpg"
          alt="Promo Banner"
          style={{ width: "100%", borderRadius: 8 }}
        />
      </Box>

      {/* Flash Sale Section */}
      <Box sx={{ px: 2, mt: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            FLASH SALE
          </Typography>
          <Typography variant="body2" color="gray">
            00:30:59
          </Typography>
        </Box>
        <Grid container spacing={2} mt={1}>
          {[...Array(2)].map((_, idx) => (
            <Grid item xs={6} key={idx}>
              <Card sx={{ backgroundColor: "white", color: "#0a2540", p: 2 }}>
                <CardContent>
                  <Typography variant="body2" fontWeight="bold">
                    Unlimited
                  </Typography>
                  <Typography variant="body2" color="gray">
                    30 Hari
                  </Typography>
                  <Typography variant="h6" color="red" fontWeight="bold">
                    Rp 200.000
                  </Typography>
                  <Typography variant="body2" color="gray" sx={{ textDecoration: "line-through" }}>
                    Rp 400.000
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    Stock: 20
                  </Typography>
                  <Button variant="contained" color="error" fullWidth sx={{ mt: 1 }}>
                    Beli Sekarang
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Voucher WiFi Section */}
      <Box sx={{ px: 2, mt: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Voucher WiFi
          </Typography>
          <Typography variant="body2" color="gray">
            Lihat semua
          </Typography>
        </Box>
        <Grid container spacing={2} mt={1}>
          {[...Array(3)].map((_, idx) => (
            <Grid item xs={6} key={idx}>
              <Card sx={{ backgroundColor: "white", color: "#0a2540", p: 2 }}>
                <CardContent>
                  <Typography variant="body2" fontWeight="bold">
                    20 GB
                  </Typography>
                  <Typography variant="body2" color="gray">
                    25 Hari
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    Rp 20.000
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                    Beli Sekarang
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Bottom Navigation */}
      <BottomNavigation
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "#1976d2" }}
      >
        {[
          { label: "Beranda", icon: <Home /> },
          { label: "Keranjang", icon: <ShoppingCart /> },
          { label: "Transaksi", icon: <Receipt /> },
          { label: "Pengaturan", icon: <Settings /> },
        ].map((nav, idx) => (
          <BottomNavigationAction
            key={idx}
            label={nav.label}
            icon={nav.icon}
            sx={{ color: "white" }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default Dashboard;
