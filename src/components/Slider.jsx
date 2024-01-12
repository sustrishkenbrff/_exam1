import React from "react";
import { useState } from "react";
import '../css/slider.css'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      <img src="https://fr-minecraft.net/telecharger.php?id=19998"/>,
      <img src="https://fr-minecraft.net/telecharger.php?id=18891"/>
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };
  
    return (
      <div>
        <div className="slides">         
        <button className="prev" onClick={prevSlide}>
        <svg class="leftar" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 14 14" width="64px" height="64px" fill="none" stroke="currentColor">
		<path d="M0.4,0.4l6.4,6.4l6.4-6.4"></path>
	</svg>
        </button>
        {slides[currentSlide]}
        <button onClick={nextSlide}>
            <svg class="rightar" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 14 14" width="64px" height="64px" fill="none" stroke="currentColor">
		    <path d="M0.4,0.4l6.4,6.4l6.4-6.4"></path> </svg>
        </button>
        </div>
      </div>
    );
  };

export default Slider;