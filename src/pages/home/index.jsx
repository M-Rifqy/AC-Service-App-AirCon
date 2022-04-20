import React from 'react';
import './style.scss';
import Navigation from '../../components/navbar';
import Footer from '../../components/footer';
import { Carousel, Button } from 'react-bootstrap';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
    <Navigation />
    <Carousel>
      <Carousel.Item className='c-item' interval={5000}>
        <img className="d-block w-100 ac" src={require('../../materials/ac1.jpg')} alt="First slide"/>
        <Carousel.Caption className='c-caption'>
          <h1><img src={require('../../materials/octagon.png')} alt='octagon' className='octagon'/>
            AirCon
          </h1>
          <p>One Stop Solution For All Your AC Requirements</p>
          <div className='slider-btn'>
            <Button as={Link} to='/book' className='tombol'>Get Started</Button>
            <Button as={Link} to='/about' className='tombol'>Learn More<BsArrowRightShort className='tombol-arrow'/></Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='c-item' interval={5000}>
        <img className="d-block w-100" src={require('../../materials/ac2.jpg')} alt="Second slide"/>
        <Carousel.Caption className='c-caption'>
        <h1><img src={require('../../materials/octagon.png')} alt='octagon' className='octagon'/>
            AirCon
          </h1>
          <p>One Stop Solution For All Your AC Requirements</p>
          <div className='slider-btn'>
            <Button as={Link} to='/book' className='tombol'>Get Started</Button>
            <Button as={Link} to='/about' className='tombol'>Learn More<BsArrowRightShort className='tombol-arrow'/></Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='c-item' interval={5000}>
        <img className="d-block w-100" src={require('../../materials/ac3.png')} alt="Third slide"/>
        <Carousel.Caption className='c-caption'>
        <h1><img src={require('../../materials/octagon.png')} alt='octagon' className='octagon'/>
            AirCon
          </h1>
          <p>One Stop Solution For All Your AC Requirements</p>
          <div className='slider-btn'>
            <Button as={Link} to='/book' className='tombol'>Get Started</Button>
            <Button as={Link} to='/about' className='tombol'>Learn More<BsArrowRightShort className='tombol-arrow'/></Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Footer/>
    </>
  );
}
