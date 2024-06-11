import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputField from "components/form-control/InputField/InputField";
import PasswordField from "components/form-control/PasswordField/PasswordField";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useStyles = makeStyles(() => ({
  root: { paddingTop: "10px" },
  avatar: {
    margin: "0 auto",
    backgroundColor: "green",
  },
  title: {
    textAlign: "center",
    margin: "20px 0 30px 0",
  },
  submit: { margin: "20px 0 30px 0" },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup
    .object({
      fullName: yup
        .string()
        .required("Please enter your full name!")
        .test(
          "should enter at least 2 words",
          "Please enter at least 2 words",
          (value) => {
            return value.split(" ").length >= 2;
          }
        ),
      email: yup
        .string()
        .required("Please enter your email")
        .email("please enter valid email address"),
      password: yup
        .string()
        .required("Please enter your password")
        .min(6, "Please enter at least 6 characters"),
      retypePassword: yup
        .string()
        .required("please retype your password")
        .oneOf([yup.ref("password")], "password does not match!"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });
  const handlerSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Create an account
      </Typography>
      <form onSubmit={form.handleSubmit(handlerSubmit)}>
        <InputField name="fullName" label="FullName" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button
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

export default RegisterForm;
