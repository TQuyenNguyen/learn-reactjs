import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import PropTypes from "prop-types";
import { useState } from "react";

import OutlinedInput from "@mui/material/OutlinedInput";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { form, name, label, disable } = props;
  const { errors } = form;
  //   const hasError = errors[name];
  return (
    <div>
      <FormControl sx={{ m: "20px 0 0 0", width: "100%" }} variant="outlined">
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <OutlinedInput
          id={name}
          type={showPassword ? "text" : "password"}
          label={label}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
              </IconButton>
            </InputAdornment>
          }
          disabled={disable}
          //   error={!!hasError}
          //   helperText="that error"
        />
      </FormControl>
    </div>
  );
}

export default PasswordField;
