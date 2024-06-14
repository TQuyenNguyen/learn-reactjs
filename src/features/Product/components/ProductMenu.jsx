import { Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";

ProductMenu.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",

    padding: 0,
    listStyleType: "none",

    "& > li": {
      padding: "18px 36px",
    },

    "& > li > a": {
      color: "#838383",
    },

    "& > li > a.active": {
      color: "blue",
      textDecoration: "underline",
    },
  },
}));

function ProductMenu(props) {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={url} exact>
          Description
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/additional`} exact>
          Additional Information
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/reviews`} exact>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
