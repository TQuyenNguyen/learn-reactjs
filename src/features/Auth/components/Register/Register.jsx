import RegisterForm from "../RegisterForm/RegisterForm";

Register.propTypes = {};

function Register(props) {
  const handleSubmit = (values) => {
    console.log("submitForm: ", values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
