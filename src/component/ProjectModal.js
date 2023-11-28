import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import '../styles/projectmodal.css'

function ProjectModal({ project, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    if (project) {
      gsap.to(modalRef.current, {
        y: 0, // Déplace le modal en haut (position initiale)
        autoAlpha: 1,
        ease: 'power3.out',
        duration: 0.5
      });
    } else {
      gsap.to(modalRef.current, {
        y: '100%', // Déplace le modal en bas (hors de l'écran)
        autoAlpha: 0,
        ease: 'power3.in',
        duration: 0.5
      });
    }
  }, [project]);
  
  const handleClose = () => {
    gsap.to(modalRef.current, {
      y: '100%', // Déplace le modal en bas lors de la fermeture
      autoAlpha: 0,
      ease: 'power3.in',
      duration: 0.5,
      onComplete: () => {
        onClose();
      }
    });
  };
  

  return (
    <div className="project-modal modalStyle" ref={modalRef}>
        <div className="modal-left-column">
          {project?.img && <img src={project.img} alt={project.name} className="modal-image" />}
        </div>

        <div className="modal-right-column">
          <div className="project-name">{project?.name}</div>
          <button onClick={handleClose} className='close-btn'>Close</button>
        </div>
    </div>
  );
}

export default ProjectModal;
