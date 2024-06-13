import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
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
    <Box>
      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>

      <Box>
        <TextField
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
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
