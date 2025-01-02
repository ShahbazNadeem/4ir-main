import React from 'react'
import "../widgets.css"
import Image from 'next/image'
import Logo from "@/images/Logo.png"

const Header = () => {
  return (
    <section>
      <div className="wrapper-Header">
        <div className="container">
          <div className="header-content">

            <div className="header-logo">
              <figure>
                <Image src={Logo} />
              </figure>
            </div>
            <div className="header-list">
              <ul>
                <li>Home</li>
                <li>About 4IR</li>
                <li>Our Solutions</li>
                <li>Industries</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="header-button">
              <button className='btn1'>Book A Free Demo</button>
            </div>

            <div className="offcanvas-button">
              <button>offcanvas</button>
            </div>
          </div>



          <div className="header-canves"></div>
        </div>
      </div>
    </section>
  )
}

export default Header