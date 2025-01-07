import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import Image from 'next/image'
import "./index.css"
import robot from "@/images/robot.png"
import RoundBlue from "@/images/RoundBlue.gif"
import whatis4IR from "@/images/what-is-4IR-1.png"
import voiceanimate from "@/images/voiceanimate.png"
import Logo2_4ir from "@/images/4IR-Logo2.png"
import MeetTheTeam from '@/components/MeetTheTeam'
import { IndustrySpecificSolutions, howToFitData, homeBannerlist, lastestBlog, FAQHomeData, homeSolutionData } from '@/data/data'
import { AiFillCheckCircle } from "react-icons/ai";
import Card1 from '@/components/cards/Card1'
import { FiArrowRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import Accordian from '@/components/Accordian'
import { ActionCard } from '@/components/ActionCard'
import Head from 'next/head'
import Layout from '@/components/layout/Layout';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new Audio("/audio-files/heather-audio.wav"));
    }
  }, []);

  const handlePlayPause = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const wrapper6th = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".wrapper-6th-animationCard",
        {
          y: 0,
          x: 0,
          rotate: 0,
          opacity: 1,
        },
        {
          y: -1000,
          x: -200,
          delay: 1,
          rotate: -90,
          opacity: 0,
          stagger: {
            each: 2,
            from: "start",
          },
          duration: 2,
          ease: "power3.inOut",
          scrollTrigger: {
            start: "top top",
            end: "bottom top",
            // markers: true, 
            trigger: wrapper6th.current,
            pin: true,
            scrub: 1,
          },
        }
      );
    }, wrapper6th);

    return () => ctx.revert();
  }, []);

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
              <div className="voice">
                <div
                  className=""
                  onClick={() => {
                    handlePlayPause();
                    toggleAnimation();
                  }}
                >
                  {isAnimating ? (

                    <div
                      className={`audio-button ${isAnimating ? "animating" : ""}`}
                    >
                      <div className="wave-icon">
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                        <div className="wave wave4"></div>
                        <div className="wave wave5"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="play-btn d-flex justify-content-center ">
                      <FaPlay />
                    </div>
                  )}
                </div>
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
          </div>
        </div>
      </section>

      <section>
        <div className='wrapper-6th'>
          <div className='container'>
            <div ref={wrapper6th} className='wrapper-6th-content'>
              <h2>Our Solutions</h2>
              {/* <button className='btn1'>Learn More</button> */}
              {
                homeSolutionData?.map((items, Index) => (
                  <div
                    className={`wrapper-6th-animationCard  wrapper6custom-${Index}`}
                    key={Index}
                    style={{
                      zIndex: homeSolutionData.length - Index,
                      transform: `rotate(${Index * -100}deg)`
                    }}
                  >
                    <figure>
                      <Image src={items.img} alt={`Image for ${items.title}`} />
                    </figure>
                    <h3>{items.title}</h3>
                    <p>{items.para}</p>
                  </div>
                ))
              }
            </div>
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
                {lastestBlog?.slice(0, 3).map((item, index) => (
                  <Card1 key={index} data={item} />
                ))}
              </div>
              <div className='text-center'>

                <button className="view-more-button">
                  View More <FiArrowRight style={{ marginLeft: '3px' }} />
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
              <ActionCard.Header title="Ready To Transform Your Real Estate Business With AI?" />
              {/* <ActionCard.Body description="On 'The Path to Success,' you will encounter challenges and obstacles that test your resolve. But with determination and perseverance." /> */}
              <ActionCard.Button label="Book a free Demo" onClick={() => alert('Demo booked!')} />
            </ActionCard>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default Index