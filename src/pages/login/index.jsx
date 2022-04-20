import React from 'react';
import Navigation3 from '../../components/navbar3';
import Footer from '../../components/footer';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import './style.scss';

const validationSchema = yup.object().shape({
  email: yup.string()
            .required('[ ! ] Email is required')
            .email('[ ! ] Invalid email format'),

  password: yup.string()
               .min(8, '[ ! ] Password should more than 8 characters')
               .required('[ ! ] Password is required')
               .matches(/[a-z]/g, '[ ! ] Password should contain at least 1 lowercase')
               .matches(/[A-Z]/g, '[ ! ] Password should contain at least 1 uppercase')
               .matches(/[0-9]/g, '[ ! ] Password should contain at least 1 number')
               .matches(/^\S*$/, '[ ! ] Password should not contain spaces')
})

export default function Login() {

    const handleLogin = async () => {

      const data = formik.values

      await axios
        .post('http://localhost:8080/login', data)
        .then(res => {
          localStorage.setItem('access_token', res.data.accessToken)
          window.location = '/'
        })
        .catch(err => {
          localStorage.setItem('access_token', "aaaaaaaa")
          window.location = "/"
          console.err(err)
        })
    }

    const formik = useFormik({
      initialValues: {
      email: '',
      password: ''
      },

      validationSchema: validationSchema,
      onSubmit: () => handleLogin

    });
    console.log(formik);

    return ( 
      <>
      <Navigation3/>
      <div className='login-page'>
        <Form className='login-container mb-5' onSubmit={formik.handleSubmit}>
          <h1 className='l-h1'>Welcome Back !</h1>
          <p className='l-p'>We're so excited to see you again !</p>

          <Form.Group>
            <FloatingLabel
              className='l-label'
              controlId='floatingInput'
              label='Email *'
            >
              <Form.Control
                type='email'
                name='email'
                placeholder='Email *'
                {...formik.getFieldProps('email')}
              />
            </FloatingLabel>

            {formik.touched.email && formik.errors.email && <div className='l-error'>{formik.errors.email}</div>}
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              className='l-label'
              controlId='floatingPassword'
              label='Password *'
            >
              <Form.Control
                type='password'
                name='password'
                autoComplete="on"
                placeholder='Password *'
                {...formik.getFieldProps('password')}
              />
            </FloatingLabel>

            {formik.touched.password && formik.errors.password && <div className='l-error'>{formik.errors.password}</div>}
          </Form.Group>

          <Button className='l-btn' type="submit" disabled={formik.isSubmitting}>Login</Button>

          <p className='no-register'>
            Need an account ?{" "}
            <a href='/register'>Register</a>
          </p>

        </Form>
      </div>
      <Footer/>
      </>
     );
    }
