import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import '../styles/projectmodal.css';

function ProjectModal({ project, onClose }) {
  const modalRef = useRef();
  const tl = useRef(gsap.timeline({ paused: true })).current;

  useEffect(() => {
    // Initialisation des animations pour le modal uniquement
    gsap.set(modalRef.current, { autoAlpha: 0 });
    tl.to(modalRef.current, {
        y: 0,
        autoAlpha: 1,
        ease: 'power4.out',
        duration: 0.6
    });
  }, []);

  useEffect(() => {
    // Jouer ou inverser l'animation en fonction de l'état de 'project'
    if (project) {
        tl.play();
    } else {
        tl.reverse();
    }
  }, [project, tl]);

  const handleClose = () => {
    tl.reverse();
  };

  return (
    <div className="project-modal modalStyle" ref={modalRef}>
      <div className="modal-left-column">
        {project?.img && (
          <img 
            src={project.img} 
            alt={project.name} 
            className="modal-image"
          />
        )}
      </div>

      <div className="modal-right-column">
        <div className="project-name">{project?.name}</div>
        <button onClick={handleClose} className='close-btn'>Close</button>
      </div>
    </div>
  );
}

export default ProjectModal;
