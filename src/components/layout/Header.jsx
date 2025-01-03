import React from 'react'
import "../widgets.css"
import Image from 'next/image'
import Logo from "@/images/Logo.png"
import { navbarData } from '@/data/layoutData'
import { TiThMenu } from "react-icons/ti";
import { IoIosMenu, IoMdClose } from "react-icons/io";


const Header = () => {

  return (
    <section>
      <div className="wrapper-Header">
        <div className="container">
          <div className="header-content">

            <div className="offcanvas-button">
              <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><IoIosMenu size={30} /></button>
            </div>



            <div className="header-logo">
              <figure>
                <Image src={Logo} />
              </figure>
            </div>

            <div className="header-list">
              <ul>
                {navbarData?.map((item, index) => (
                  <li key={index}>
                    {item.list && item.list.length > 0 ? (
                      <a
                        href={item.link}
                        className="simple-text dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span className="simple-text">{item.title}</span>
                    )}
                    {item.list && item.list.length > 0 && (
                      <div className="dropdown-menu">
                        {item.list.map((listItem, index) => (
                          <a
                            key={index}
                            className="dropdown-item"
                            href={listItem.listlink}
                          >
                            {listItem.listItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="header-button">
              <button className='btn1'>Book A Free Demo</button>
            </div>


          </div>



          <div className="header-canvas">
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <h2 className="offcanvas-title" id="offcanvasExampleLabel">4-IR</h2>
                <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" ><IoMdClose size={25} /></button>
              </div>
              <div className="offcanvas-body">


                <div className="offcanvas-list">
                  <ul>
                    {navbarData?.map((item, index) => (
                      <li key={index}>
                        {item.list && item.list.length > 0 ? (
                          <a
                            href={item.link}
                            className="simple-text dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <span className="simple-text">{item.title}</span>
                        )}
                        {item.list && item.list.length > 0 && (
                          <div className="dropdown-menu">
                            {item.list.map((listItem, index) => (
                              <a
                                key={index}
                                className="dropdown-item"
                                href={listItem.listlink}
                              >
                                {listItem.listItem}
                              </a>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>


              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Header