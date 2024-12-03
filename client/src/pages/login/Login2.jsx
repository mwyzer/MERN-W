import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#e6f0ff",
        padding: "20px",
      }}
    >
      {/* Welcome Section */}
      <Typography variant="h5" fontWeight="bold" color="primary" sx={{ mb: 2 }}>
        Selamat datang di WILZIO
      </Typography>

      {/* Icons Section */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2, gap: 2 }}>
        <Box
          component="img"
          src="/wallet-icon.png"
          alt="Wallet"
          sx={{ width: "40px" }}
        />
        <Box
          component="img"
          src="/wifi-icon.png"
          alt="WiFi"
          sx={{ width: "40px" }}
        />
        <Box
          component="img"
          src="/promo-icon.png"
          alt="Promo"
          sx={{ width: "40px" }}
        />
        <Box
          component="img"
          src="/heart-icon.png"
          alt="Loyalty"
          sx={{ width: "40px" }}
        />
      </Box>

      <Typography
        variant="body1"
        textAlign="center"
        sx={{ mb: 4, color: "#4a4a4a" }}
      >
        Semua yang Anda Butuhkan, Kapan Saja, di Mana Saja!
        <br />
        Top up saldo, voucher WiFi eksklusif, promo menarik, tukar poin serta
        manfaat lainnya hanya dengan WILZIO. Bergabunglah sekarang!
      </Typography>

      {/* Login Form */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <TextField
          fullWidth
          label="Username atau Email"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          sx={{ mb: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography
          variant="caption"
          textAlign="right"
          display="block"
          sx={{ mb: 2 }}
        >
          <a href="/" style={{ textDecoration: "none", color: "#1565c0" }}>
            Lupa Password?
          </a>
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          Masuk
        </Button>
        <Typography textAlign="center" sx={{ mb: 2 }}>
          <span style={{ color: "#aaaaaa" }}>Atau</span>
        </Typography>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            mb: 2,
            borderColor: "#1565c0",
            color: "#1565c0",
            fontWeight: "bold",
          }}
        >
          Masuk dengan Google
        </Button>
        <Typography textAlign="center">
          Belum Memiliki Akun?{" "}
          <a href="/register" style={{ textDecoration: "none", color: "#1565c0" }}>
            Daftar
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
