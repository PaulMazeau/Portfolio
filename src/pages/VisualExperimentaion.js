import React, { useState, useEffect, useRef } from 'react';
import '../styles/visualexperimentation.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

const VisualExperimentation = () => {
  const [currentX, setCurrentX] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const carouselItemsRef = useRef(null);
  const activeItemRef = useRef(null);
  const numImages = 100; // Supposons que vous avez 100 images

  // Fonction linéaire pour l'animation fluide
  const lerp = (start, end, t) => start * (1 - t) + end * t;

  // Gestionnaire d'événement pour le défilement
  useEffect(() => {
    const handleWheel = (e) => {
      setLastScrollY((prev) => {
        const nextScrollY = prev + e.deltaY;
        const maxScroll = carouselItemsRef.current.scrollWidth - window.innerWidth;
        return Math.min(Math.max(nextScrollY, 0), maxScroll);
      });
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Animation de défilement
  useEffect(() => {
    const animate = () => {
      setCurrentX((prevX) => {
        const newX = lerp(prevX, lastScrollY, 0.075);
        if (carouselItemsRef.current) {
          carouselItemsRef.current.style.transform = `translateX(-${newX}px)`;
        }
        return newX;
      });
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [lastScrollY]);

  // Observateur d'intersection pour mettre à jour l'image active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeItemRef.current.src = entry.target.src;
            obs.unobserve(entry.target); // Optionnel: désinscrire l'image après qu'elle soit devenue active
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    const images = carouselItemsRef.current?.querySelectorAll('img');
    images?.forEach((img) => observer.observe(img));

    return () => images?.forEach((img) => observer.unobserve(img));
  }, []);

  const images = Array.from({ length: numImages }, (_, i) => `/images/img${i + 1}.jpeg`);

  return (
    <div className="container">
      <div className="carousel-items" ref={carouselItemsRef} style={{ transform: `translateX(-${currentX}px)` }}>
        {images.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`Image ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="active-item">
        <img ref={activeItemRef} alt="Active item" />
      </div>
      <footer>
        <div className="footer-item">
          <p>Visual Experimentation</p>
          <p>Donpablo Studio</p>
        </div>
        <div className="footer-item">
          <p>Homepage</p>
          <p>Contact</p>
        </div>
      </footer>
    </div>
  );
};

export default VisualExperimentation;
