import React, { useState } from 'react'
import Image from 'next/image'
import "./index.css"
import robot from "@/images/robot.png"
import RoundBlue from "@/images/RoundBlue.gif"
import whatis4IR from "@/images/what-is-4IR-1.png"
import voiceanimate from "@/images/voiceanimate.png"
import Logo2_4ir from "@/images/4IR-Logo2.png"
import MeetTheTeam from '@/components/MeetTheTeam'
import { IndustrySpecificSolutions, howToFitData, homeBannerlist, lastestBlog, FAQHomeData, ActionCarddata1 } from '@/data/data'
import { AiFillCheckCircle } from "react-icons/ai";
import Card1 from '@/components/cards/Card1'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Accordian from '@/components/Accordian'
import { ActionCard } from '@/components/ActionCard'
import Head from 'next/head'
import Layout from '@/components/layout/Layout';

const Index = () => {
  const INITIAL_VISIBLE_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleViewLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };
  return (
    <Layout>
       <Head>
        <title>4IR - AI Talk Assist</title>
      </Head>
      <section className="banner-header">
        <div className="container">
          <div className="wrapper-banner">
            <div className="banner-content">
              <span className="banner-span-top">FOURTH INDUSTRIAL REVOLUTION INC</span>
              <h1 className="banner-h1">
                EMPOWER YOUR BUSINESS WITH
                <span className="banner-span-1">
                  <Image src={Logo2_4ir} alt={Logo2_4ir} />
                  AI-DRIVEN 
                </span>
                SUCCESS
              </h1>
              <div className="banner-ul">
                <ul>
                  {
                    homeBannerlist?.map((item) => (
                      <li>
                        <AiFillCheckCircle style={{ marginRight: '3px' }} />
                        {item.title}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="banner-image">
              <figure className='figure1'><Image src={RoundBlue} alt="Frame1" /></figure>
              <figure><Image src={robot} alt="Frame1" /></figure>
            </div>
          </div>
          <div className="wrapper-2nd">
            <div className="revolution-img">
              <figure>
                <Image src={whatis4IR} alt="RevolutionImg" />
              </figure>
            </div>
            <div className="revolution-content">
              <span className="revolution-span-1">What is 4IR</span>
              <h2>Fourth Industrial Revolution Inc.</h2>
              <p>
                At Fourth Industrial Revolution Inc., we are dedicated to guiding
                businesses through the transformative power of artificial
                intelligence. With a team of seasoned experts at the helm,
                specializing in AI consulting and product solutions, we provide
                tailored AI solutions that propel your business into the future.
                Our mission is simple yet ambitious: to empower organizations to
                thrive in the dynamic landscape of the Fourth Industrial
                Revolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-3rd">
          <div className="container">
            <h2 className="text-center">A Demo From Our One Solution</h2>
            <div className="voice-container">
              <div className="voice-img">
                <figure>
                  <Image src={voiceanimate} height="100%" alt={voiceanimate} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-4th">
          <div className="container">
            <h2 className="text-center">How do you fit into 4IR</h2>
            <div className='box-4th-wrapper'>
              {
                howToFitData?.map((item) => (
                  <Card1 data={item} className="fit-card-hover" />
                ))

              }
            </div>
            {/* <Card1 data={howToFitData} /> */}
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-7th"> 
          <div className="container">
            <div className="wrapper-7th-content">
              <h2>Why Choose us?</h2>
              <p className="text-center">Because we're your guide to the future of business. We simplify complex technology, making it accessible and effective for your business. Our team of experts will work with you to identify your unique needs and develop super-charge solutions that drive growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-8th text-center">
          <div className="container">
            <h2>Industry-specific Solutions</h2>
            <div className="industries-container">
              {
                IndustrySpecificSolutions?.map((item) => (
                  <div className="industry" key={item.id}>
                    <Image src={item.img} alt="image" />
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <MeetTheTeam />

      <section>
        <div className="container">
          <div className="wrapper-9th">
            <h2 className="text-center">Latest Blog</h2>
            <div>
              <div className="box-9th-wrapper">
                {lastestBlog?.slice(0, visibleCount).map((item, index) => (
                  <Card1 key={index} data={item} />
                ))}
              </div>
              <div className='text-center'>

              <button className="view-more-button">
                View More <FaArrowDown style={{ marginLeft: '3px' }} />
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-10th">
          <div className="container">
            <Accordian data={FAQHomeData} />
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-11th">
          <div className="container">
            <ActionCard>
              <ActionCard.Header title="Ready to See It in Action?" />
              <ActionCard.Body description="On 'The Path to Success,' you will encounter challenges and obstacles that test your resolve. But with determination and perseverance." />
                <ActionCard.Button label="Book a free Demo" onClick={() => alert('Demo booked!')} />
            </ActionCard>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default Index