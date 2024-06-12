import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import { Box } from "@mui/material";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <Routes>
        <Route path="/products" element={<ProductListPage />}></Route>
      </Routes>
      <ProductListPage />
    </Box>
  );
}

export default ProductFeature;
