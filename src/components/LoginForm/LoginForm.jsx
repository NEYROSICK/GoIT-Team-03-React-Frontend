import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        login({
          email: values.email,
          password: values.password,
        }),
      );

      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;
