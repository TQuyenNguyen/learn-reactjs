import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProductThumbnail from "../components/ProductThumbnail";
import { useRouteMatch } from "react-router";
import useProductDetail from "../hooks/useProductDetail";
import ProductInfo from "../components/ProductInfo";
import AddToCartForm from "../components/AddToCartForm";
import ProductMenu from "../components/ProductMenu";

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: "400px",
    padding: "12px",
    borderRight: "1px solid #dedede",
  },

  right: {
    flex: "1 1 0",
    padding: "12px",
  },
}));

function ProductDetailPage(props) {
  const classes = useStyles();
  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    //Make it more attractive
    return <Box>Loading</Box>;
  }

  const handleAddToCartSubmit = (formvalues) => {
    console.log("form submit: ", formvalues);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>

            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
      </Container>
    </Box>
  );
}

export default ProductDetailPage;
