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
        <div className="project-banner">
          <h1 className="project-name">{project?.name}</h1>
          <h3 onClick={handleClose}>Close</h3>
        </div>
        <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
    </div>
  );
}

export default ProjectModal;
