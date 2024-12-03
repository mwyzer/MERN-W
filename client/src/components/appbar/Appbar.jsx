import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Appbar = () => {
  const user = "user"; // Change this value to "admin" to test admin menu

  const userMenu = ["Profile", "Orders", "Logout"];
  const adminMenu = ["Settings", "Dashboard", "Logout"];

  const [open, setOpen] = useState(null);

  const menuOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const menuClose = () => {
    setOpen(null);
  };

  const menuItems = user === "user" ? userMenu : adminMenu;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <img
            src="logo2.png"
            alt="logo"
            style={{ height: "60px", width: "120px", objectFit: "contain" }}
          />

          {/* Icons Section */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {/* Shopping Cart Icon */}
            <IconButton color="inherit">
              <ShoppingCartOutlinedIcon />
            </IconButton>

            {/* Conditional Rendering for User/Admin Menu */}
            <IconButton color="inherit" onClick={menuOpen}>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={open}
              open={Boolean(open)}
              onClose={menuClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {menuItems.map((item) => (
                <MenuItem onClick={menuClose} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
