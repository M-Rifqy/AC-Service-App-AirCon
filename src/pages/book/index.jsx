import React, { useState } from 'react';
import Navigation3 from '../../components/navbar3';
import Footer from '../../components/footer';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';
import './style.scss';


export default function Book() {

  const initialFormValue = {
    full_name: '',
    email: '',
    address: '',
    phone_number: '',
    time: '',
    message: ''
  }

  const [form,setForm] = useState(initialFormValue);

    const handleBook = async () => {

      await axios
      .post('http://localhost:8080/orders', form)
      .then((res) => {
        alert('Your request has been sent');
      })
      .catch((err) => {
        alert('Error Message')
        console.error(err)
      })
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      return handleBook()
    };

    return ( 
      <>
      <Navigation3/>
      <div className='form-page'>
      <Form className='form-container' onSubmit={handleSubmit}>
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
                onChange={(e) => setForm( prev => ({
                  ...prev,
                  full_name: e.target.value
                }))
                }
              />
            </FloatingLabel>
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
                onChange={(e) => setForm( prev => ({
                  ...prev,
                  email: e.target.value
                }))
                }
              />
            </FloatingLabel>
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
                onChange={(e) => setForm( prev => ({
                  ...prev,
                  address: e.target.value
                }))
                }
              />
            </FloatingLabel>
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
                onChange={(e) => setForm( prev => ({
                  ...prev,
                  phone_number: e.target.value
                }))
                }
              />
            </FloatingLabel>
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
                onChange={(e) => setForm( prev => ({
                  ...prev,
                  time: e.target.value
                }))
                }
              />
            </FloatingLabel>
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
                onChange={(e) => setForm( prev => ({
                  ...prev,
                  message: e.target.value
                }))
                }
              />
            </FloatingLabel>
          </Form.Group>

          <Button className='f-btn' type="submit">Send</Button>
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