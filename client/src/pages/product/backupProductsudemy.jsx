import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
    Box,
    CardActionArea,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import products from "../../data/Products";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { orange } from "@mui/material/colors";
import { useState } from "react";

const Products = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const searchFunction = (e) => {
        setSearch(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const categories = [...new Set(products.map((product) => product.categories))];

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory =
            selectedCategory === "" || product.categories === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", p: 2 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
                <Input
                    placeholder="Search Products..."
                    type="text"
                    onChange={searchFunction}
                    value={search}
                    sx={{ p: 1, width: "100%" }}
                />
                <FormControl sx={{ minWidth: 200, transition: "none" }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Category" }}
                        sx={{ transition: "none" }} // Remove transitions
                    >
                        <MenuItem value="">
                            <em>All Categories</em>
                        </MenuItem>
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: "center",
                }}
            >
                {filteredProducts.map((product) => (
                    <Card key={product.name} sx={{ width: 210, minHeight: 280 }}>
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
                                {product.rating}{" "}
                                <StarRoundedIcon sx={{ color: orange[500] }} />
                            </Typography>
                            <Typography sx={{ display: "flex", alignItems: "center" }}>
                                Stock: {product.stock}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Products;
