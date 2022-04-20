import React from 'react';
import './style.scss';
import Navigation2 from '../../components/navbar2';
import Footer from '../../components/footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Service() {

  const carousel = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: [" < ", " > "],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,

        }
    },
};

  return (
  <>
  <Navigation2/>

  <Container className='s-container mb-5' fluid>
    <div className="container justify-content-center text-center service-header">
      <p className="s-h-1">Our Services</p>
      <h1 className="s-h-2"><span>What We Can Offer You</span></h1>
      <p className="s-h-3">We Provide Fast, Reliable Air Conditioning Services in Jakarta and It's Sourrounding Areas.</p>
    </div>
    <Row>
      <Col className='s-col'>
        <OwlCarousel className='owl-theme' loop {...carousel}>
          <div className='item'>
            <Card className='s-container'>
              <Card.Img className='s-img' variant="top" src={require('../../materials/ac7.png')} alt=''/>
              <Card.Body className='s-body text-center'>
                <Card.Title className='s-title'>AC Installation</Card.Title>
                <Card.Text className='s-text'>
                Get your air conditioner installed in the most professional manner from our company.
                </Card.Text>
                <Button as={Link} to='/contact' className='s-btn' style={{marginTop:'23px'}}>Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='item'>
            <Card className='s-container'>
              <Card.Img className='s-img' variant="top" src={require('../../materials/ac6.png')} alt=''/>
              <Card.Body className='s-body text-center'>
                <Card.Title className='s-title'>Maintenance & Repair</Card.Title>
                <Card.Text className='s-text'>
                After years of performance, it can break down. Instead of purchasing a new AC, consider letting us fix your old one.
                </Card.Text>
                <Button as={Link} to='/contact' className='s-btn' style={{marginTop:'23px'}}>Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='item'>
            <Card className='s-container'>
              <Card.Img className='s-img' variant="top" src={require('../../materials/ac3.png')} alt=''/>
              <Card.Body className='s-body text-center'>
                <Card.Title className='s-title'>AC Cleaning Service</Card.Title>
                <Card.Text className='s-text'>
                This service is intended to clean the outside and inside of the AC. And it needs to be done regularly because your AC is used continuously. 
                </Card.Text>
                <Button as={Link} to='/contact' className='s-btn'>Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='item'>
            <Card className='s-container'>
              <Card.Img className='s-img' variant="top" src={require('../../materials/ac4.png')} alt=''/>
              <Card.Body className='s-body text-center'>
                <Card.Title className='s-title'>Other Services</Card.Title>
                <Card.Text className='s-text'>
                We offer all the AC services needed to keep you cool in the hot and humid. Here are the air conditioning services we offer !
                </Card.Text>
                <Button as={Link} to='/contact' className='s-btn'>Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </OwlCarousel>
      </Col>
    </Row>
  </Container>

  <Footer/>
  </>
  );
}
 