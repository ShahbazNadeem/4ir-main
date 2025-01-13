import React from 'react';
import "../widgets.css";
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight  } from "react-icons/fi";

const Card1 = ({ children, className = "" }) => {
    return <div className={`fit-card ${className}`}>{children}</div>;
};

const Card1Image = ({ src, alt = "Image" }) => (
    <figure>
        <Image src={src} alt={alt} />
    </figure>
);

const Card1Title = ({ children }) => <h4>{children}</h4>;

const Card1Description = ({ children }) => <p>{children}</p>;

const Card1Link = ({ children }) => (
    <div>
        <Link href={children}>Read More <FiArrowRight/></Link>
    </div>
);

// Attach the components as properties of the Card component
Card1.Image = Card1Image;
Card1.Title = Card1Title;
Card1.Description = Card1Description;
Card1.Link = Card1Link;

export default Card1;
