import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;
  const { errors, formState } = form;
  console.log("errors:", errors);
  console.log("formState:", formState);
  // const hasError = formState.touched[name] && errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          disabled={disable}
          // error={!!hasError}
          helperText="that error"
        />
      )}
    />
  );
}

export default InputField;
