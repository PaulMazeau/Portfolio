// Import React and CSS file
import React, { useState, useEffect } from 'react';
import '../styles/projectsummary.css';
import img1 from '../assets/images/img1.jpeg';


// Helper function outside the component
function getRandomCharacter() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return chars[Math.floor(Math.random() * chars.length)];
}

const ProjectSummary = () => {
  // Use useEffect for componentDidMount equivalent
  useEffect(() => {
    const items = document.querySelectorAll('.item');

    items.forEach((item) => {
      item.addEventListener('mouseenter', shuffleAnimation);
    });

    // Cleanup event listeners on component unmount
    return () => {
      items.forEach((item) => {
        item.removeEventListener('mouseenter', shuffleAnimation);
      });
    };
  }, []);

  function shuffleAnimation(event) {
    const target = event.currentTarget;

    if (target.dataset.animating) return;

    target.dataset.animating = true;

    const words = target.querySelectorAll('.word');
    const originalWords = Array.from(words).map(word => word.textContent);
    let shuffles = 0;
    const maxShuffles = 10;
    const intervalDuration = 500 / maxShuffles;

    let animationInterval = setInterval(() => {
      if (shuffles >= maxShuffles) {
        clearInterval(animationInterval);
        words.forEach((word, index) => {
          word.textContent = originalWords[index];
        });

        delete target.dataset.animating;
      } else {
        words.forEach((word) => {
          const length = word.textContent.length;
          let shuffledText = '';
          for (let i = 0; i < length; i++) {
            shuffledText += getRandomCharacter();
          }
          word.textContent = shuffledText;
        });
        shuffles++;
      }
    }, intervalDuration);
  }

  return (
    <div>
      <div className="container">
        {/* Repeat for each item */}
        <div className="item item-1">
          <div className="word w1">MyColoc</div>
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="word w2">MyColoc</div>
        </div>
        <div className="item item-2">
          <div className="word w1">Pigly</div>
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="word w2">Pigly</div>
        </div>
        <div className="item item-3">
          <div className="word w1">Fanzine</div>
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="word w2">Fanzine</div>
        </div>
        {/* ... other items */}
      </div>
    </div>
  );
};

export default ProjectSummary;
