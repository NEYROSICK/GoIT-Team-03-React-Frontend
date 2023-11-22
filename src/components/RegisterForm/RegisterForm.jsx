import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import { useFormik } from 'formik'


export default function Register() {
    const dispatch = useDispatch();
   
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            
        },
        
        
     onSubmit: (values, { resetForm }) => {
    dispatch(
        register({
            name: values.userName,
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
                id="userName"
                name="userName"
                type="text"
                placeholder='userName'
                onChange={formik.handleChange}
                value={formik.values.userName}
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
        