import React from "react";
import ProductListPage from "./pages/ProductListPage";
import { Box } from "@mui/material";
import { Route, Switch } from "react-router";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <Switch>
        <Route path="/products" component={ProductListPage}></Route>
      </Switch>
    </Box>
  );
}

export default ProductFeature;
