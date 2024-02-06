'use client'
// Import necessary dependencies
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import db from '@/data/db.json'

const carouselItems = db.carouselItems; // Użycie danych z db.json

const Carousel: React.FC = () => { 
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbnailBorderRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);



  // State to manage the current index of the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next and prev buttons
  const handleButtonClick = (type: 'next' | 'prev') => {
    setCurrentIndex(prevIndex => {
      const newIndex = type === 'next'
        ? (prevIndex + 1) % carouselItems.length
        : (prevIndex - 1 + carouselItems.length) % carouselItems.length;

      // Przewijanie miniatur
      const thumbnailContainer = thumbnailBorderRef.current;
      const newThumbnail = thumbnailContainer?.children[newIndex];
      newThumbnail?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      console.log(newIndex)
      return newIndex;
      
    });
  };
  


  // Effect for automatic sliding
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleButtonClick('next');
  //   }, 7000);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(interval);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // Function to show slider
  const showSliderChoose = (index: number) => {
    setCurrentIndex(index);
    
    
    const thumbnailContainer = thumbnailBorderRef.current;
    const selectedThumbnail = thumbnailContainer?.children[index];
    selectedThumbnail?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };
  console.log(currentIndex);
  return (
    
    <div className="carousel" ref={carouselRef}>
      {/* Carousel items */}
      <div className="list" ref={sliderRef}>
        {carouselItems.map((item, index) => (
          <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
            <Image src={require(`@/../public/${item.src}.webp`)} alt={item.alt} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.des}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="thumbnail" ref={thumbnailBorderRef}>
        {carouselItems.map((item, index) => (
          <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`} onClick={() => showSliderChoose(index)}>
            <Image src={require(`@/../public/${item.src}.webp`)} alt={item.alt} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="description">{item.des}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Next/Prev buttons */}
      <div className="arrows">
        <button id="prev" onClick={() => handleButtonClick('prev')} ref={prevRef}>
          {'<'}
        </button>
        <button id="next" onClick={() => handleButtonClick('next')} ref={nextRef}>
          {'>'}
        </button>
      </div>

      {/* Time running */}
      <div className="time" ref={timeRef}></div>
    </div>
  );
};

export default Carousel;
