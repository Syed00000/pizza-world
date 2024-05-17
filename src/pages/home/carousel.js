import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = ["pizza", "burger", "coke","cake"];

function CarouselComponent() {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false} emulateTouch showThumbs={false} axis='horizontal' verticalSwipe={true}>
      {imageProp.map((image, index) => (
        <div key={index} style={{maxHeight: "36rem"}}
        className='object-center brightness-50'>
          <img
            src={`https://source.unsplash.com/800x600/?${image}`}
            alt={`${image} pizza`}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
