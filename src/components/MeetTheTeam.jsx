import React from 'react'
import "./widgets.css"
import { teamData } from '@/data/data'

const MeetTheTeam = () => {

    return (
        <section>
            <div className="team-wrapper">
                <div className="container">
                    <div className="team-content">
                        <h2>Meet our team.</h2>
                        <p className="text-center">
                            Empowers users to create, customize, collaborate, and track
                            seamlessly, streamlining project tasks for optimal efficiency.
                        </p>
                    </div>
                    <div className="team-img-card">
                        {
                            teamData.map((item) => (
                                <div className="img-card" key={item.id}>
                                    <div className="img-card-img">
                                        {/* <img src={item.img} alt={item.name} /> */}
                                    </div>
                                    <div className="img-card-content">
                                        <h3>{item.name}</h3>
                                        <span>{item.role}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MeetTheTeam