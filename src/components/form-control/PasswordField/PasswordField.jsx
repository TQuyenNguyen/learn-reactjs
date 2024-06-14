import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import PropTypes from "prop-types";
import { useState } from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import { Controller } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { FormHelperText } from "@mui/material";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  const { form, name, label, disable } = props;
  const { errors } = form;
  //   const hasError = errors[name];
  return (
    <div>
      <FormControl sx={{ m: "20px 0 0 0", width: "100%" }} variant="outlined">
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ onChange, onBlur, value, name }) => (
            <OutlinedInput
              id={name}
              type={showPassword ? "text" : "password"}
              label={label}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              // disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {/* <FormHelperText error={!!hasError }>{errors[name]?.message}</FormHelperText> */}
      </FormControl>
    </div>
  );
}

export default PasswordField;
