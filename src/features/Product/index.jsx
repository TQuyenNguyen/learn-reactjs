import React from "react";
import ProductListPage from "./pages/ProductListPage";
import { Box } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router";
import ProductDetailPage from "./pages/ProductDetailPage";

function ProductFeature(props) {
  const match = useRouteMatch();

  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ProductListPage}></Route>
        <Route
          path={`${match.url}/:productId`}
          component={ProductDetailPage}
        ></Route>
      </Switch>
    </Box>
  );
}

export default ProductFeature;
