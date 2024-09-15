import React, { useState, useEffect } from 'react';
import './Home.css';
import slideImage1 from '../../assets/Shoe1home.png';
import slideImage2 from '../../assets/Shoe2home.png';
import slideImage3 from '../../assets/Shoe3home.png';

const slides = [
  {
    label: "Experience Superior Comfort",
    description: "Discover next-level comfort with every step in our innovative designs.",
    image: slideImage1,
    color: "#FF6B6B"
  },
  {
    label: "Redefine Your Style",
    description: "Fuse fashion with function in our cutting-edge collection.",
    image: slideImage2,
    color: "#4ECDC4"
  },
  {
    label: "Performance Meets Precision",
    description: "Unleash your potential with shoes engineered for peak performance.",
    image: slideImage3,
    color: "#45B7D1"
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="Home-container" style={{ backgroundColor: slides[currentSlide].color }}>
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentSlide ? "active" : ""}`}
          >
            <img
              src={slide.image}
              alt={slide.label}
              className="carousel-image"
            />
            <div className="carousel-content">
              <h2>{slide.label}</h2>
              <p>{slide.description}</p>
              <button className="shop-now-btn">Shop More</button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Home;