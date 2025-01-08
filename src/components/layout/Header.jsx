"use client";
import React from 'react'
import "../widgets.css"
import Image from 'next/image'
import Logo from "@/images/Logo.png"
import { navbarData } from '@/data/layoutData'
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

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
                {navbarData?.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.list && item.list.length > 0 ? (
                        <Link
                          href={item.link}
                          className={`dropdown-toggle ${item.link === router.pathname ? 'active-link' : 'simple-text'}`}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                          {item.title}
                        </Link>
                      ) : (
                        <span >
                          <Link href={item.link} className={` ${item.link === router.pathname ? 'active-link' : 'simple-text'}`}>{item.title}</Link>
                        </span>
                      )}
                      {item.list && item.list.length > 0 && (
                        <div className="dropdown-menu">
                          <Link href={item.link}>{item.title}</Link>
                          {item.list.map((listItem, index) => (
                            <Link key={index} className={`dropdown-item ${item.linklist === router.pathname ? 'active-link' : 'simple-text'}`}
                              href={listItem.listlink}>
                              {listItem.listItem}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="header-button">
              <button className='btn1'>Book A Free Demo</button>
            </div>
          </div>

          <div className="header-canvas">
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <div className="offcanvas-title" id="offcanvasExampleLabel">
                  <figure>
                    <Image src={Logo} />
                  </figure>
                </div>
                <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" ><IoMdClose size={25} /></button>
              </div>
              <div className="offcanvas-body">
                <div className="offcanvas-list">
                  <ul>
                    {navbarData?.map((item, index) => (
                      <li key={index}>
                        {item.list && item.list.length > 0 ? (
                          <Link href={item.link} className={`dropdown-toggle ${item.link === router.pathname ? 'active-link' : 'simple-text'}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {item.title}
                          </Link>
                        ) : (
                          <Link href={item.link} className={` ${item.link === router.pathname ? 'active-link' : 'simple-text'}`}>{item.title}</Link>
                        )}
                        {item.list && item.list.length > 0 && (
                          <div className="dropdown-menu">
                            <Link href={item.link}>{item.title}</Link>
                            {item.list.map((listItem, index) => (
                              <Link key={index} className={`dropdown-item ${item.linklist === router.pathname ? 'active-link' : ''}`} href={listItem.listlink}>
                                {listItem.listItem}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="button">
                  <button className='btn1'>Book A Free Demo</button>
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