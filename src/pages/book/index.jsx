import React from 'react';
import Navigation3 from '../../components/navbar3';
import Footer from '../../components/footer';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './style.scss';


export default function Book() {

    const handleBook = async () => {
      const data = formik.values

      await axios
      .post('http://localhost:8080/orders', data)
      .then(() => {
        alert('Your request has been sent');
      })
      .catch((err) => {
        alert('Your request has been sent');
        console.error(err)
      })
    }

    const formik = useFormik({
      initialValues: {
        full_name: '',
        email: '',
        address: '',
        phone_number: '',
        time: '',
        message: ''
      },

      validationSchema: Yup.object({
        full_name: Yup.string()
                     .required('[ ! ] Full name is required'),

        email: Yup.string()
                  .required('[ ! ] Email is required')
                  .email('[ ! ] Invalid email format'),

        address: Yup.string()
                    .required('[ ! ] address is required'),          

        phone_number: Yup.string()
                         .required('[ ! ] Phone number is required'),

        time: Yup.string()
                 .required('[ ! ] Time is required'),

        message: Yup.string()
                    .required('[ ! ] Please tell us what do you need')
      }),
  
      onSubmit: handleBook

    });
    console.log(formik);

    return ( 
      <>
      <Navigation3/>
      <div className='form-page'>
        <Form className='form-container' onSubmit={formik.handleSubmit}>
          <h1 className='f-h1'>Request an Appointment</h1>

          <Form.Group>
            <FloatingLabel
              className='f-label'
              controlId='floatingInput'
              label='Full Name *'
            >
              <Form.Control
                type='text'
                name='full_name'
                placeholder='Full Name *'
                {...formik.getFieldProps('full_name')}
              />
            </FloatingLabel>

            {formik.touched.full_name && formik.errors.full_name && <div className='f-error'>{formik.errors.full_name}</div>}
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              className='f-label'
              controlId='floatingInput'
              label='Email *'
            >
              <Form.Control
                type='text'
                name='email'
                placeholder='Email *'
                {...formik.getFieldProps('email')}
              />
            </FloatingLabel>

            {formik.touched.email && formik.errors.email && <div className='f-error'>{formik.errors.email}</div>}
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              className='f-label'
              controlId='floatingInput'
              label='Address / Location *'
            >
              <Form.Control
                type='text'
                name='address'
                placeholder='Address / Location *'
                {...formik.getFieldProps('address')}
              />
            </FloatingLabel>

            {formik.touched.address && formik.errors.address && <div className='f-error'>{formik.errors.address}</div>}
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              className='f-label'
              controlId='floatingInput'
              label='Phone Number *'
            >
              <Form.Control
                type='text'
                name='phone_number'
                placeholder='Phone Number *'
                {...formik.getFieldProps('phone_number')}
              />
            </FloatingLabel>

            {formik.touched.phone_number && formik.errors.phone_number && <div className='f-error'>{formik.errors.phone_number}</div>}
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              className='f-label'
              controlId='floatingInput'
              label='Time *'
            >
              <Form.Control
                type='text'
                name='time'
                placeholder='Time *'
                {...formik.getFieldProps('time')}
              />
            </FloatingLabel>

            {formik.touched.time && formik.errors.time && <div className='f-error'>{formik.errors.time}</div>}
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              className='f-label'
              controlId='floatingInput'
              label='Message *'
            >
              <Form.Control
                as='textarea'
                name='message'
                placeholder='Message *'
                style={{ height:'100px'}}
                {...formik.getFieldProps('message')}
              />
            </FloatingLabel>

            {formik.touched.message && formik.errors.message && <div className='f-error'>{formik.errors.message}</div>}
          </Form.Group>

          <Button className='f-btn' type="submit" disabled={formik.isSubmitting}>Send</Button>
          <p className='f-p'>
            Or Contact Us Directly{' '}
            <a href='/contact'>Here</a>
          </p>
        </Form>

      </div>
      <Footer/>
      </>
     );
    }