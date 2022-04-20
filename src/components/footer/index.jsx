import React from 'react'
import './style.scss';

export default function Footer() {
  return (
      <>
          <p className='footer-bottom text-center'>
            Copyright © 2022 <b>AirCon</b>, Developed by{" "}
              <a className='footer-a' href="https://www.linkedin.com/in/muhammad-rifqy-12145a226/" target="_blank" rel="noopener noreferrer">
                Muhammad Rifqy
              </a>
            {" "}|{" "}
              <a className='footer-a' href="https://www.linkedin.com/in/nikodimus-raditia-b050b421a/" target="_blank" rel="noopener noreferrer">
                Nikodimus Raditia
              </a>
          </p>
      </>
  );
}
