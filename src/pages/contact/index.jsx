import React from 'react';
import './style.scss';
import Navigation2 from '../../components/navbar2';
import Footer from '../../components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaMapMarkedAlt, 
  FaPhone, 
  FaEnvelope, 
  FaLinkedinIn, 
  FaYoutube, 
  FaShareAlt
} from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { RiInstagramLine, RiTwitterLine } from 'react-icons/ri';
import { FiFacebook, FiGithub } from 'react-icons/fi'
import { BsFillChatQuoteFill } from "react-icons/bs";


export default function Contact() {
  return (
    <>
    <Navigation2 />
    <Container className='c-container mb-5' fluid>
      <div className='c-sub-container'>
        <h1 className='c-title'><span>Contact Us</span></h1>
        <p className='c-sub-title'>
          You can always count on AirCon Experts to get to you fast and 
          get the job done right the first time.
        </p>
      </div>
      <Row className='mt-5'>
        <Col className='col-12 col-md-6 col-lg-6'>
          <img className='c-img img-fluid' src={require('../../materials/maps.png')} alt='indonesia'/>
        </Col>
          <Col className='col-md-3 col-sm-6 mt-4'>
          <div className='c-sub'>
            <span className='c-sub-icon'><FaMapMarkedAlt/></span>
            <span className='c-sub-text'>Address<br/>
            <span className='c-text-nolink'>xx.xxxxx.xxxxx</span></span>
          </div>
          <div className='c-sub'>
            <span className='c-sub-icon'><FaPhone/></span>
            <span className='c-sub-text'>Phone<br/>
            <a href='/contact' className='c-text'>xx.xxxxx.xxxxx</a></span>
          </div>
          <div className='c-sub'>
            <span className='c-sub-icon'><FaEnvelope/></span>
            <span className='c-sub-text'>Email<br/>
            <a href='/contact' className='c-text'>xx.xxxxx.xxxxx</a></span>
          </div>
          <div className='sosmed'>
            <span className='sosmed-icon'><FaShareAlt/></span>
            <span className='sosmed-title'style={{marginTop:'-4px'}}>Social Medias<br/>
              <a href='/contact' className='sosmed-text' style={{marginTop:'-10px'}}>
              <BsWhatsapp/>
              </a>
              <a href='/contact' className='sosmed-text' style={{marginLeft:'22px', marginTop:'-10px'}}>
                <RiInstagramLine/>
              </a>
              <a href='/contact' className='sosmed-text' style={{marginLeft:'40px', marginTop:'-10px'}}>
              <FiFacebook/>
              </a>
              <a href='/contact' className='sosmed-text' style={{marginLeft:'60px', marginTop:'-10px'}}>
              <RiTwitterLine/>
              </a>
              <a href='/contact' className='sosmed-text' style={{marginLeft:'80px', marginTop:'-10px'}}>
              <FiGithub/>
              </a>
            </span>
          </div>
          </Col>
          <Col className='col-md-3 col-sm-6 mt-4'>
          <div className='c-sub'>
            <span className='c-sub-icon'><BsFillChatQuoteFill/></span>
            <span className='c-sub-text'>Chat<br/>
            <a href='/contact' className='c-text'>xx.xxxxx.xxxxx</a></span>
          </div>
          <div className='c-sub'>
            <span className='c-sub-icon'><FaLinkedinIn/></span>
            <span className='c-sub-text'>LinkedIn<br/>
            <a href='/contact' className='c-text'>xx.xxxxx.xxxxx</a></span>
          </div>
          <div className='c-sub'>
            <span className='c-sub-icon'><FaYoutube/></span>
            <span className='c-sub-text'>Our Youtube Channel<br/>
            <a href='/contact' className='c-text'>xx.xxxxx.xxxxx</a></span>
          </div>
          </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
}