import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

import { useLoginMutation, useRegisterMutation } from '../../redux/API/authApi';

import { useFormik } from 'formik'
import { setToken } from '../../redux/auth/authSlice';


export default function Register() {
    const dispatch = useDispatch();
    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();
    const navigate = useNavigate();
   
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            
        },
        
        
     onSubmit: async (values, { resetForm })  => {
        const {name,email,password} = values
        if (name && email && password) {
            const response = await register(values);
            if (response) {
              const { data } = await login({
                email: email,
                password: password,
              });
              dispatch(setToken(data.token));
              navigate('/');
            } else if (!response) {
              alert("You made a mistake try again!");
            }
          }
    resetForm();

        }})
        
    return (
        <form onSubmit={formik.handleSubmit}>
            
            <input
                id="name"
                name="name"
                type="text"
                placeholder='name'
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            
            <input
                id="email"
                name="email"
                type="text"
                placeholder='email'
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            
            <input
                id="password"
                name="password"
                type="password"
                placeholder='password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <button type="submit">Registration</button>
        </form>
    );
}   
        