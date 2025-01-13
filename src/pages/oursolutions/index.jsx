"use client";
import React, { useRef } from 'react'
import "./oursolution.css"
import { ActionCard } from '@/components/ActionCard'
import Accordian from '@/components/Accordian'
import { aboutusReviews, FAQOursolutionData } from '@/data/data'
import Head from 'next/head'
import Layout from '@/components/layout/Layout';
import Swipper2 from '@/components/Swipper2'

const index = () => {
    const wrapper2nd = useRef();
    return (
        <Layout>
            <Head>
                <title>Our Solutions</title>
            </Head>

            <section>
                <div className="wrapper-O1">
                    <ActionCard>
                        <ActionCard.HeaderMain title="Innovative AI Solutions to Drive Your Business Forward" />
                        <ActionCard.Body description="Tired of the same old business-as-usual? Ready to unlock the full potential of your business? At 4IR Inc., we're not just tech geeks; we're your partners in innovation. We're here to help you harness the power of AI to supercharge your business and stay ahead of the curve." />
                    </ActionCard>
                </div>
            </section>

            <section>
                <div className="wrapper-O2">
                    <div className="container">
                        <div className="wrapper-O2-content text-center">
                            <h2>Our Solutions</h2>
                            <p>At 4IR Inc., we offer a comprehensive suite of AI-powered solutions to help you achieve your business goals. Our solutions are designed to streamline operations, enhance customer experiences, and drive growth.</p>
                        </div>
                        <div ref={wrapper2nd} className="">
                            <div className="wrapper-O2-animation-content">

                                <div className="wrapper-6th-animationCard">gg</div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-O3">
                    <div className="container">
                        <h2>Client Reviews</h2>
                        <Swipper2 data={aboutusReviews} />
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-O4">
                    <div className="container">
                        <Accordian data={FAQOursolutionData} />
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-O5">
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

export default index
