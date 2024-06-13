import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "16px",
    borderTop: "solid 1px #dedede",
  },
  range: {
    display: "flex",
    flexFlow: "nowrap",
    alignItems: "center",

    marginBottom: "8px",
    marginTop: "8px",

    "& > span": {
      marginLeft: "8px",
      marginRight: "8px",
    },
  },
}));

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const classes = useStyle();
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);

    // set Price to 0

    // setValues({
    //   salePrice_gte: 0,
    //   salePrice_lte: 0,
    // });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>

      <Box className={classes.range}>
        <TextField
          id="standard-basic"
          label="From"
          variant="standard"
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
          id="standard-basic"
          label="To"
          variant="standard"
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>

      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleSubmit}
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
