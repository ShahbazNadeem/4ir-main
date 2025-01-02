import React from 'react'
import "./contactus.css"
import { ActionCard } from '@/components/ActionCard'
import Image from 'next/image'
import { contactUsData, FAQOursolutionData } from '@/data/data';
import Accordian from '@/components/Accordian';

const index = () => {
    return (
        <div>
            <section>
                <div className="wrapper-C1">
                    <ActionCard>
                        <ActionCard.HeaderMain title="Contact Us" />
                        <ActionCard.Body description="On 'The Path to Success,' you will encounter challenges and obstacles that test your resolve. But with determination and perseverance." />
                    </ActionCard>
                </div>
            </section>

            <section>
                <div className="wrapper-C2">
                    <div className="container">
                        <div className="main-form">
                            <div className="form-left">
                                <div className="">
                                    <h4>Contact Information</h4>
                                    <p>Integrating contact information into a CRM system communication.</p>
                                </div>
                                <div className="contact-info-container">
                                    {
                                        contactUsData?.map((data, index) => (
                                            <div key={index} className="contact-info">
                                                <div className="contact-icon">
                                                    <Image src={data.icon} alt="icon" width={30} height={30} />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{data.title}</p>
                                                    <p>{data.title2}</p>
                                                </div>
                                            </div>
                                        ))}
                                </div>

                            </div>

                            <div className="form-right">
                                <h4>Our Solutions:</h4>
                                <form>
                                    <div className="label-group">
                                        <label>
                                            <p className="label-txt">Your Name</p>
                                            <input type="text" className="input" placeholder='Name' />
                                            <div className="line-box">
                                                <div className="line" />
                                            </div>
                                        </label>
                                        <label>
                                            <p className="label-txt">Your Email</p>
                                            <input type="email" className="input" placeholder='example@gmail.com' />
                                            <div className="line-box">
                                                <div className="line" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="label-group">
                                        <label>
                                            <p className="label-txt">Company Name</p>
                                            <input type="text" className="input" placeholder='Company Name' />
                                            <div className="line-box">
                                                <div className="line" />
                                            </div>
                                        </label>
                                        <label>
                                            <p className="label-txt">Website Url</p>
                                            <input type="text" className="input" placeholder='www.example.com' />
                                            <div className="line-box">
                                                <div className="line" />
                                            </div>
                                        </label>
                                    </div>
                                    <label>
                                        <p className="label-txt">Who are you?</p>
                                        <select name="cars" id="cars" className="input" >
                                            <option >Please Select</option>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>

                                        <div className="line-box">
                                            <div className="line" />
                                        </div>
                                    </label>
                                    <label>
                                        <p className="label-txt">Message</p>
                                        <input type="text" className="input" placeholder='Write to here...' />
                                        <div className="line-box">
                                            <div className="line" />
                                        </div>
                                    </label>
                                    <button type="submit" className='btn1 custombtn1'>submit</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-C4">
                    <div className="container">
                    <Accordian data={FAQOursolutionData} />
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-C5">
                    <div className="container">
                        <ActionCard>
                        <ActionCard.Header title="Ready to See It in Action?" />
                        <ActionCard.Body description="On 'The Path to Success,' you will encounter challenges and obstacles that test your resolve. But with determination and perseverance." />
                        <ActionCard.Button label="Book a free Demo" onClick={() => console.log('Learn More')} />
                        </ActionCard>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index