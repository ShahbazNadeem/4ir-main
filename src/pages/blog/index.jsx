"use client";
import React, { useState } from 'react';
import "./blog.css"
import Swipper1 from '@/components/swipper1/Swipper1';
import { blogswipperData, lastestBlog } from '@/data/data';
import { ActionCard } from '@/components/ActionCard';
import Card1 from '@/components/cards/Card1';
import Head from 'next/head';
import { FaArrowDown } from 'react-icons/fa';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';


const index = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };
    return (
        <Layout>
            <Head>
                <title>Blogs</title>
            </Head>

            <section>
                <div className="wrapper-B1">
                    <ActionCard>
                        <ActionCard.HeaderMain title="Blog" />
                        <ActionCard.Body description="On 'The Path to Success,' you will encounter challenges and obstacles that test your resolve. But with determination and perseverance." />
                    </ActionCard>
                </div>
            </section>

            <section>
                <div className="Wrapper-B2">
                    <div className='container'>
                        <Swipper1 data={blogswipperData} />
                    </div>
                </div>
            </section>

            <section>
                <div className="Wrapper-B3">
                    <div className="container">
                        <div className="wrapper-B3-cards">
                            {lastestBlog?.slice(0, visibleCount).map((item, index) => (
                                // <Card1 key={index} data={item} />
                                <Card1 data={item} className="">
                                    <Card1.Image src={item.img} alt="img" />
                                    <Card1.Title>{item.title}</Card1.Title>
                                    <Card1.Description>{item.description}</Card1.Description>
                                    <Card1.Link>{item.link}</Card1.Link>
                                </Card1>
                            ))}
                        </div>
                        {visibleCount < lastestBlog?.length && (
                            <div className="text-center ">
                                <button onClick={handleShowMore} className="show-more-btn">
                                    View More <FaArrowDown style={{ marginLeft: '3px' }} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section>
                <div className="Wrapper-B4">
                    <div className="container">
                        <div className="Wrapper-B4-content">
                            <h2>Get Foresight on the go</h2>
                            <p className="text-center">At Fourth Industrial Revolution Inc., we are dedicated to guiding businesses through the transformative power of artificial intelligence. With a team of seasoned experts at the helm, specializing in AI consulting and product solutions, we provide tailored AI solutions that propel your business into the future. Our mission is simple yet ambitious: to empower organizations to thrive in the dynamic landscape of the Fourth Industrial Revolution.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapepr-B5">
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