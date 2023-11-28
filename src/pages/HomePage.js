import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import '../styles/homepage.css';
import LinkArrow from '../assets/icons/arrow_link.svg';
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import ProjectModal from '../component/ProjectModal';

function HomePage() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, name: 'MyColoc', img: img1 },
    { id: 2, name: 'Pigly', img: img2 },
    { id: 3, name: 'Fanzine', img: img1 },
    { id: 4, name: 'Disruptive World', img: img2 },
    // Ajoutez d'autres projets ici
  ];

  const handleProjectClick = project => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    // Etat initial
    gsap.set(".divider", { scaleX: 0, transformOrigin: "center" });
    gsap.set(".row > .col", { opacity: 0, y: 40 });
    gsap.set(".marquee", { bottom: "-5%", opacity: 0 });
  
    // Debut animations
    gsap.to("#overlay-dark", { duration: 2, top: "-100%", ease: "4.inOut", delay: 4 });
  
    gsap.fromTo(".divider", 
      { scaleX: 0 }, // état de départ
      { duration: 3, scaleX: 1, ease: "power4.inOut", delay: 1, stagger: { amount: 1 } } // état final
    );
  
    gsap.to(".row > .col", {
      duration: 2,
      opacity: 1,
      y: 0,
      ease: "power4.inOut",
      delay: 2,
      stagger: { amount: 1.5 }
    });
  
    gsap.to(".marquee", {
      duration: 1,
      bottom: "10%",
      opacity: 1,
      ease: "power4.inOut",
      delay: 4.5
    });

    const projectLinks = document.querySelectorAll(".cell-link");
    const imagePreviewContainer = document.querySelector(".image-preview-container img");

    projectLinks.forEach(link => {
      link.addEventListener("mouseover", () => {
        const imageName = link.getAttribute("data-img");
        switch (imageName) {
          case 'img1':
            imagePreviewContainer.src = img1;
            break;
          case 'img2':
            imagePreviewContainer.src = img2;
            break;
          // Ajoutez d'autres cas pour d'autres images
          default:
            imagePreviewContainer.src = '';
        }
        imagePreviewContainer.parentElement.style.display = 'block';
      });

      link.addEventListener("mouseout", () => {
        imagePreviewContainer.parentElement.style.display = 'none';
      });
    });
  
  
    // Fonction de nettoyage
    return () => {
      gsap.killTweensOf([".divider", ".row > .col", ".marquee", "#overlay-dark"]);
    };
  }, []);
  

  return (
    <>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      <div id="overlay-light" className="overlay"></div>
      <div id="overlay-dark" className="overlay"></div>
      <div className="content">
      <div className="nav row">
        <div className="col">(donpablo studio)</div>
        <div className="col">(contact)</div>
        <div className="col">(services)</div>
        <div className="col">(projects)</div>
        <div className="col">(art exploration)</div>
      </div>
      <div className="divider nav-divider"></div>
      <div className="row">
        <div className="col">Passionate about new technologies in all their</div>
        <div className="col">+33 7 81 08 99 03</div>
        <div className="col">Art Direction</div>
        <div className="col">
          <div onClick={() => handleProjectClick(projects[0])} className="project-cell">
            <a href="#" className="cell-link" data-img="img1">
              {projects[0].name}<img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
            </a>
          </div>
        </div>
        <div className="col">
          <a href="/visual-experimentation" className="cell-link">
            Art visuel <img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">aspects: design, technical and human. Founder</div>
        <div className="col"></div>
        <div className="col">Brand & Identity Design</div>
        <div className="col">
          <div onClick={() => handleProjectClick(projects[1])} className="project-cell">
            <a href="#" className="cell-link" data-img="img2">
              {projects[1].name}<img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
            </a>
          </div>
        </div>
        <div className="col">
          <a href="/visual-experimentation" className="cell-link">
            Digital exploration <img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">of Hestia recently merged with Coloc.fr</div>
        <div className="col">France</div>
        <div className="col">Creative Direction</div>
        <div className="col">
          <div onClick={() => handleProjectClick(projects[1])} className="project-cell">
            <a href="#" className="cell-link" data-img="img2">
              {projects[2].name}<img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
            </a>
          </div>
        </div>
        <div className="col">
          <a href="/visual-experimentation" className="cell-link">
            Musique <img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col">Paris based</div>
        <div className="col">Prototyping</div>
        <div className="col">
          <div onClick={() => handleProjectClick(projects[1])} className="project-cell">
            <a href="#" className="cell-link" data-img="img2">
              {projects[3].name}<img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
            </a>
          </div>
        </div>
        <div className="col">
          <a href="/visual-experimentation" className="cell-link">
            Photo <img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">I believe that function is the substance of</div>
        <div className="col">Working Worldwide</div>
        <div className="col">Design Direction</div>
        <div className="col"></div>
        <div className="col">
          <a href="/visual-experimentation" className="cell-link">
            Digital experience <img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">aesthetic experience. This principle guides clearer</div>
        <div className="col"></div>
        <div className="col">Product Strategy</div>
        <div className="col"></div>
        <div className="col">
          <a href="/visual-experimentation" className="cell-link">
            Dessin et peinture <img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">user interfaces, stronger branding devices and</div>
        <div className="col">For project, idea and</div>
        <div className="col">UX/UI Design</div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">more cohesive design systems. Whether</div>
        <div className="col">business inquiries:</div>
        <div className="col">Web Development</div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">designing multi-platform experiences or building</div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">enterprise applications, I make things to solve</div>
        <div className="col">hello@fix.studio</div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">problems.</div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <a href="https://www.instagram.com/lamazeee/" className="cell-link">
            Instagram <img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
          </a>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <a href="https://www.linkedin.com/in/paul-mazeau/" className="cell-link">
            Linkedin <img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
          </a>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <a href="https://www.are.na/johndoe" className="cell-link">
            Are.na <img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
          </a>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="image-preview-container" style={{ display: 'none' }}>
          <img src="" alt="Aperçu" />
      </div>
    </div>
    </>
  );
}

export default HomePage;
