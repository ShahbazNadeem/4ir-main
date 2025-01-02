import React from 'react';
import "../widgets.css";
import Image from 'next/image';

const Card2 = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

const CardImage = ({ src, alt }) => {
  return (
    <figure>
      <Image src={src} alt={alt} />
    </figure>
  );
};

const CardTitle = ({ children }) => {
  return <h4>{children}</h4>;
};

const CardDescription = ({ children }) => {
  return <p>{children}</p>;
};

Card2.Image = CardImage;
Card2.Title = CardTitle;
Card2.Description = CardDescription;

export default Card2;

// usage
// <Card2 className="custom-class">
// <Card2.Image src={data.img} alt="unsplash_card_img" />
// <Card2.Title>{data.title}</Card2.Title>
// <Card2.Description>{data.description}</Card2.Description>
// </Card2>