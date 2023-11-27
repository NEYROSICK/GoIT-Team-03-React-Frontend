import { useFormik } from 'formik';
import * as Yup from 'yup';
import sprite from '../../../ui/Icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/auth/operations';
import { Container } from '../../Layout/Container/Container';
import {
  Form,
  Svg,
  Email,
  Password,
  Button,
  SvgEye,
  Text,
  Title,
  Link,
  ClearButton,
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
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Login</Title>
        <EmailValidation>
          <Email
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email.toLocaleLowerCase()}
            isValid={!formik.touched.email || !formik.errors.email}
          />

          {formik.touched.email && formik.errors.email ? (
            <>
              {formik.values.email && (
                <ClearButton
                  type="button"
                  onClick={() => {
                    formik.setFieldValue('email', '');
                    formik.setFieldTouched('email', false);
                  }}
                >
                  <Svg>
                    <use href={sprite + '#iconCross'}></use>
                  </Svg>
                </ClearButton>
              )}
              <Validation>{formik.errors.email}</Validation>
            </>
          ) : null}
        </EmailValidation>
        <PasswordValidation>
          <Password
            id="password"
            name="password"
            type={formik.values.showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            isValid={!formik.touched.password || !formik.errors.password}
          />
          <ClearButton
            type="button"
            onClick={() => {
              formik.setFieldTouched('password', false);
              formik.setFieldValue('showPassword', !formik.values.showPassword);
            }}
          >
            {formik.values.showPassword ? (
              <SvgEye>
                <use href={sprite + '#iconEyeOpen'}></use>
              </SvgEye>
            ) : (
              <SvgEye>
                <use href={sprite + '#iconEyeClosed'}></use>
              </SvgEye>
            )}
          </ClearButton>
          {formik.touched.password && formik.errors.password ? (
            <Validation>{formik.errors.password}</Validation>
          ) : null}
        </PasswordValidation>
        <Button type="submit">Login</Button>
        <Text>
          Dont have an account? <Link to="/register">Register</Link>
        </Text>
      </Form>
    </Container>
  );
};
export default Login;
