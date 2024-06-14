import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { formatPrice } from "utils";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "18px",
    borderBottom: "1px solid #dedede",
  },

  description: {
    margin: "18px 0",
  },

  priceBox: {
    padding: "18px",
    backgroundColor: "#ededed",
  },

  salePrice: {
    marginRight: "27px",
    fontSize: "1.3rem",
    fontWeight: "bold",
  },

  originalPrice: {
    marginRight: "18px",
    textDecoration: "line-through",
  },
}));

function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;

  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>

      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>

      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>

        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>

            <Box component="span">{`-${promotionPercent}%`}</Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
