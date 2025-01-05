import React from 'react'
import Logo from "@/images/Logo.png"
import Image from 'next/image'
import { navbarData } from '@/data/layoutData'
import { contactUsData } from '@/data/data'


const Footer = () => {
  return (
    <div>
      <footer>
        <section>
          <div className="wrapper-footer">
            <div className="container">
              <div className="footer-main">

                <div className="footer-1Section">
                  <div className="footer-logo">
                    <a href="index.html">
                      <Image src={Logo} />
                    </a>
                    <p>AI Talk Assist is more than just a tool; it’s the future of customer engagement</p>
                  </div>
                </div>


                <div className="footer-2Section">
                <div className="footer-sub-div">
                  <div className="page-links">
                    <h5>Company</h5>
                    <ul>
                      {navbarData?.slice(0, 5).map((item, index) => (
                        <li key={index}>
                          <p>{item.title}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="footer-sub-div">
                  <div className="resources">
                  <h5>Resources</h5>
                    <ul>
                      <li><p>Privacy Policy</p></li>
                      <li><p>Rate us</p></li>
                      <li><p>Terms & Conditions</p></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-sub-div">
                  <div className="contact-info">
                    <h5>Contact Info</h5>
                    <ul>
                      {
                        contactUsData?.reverse().map((item, index) => (
                          <li key={index}>
                            <p>{item.title}</p>
                            <p>{item.title2}</p>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="footer-copyright">
                © 4IR @ 2024 All the Copyright Reserved. 
                </div>
                <div className="footer-social-links">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer