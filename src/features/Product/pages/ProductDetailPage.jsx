import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              Thumbnail
            </Grid>

            <Grid item className={classes.right}>
              Info product
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default ProductDetailPage;
