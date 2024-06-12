import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputField from "components/form-control/InputField/InputField";
import PasswordField from "components/form-control/PasswordField/PasswordField";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useStyles = makeStyles(() => ({
  root: { paddingTop: "10px", position: "relative" },
  avatar: {
    margin: "0 auto",
    backgroundColor: "green",
  },
  title: {
    textAlign: "center",
    margin: "20px 0 30px 0",
  },
  submit: { margin: "20px 0 30px 0" },
  progress: {
    position: "absolute",
    top: "10px",
    right: 0,
    left: 0,
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();
  const schema = yup
    .object({
      identifier: yup
        .string()
        .required("Please enter your email")
        .email("please enter valid email address"),
      password: yup.string().required("Please enter your password"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handlerSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    //fail form cant reset
    // form.reset();
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handlerSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          variant="outlined"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
