import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import {
  RegisterForm,
  Input,
  Button,
  Text,
  Title,
  ConfirmPassword,
  Link,
  Validation,
  InputValidation,
  ConfirmValidation,
  ClearButton,
  Svg,
  SvgEye,
  ContainerMain,
} from './RegisterForm.styled';
import { useFormik } from 'formik';
// import { Container } from "../../Layout/Container/Container"
import sprite from '../../../ui/Icons/sprite.svg'
import {Container} from '../../Layout/Container/Container'
import { login } from '../../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../../../redux/auth/selectors';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(2, 'Name must be at least 2 characters long')
      .max(16, 'Name can be at most 16 characters long')
      .matches(/^[a-zA-Z\s]+$/, 'Name must contain only letters and spaces')
      .required('Name is required'),
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(values.password);
        console.log(values.confirmPassword);

        if (values.password === values.confirmPassword) {
          await dispatch(
            register({
              name: values.userName,
              email: values.email,
              password: values.password,
            }),
          );
          await dispatch(
            login({
              email: values.email,
              password: values.password,
            }),
          );
          resetForm();
          if (isAuthenticated) {
            navigate('/user');
          }
        } else {
          alert(
            'Passwords do not match. Please ensure that both password fields contain the same value.',
          );
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  });
  return (
    <Container>
    <ContainerMain>
      <RegisterForm onSubmit={formik.handleSubmit}>
        <Title>Registration</Title>
        <InputValidation>
          <Input
            id="userName"
            name="userName"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.userName}
            isValid={!formik.touched.userName || !formik.errors.userName}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <>
              {formik.values.userName && (
                <ClearButton
                  type="button"
                  onClick={() => {
                    formik.setFieldValue('userName', '');
                    formik.setFieldTouched('userName', false);
                  }}
                >
                  <Svg>
                    <use href={sprite + '#iconCross'}></use>
                  </Svg>
                </ClearButton>
              )}
              <Validation>{formik.errors.userName}</Validation>
            </>
          ) : null}
        </InputValidation>
        <InputValidation>
          <Input
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
        </InputValidation>
<InputValidation>
  <Input
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
    {formik.values.showPassword  ? (
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
</InputValidation>

{/* ПЕРЕВІРКА ПАРОЛЯ */}
<ConfirmValidation>
  <ConfirmPassword
    id="confirmPassword"
    name="confirmPassword"
    type={formik.values.showConfirmPassword ? 'text' : 'password'}
    placeholder="Confirm password"
    onChange={formik.handleChange}
    value={formik.values.confirmPassword}
    isValid={!formik.touched.confirmPassword || !formik.errors.confirmPassword}
  />
  <ClearButton
    type="button"
    onClick={() => {
      formik.setFieldTouched('confirmPassword', false);
      formik.setFieldValue('showConfirmPassword', !formik.values.showConfirmPassword);
    }}
  >
    {formik.values.showConfirmPassword ? (
      <SvgEye>
        <use href={sprite + '#iconEyeOpen'}></use>
      </SvgEye>
    ) : (
      <SvgEye>
        <use href={sprite + '#iconEyeClosed'}></use>
      </SvgEye>
    )}
  </ClearButton>
  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
    <Validation>{formik.errors.confirmPassword}</Validation>
  ) : null}
</ConfirmValidation>
        <Button type="submit">Registration</Button>
        <Text>
          {' '}
          Already have an account?<Link to="/login">Login</Link>
        </Text>
      </RegisterForm>
      </ContainerMain>
      </Container>
  );
}
