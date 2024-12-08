import React from 'react';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const OrderDetails = () => {
    return (
        <Box
            sx={{
                width: "100%",
                borderRadius: "10px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                marginBottom: "20px",
            }}
        >
            <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
                Atur Jumlah
            </Typography>
            {/* Add additional content here, e.g., buttons for Add/Remove */}

            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button><RemoveIcon /></button>
                <Typography>1</Typography>
                <button><AddIcon /></button>
            </Box>
        </Box>
    );
};

export default OrderDetails;
