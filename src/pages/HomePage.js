import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/homepage.css';
import LinkArrow from '../assets/icons/arrow_link.svg';


function HomePage() {
  useEffect(() => {
    // Etat initial
    gsap.set(".divider", { scaleX: 0, transformOrigin: "center" });
    gsap.set(".row > .col", { opacity: 0, y: 40 });
    gsap.set(".marquee", { bottom: "-5%", opacity: 0 });
  
    // Debut animations
    gsap.to("#overlay-dark", { duration: 2, top: "-100%", ease: "power3.inOut", delay: 4 });
  
    gsap.fromTo(".divider", 
      { scaleX: 0 }, // état de départ
      { duration: 3, scaleX: 1, ease: "power3.inOut", delay: 1, stagger: { amount: 1 } } // état final
    );
  
    gsap.to(".row > .col", {
      duration: 2,
      opacity: 1,
      y: 0,
      ease: "power3.inOut",
      delay: 2,
      stagger: { amount: 1.5 }
    });
  
    gsap.to(".marquee", {
      duration: 1,
      bottom: "10%",
      opacity: 1,
      ease: "power3.inOut",
      delay: 4.5
    });
  
    // Fonction de nettoyage
    return () => {
      gsap.killTweensOf([".divider", ".row > .col", ".marquee", "#overlay-dark"]);
    };
  }, []);
  

  return (
    <>
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
        <div className="col">MyColoc</div>
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
        <div className="col">Pigly</div>
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
        <div className="col">Fanzine</div>
        <div className="col">
          <a href="/visual-experimentation" className="cell-link">
            Musique <img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col">Paris & Toulouse</div>
        <div className="col">Prototyping</div>
        <div className="col">Disruptive world</div>
        <div className="col">
          <a href="/visual-experimentation" className="cell-link">
            Photo <img src={LinkArrow} alt='lien' className='arrow-link-svg'/>
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">I believe that function is the substance of</div>
        <div className="col">Dublin soon</div>
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
        <div className="col">Instagram</div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col">Linkedin</div>
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
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
    </div>
    </>
  );
}

export default HomePage;
