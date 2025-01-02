import React from 'react'
import "../widgets.css"
import { teamData } from '@/data/data'
import Image from 'next/image'

const Card1 = ({ data, className }) => {

    return (
        <>
            <div className={`fit-card ${className}`}>
                <figure><Image src={data.img} alt="unsplsh_card_img" /></figure>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
            </div>
        </>
    )
}
export default Card1