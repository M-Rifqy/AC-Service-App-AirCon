import React from 'react';
import './style.scss';
import Navigation2 from '../../components/navbar2';
import Footer from '../../components/footer';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaCrown, FaTools, FaHeadset, FaMoneyBillWave } from 'react-icons/fa'


export default function About() {
  return (
    <>
    <Navigation2 />
    <Container className='about-container'>
      <Row>
        <Col xl={6}>
          <img src={require('../../materials/ac4.png')} alt='' className='about-img'/>
        </Col>
        <Col xl={6}>
          <div className='about-header'>
            About <img src={require('../../materials/octagon.png')} alt=''/>AirCon
          </div>
          <h1 className='about-h1'>Air Conditioner Reparation & Installation Company</h1>
          <p className='about-p'>
            Aircon is an Indonesian AC service corporation whose history began on December 24, 2010.
            <br/>
            Our company work of any level of complexity. Our team consists of highly qualified professionals, who have been in the industry for no less than 6 years. We have gained extensive experience while solving the most complex technical.
            <br/>
            AirCon now, has become the biggest AC service company in the world. which is also one of the most valuable companies in the world.
          </p>
          <p className='about-signature'>MR</p>
          <div className='ceo'>
            <h4>Muhammad Rifqy</h4>
            <p>CEO & Founder of AirCon</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className='choose-container mb-5'>
      <div className='choose text-center my-5'>
        <h1 className='choose-h1'><span>Why Choose Us</span></h1>
        <p>We Are Trusted Source of Air Conditioner Maintenance Repairs Company</p>
      </div>
      <Row className='text-center'>
        <Col lg={3} className='choose-item pt-2'>
          <FaCrown className='icon'/>
          <h4 className='mt-3'>50+ Years Experience</h4>
          <p>
            Uisque molestie, arcu et iaculis mollis orci lacus facilisis pede, 
            non euismod arcu ante quis massa ea tamquam salutandi nec.
          </p>
        </Col>
        <Col lg={3} className='choose-item pt-2'>
          <FaTools className='icon'/>
          <h4 className='mt-3'>Expert Technicians</h4>
          <p>
            Uisque molestie, arcu et iaculis mollis orci lacus facilisis pede, 
            non euismod arcu ante quis massa ea tamquam salutandi nec.
          </p>
        </Col>
        <Col lg={3} className='choose-item pt-2'>
          <FaHeadset className='icon'/>
          <h4 className='mt-3'>Free Consultation</h4>
          <p>
            Uisque molestie, arcu et iaculis mollis orci lacus facilisis pede, 
            non euismod arcu ante quis massa ea tamquam salutandi nec.
          </p>
        </Col>
        <Col lg={3} className='choose-item pt-2'>
          <FaMoneyBillWave className='icon'/>
          <h4 className='mt-3'>Affordable Cost</h4>
          <p>
            Uisque molestie, arcu et iaculis mollis orci lacus facilisis pede, 
            non euismod arcu ante quis massa ea tamquam salutandi nec.
          </p>
        </Col>
      </Row>
    </Container>
    <Carousel className='testimonial mt-5' variant="dark">
      <Carousel.Item interval={5000}>
        <div className='testimonial-bg'></div>
        <Carousel.Caption className='testimonial-caption'>
          <h4 className='testimonial-h4'>
            We have used AirCon for many years for air conditioning.
            They set up appointments promptly, show up when they are supposed to, and do excellent work.
            I would highly recommend AirCon!
          </h4>
          <p className='testimonial-p'>Abdullah | Customer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <div className='testimonial-bg'></div>
        <Carousel.Caption className='testimonial-caption'>
          <h4 className='testimonial-h4'>
          I have never had such a pleasurable experience with air conditioning company in South Jakarta. 
          The technicians were courteous, professional, and a pleasure to work with.
          </h4>
          <p className='testimonial-p'>Santoso | Customer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <div className='testimonial-bg'></div>
        <Carousel.Caption className='testimonial-caption'>
          <h4 className='testimonial-h4'>
            Great service, even better people. They came by to fix my AC and did
            a fantastic job in the time they said they would get it done.
            The price estimate was on point and accurate and did not go over the budget I had in mind.
          </h4>
          <p className='testimonial-p'>Udin | Customer</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Footer />
    </>
  );
}