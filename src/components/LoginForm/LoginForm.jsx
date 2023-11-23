import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/auth/operations';
import {
  Form,
  Email,
  Password,
  Button,
  Text,
  Title,
  Link,
  Validation,
  EmailValidation,
  PasswordValidation,
} from './LoginForm.styled';
import { selectIsAuthenticated } from '../../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Invalid Email format',
      )
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .max(16, 'Password can be at most 16 characters long')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
        'Password must contain at least one digit, one lowercase letter, and one uppercase letter',
      )
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        login({
          email: values.email,
          password: values.password,
        }),
      );

      resetForm();
      if (isAuthenticated) {
        navigate('/user');
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Title>Login</Title>
      <EmailValidation>
        <Email
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Validation>{formik.errors.email}</Validation>
        ) : null}
      </EmailValidation>
      <PasswordValidation>
        <Password
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <Validation>{formik.errors.password}</Validation>
        ) : null}
      </PasswordValidation>
      <Button type="submit">Login</Button>
      <Text>
        Dont have an account? <Link to="/register">Register</Link>
      </Text>
    </Form>
  );
};
export default Login;
