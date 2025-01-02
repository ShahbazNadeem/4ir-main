import React from 'react'
import "./aboutus.css"
import Image from 'next/image'
import actioncardImg from "@/images/actioncardImg.png";
import { aboutuscard1, aboutuscard2, FAQAboutData } from '@/data/data';
import Card2 from '@/components/cards/Card2';
import MeetTheTeam from '@/components/MeetTheTeam';
import Accordian from '@/components/Accordian';
import { ActionCard } from '@/components/ActionCard'


const About = () => {
  return (
    <div>
      <section>
        <div className="wrapper-A1">
          <div className="container">
            <div className="wrapper-A1-content">
              <div className="A1-content1">
                <h1>Empowering Businesses with AI</h1>
              </div>
              <div className="A1-content1">
                <p>In today's rapidly evolving technological landscape, artificial intelligence (AI) has emerged as a powerful force, transforming industries and redefining business models. At 4IR Inc., we're at the forefront of this digital revolution, harnessing the power of AI to drive innovation and growth.</p>
              </div>
            </div>
            <div className="wrapper-A1-Img">
              <figure><Image src={actioncardImg} /></figure>
            </div>

            <div className="wrapper-A1-card">
              {
                aboutuscard1.map((data, index) => {
                  return (
                    <Card2 className="Card2">
                      <Card2.Title>{data.title}</Card2.Title>
                      <Card2.Description>{data.description}</Card2.Description>
                    </Card2>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-A2">
          <div className="container">
            <div className="wrapper-A2-content">
              <div className="A2-content1">
                <h2>What We Do</h2>
              </div>
              <div className="A2-content2">
                <p>At 4IR Inc., we're dedicated to empowering businesses with the transformative power of artificial intelligence. We specialize in providing innovative AI solutions and strategic consulting services that help organizations achieve their goals.</p>
                <p>Our target audience includes a diverse range of businesses, from small startups to large enterprises, across various industries such as healthcare, finance, retail, manufacturing, and more. We cater to organizations that are looking to leverage AI to improve efficiency, enhance customer experiences, and gain a competitive edge.</p>
              </div>
            </div>
            <div className="wrapper-A2-card">
              {
                aboutuscard2.map((data, index) => {
                  return (
                    <Card2 className="A2-Card2">
                      <Card2.Title>{data.title}</Card2.Title>
                      <Card2.Description>{data.description}</Card2.Description>
                    </Card2>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-A3">
          <div className="container">
            <div className="wrapper-A3-content">
              <h2>Why Choose 4IR</h2>
              <p className="text-center">4IR Inc. is your ideal partner in the digital revolution. Our team of AI experts, combined with our commitment to innovation and customer focus, sets us apart. We prioritize ethical AI development and ensure that our solutions are scalable to meet your evolving needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-A4">
          <MeetTheTeam />
        </div>
      </section>

      <section>
        <div className="wrapper-A6">
          <div className="container">
            <Accordian data={FAQAboutData} />
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-A7">
          <div className="container">
            <ActionCard>
              <ActionCard.Header title="Ready to See It in Action?" />
              <ActionCard.Body description="On 'The Path to Success,' you will encounter challenges and obstacles that test your resolve. But with determination and perseverance." />
              <ActionCard.Button label="Book a free Demo" onClick={() => alert('Demo booked!')} />
            </ActionCard>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About