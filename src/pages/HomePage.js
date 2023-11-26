import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/homepage.css';
import LinkArrow from '../assets/icons/arrow_link.svg'; // Adjust the path to where your SVG is stored


function HomePage() {
  useEffect(() => {
    // Ensuring initial states for all animated properties
    gsap.set(".divider", { scaleX: 0 });
    gsap.set(".row > .col", { opacity: 0, y: 40 });
    gsap.set(".marquee", { bottom: "-5%", opacity: 0 });

    // GSAP animations using fromTo to define starting and ending points
    gsap.to("#overlay-dark", { duration: 2, top: "-100%", ease: "power3.inOut", delay: 4 });
    gsap.to(".divider", {
      duration: 3,
      scaleX: 1,
      ease: "power3.inOut",
      stagger: { amount: 1 },
    });
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

    // Cleanup function
    return () => {
        gsap.killTweensOf(true);
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
        <div className="col">(projets)</div>
        <div className="col">(art exploriation)</div>
      </div>
      <div className="divider nav-divider"></div>
      <div className="row">
        <div className="col">A collective of creative thinkers making things</div>
        <div className="col">+33 7 81 08 99 03</div>
        <div className="col">Art Direction</div>
        <div className="col">NBC Sports</div>
        <div className="col">Art visuel</div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">smarter, newer, and more memorable.</div>
        <div className="col"></div>
        <div className="col">Brand Positioning</div>
        <div className="col">Dona Chai</div>
        <div className="col">digital exploration</div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col">France</div>
        <div className="col">Brand & Identity Design</div>
        <div className="col">Equinox</div>
        <div className="col">Musique</div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">We believe that function is the substance of</div>
        <div className="col">Paris & Toulouse</div>
        <div className="col">Creative Direction</div>
        <div className="col">Giant</div>
        <div className="col">Photo</div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">
          aesthetic experience. This principle guides clearer
        </div>
        <div className="col">Dublin soon</div>
        <div className="col">Design Direction</div>
        <div className="col">KPRS</div>
        <div className="col">Video</div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">user interfaces, stronger branding devices and</div>
        <div className="col"></div>
        <div className="col">Packaging</div>
        <div className="col">microDrive</div>
        <div className="col">Dessin & peinture</div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">more cohesive design systems. Whether</div>
        <div className="col">For Job, Press and</div>
        <div className="col">Motion</div>
        <div className="col">Union</div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">designing multi-platform experiences or building</div>
        <div className="col">General inquiries:</div>
        <div className="col">Prototyping</div>
        <div className="col">Univision</div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">enterprise applications, we make things to solve</div>
        <div className="col"></div>
        <div className="col">Product Strategy</div>
        <div className="col">ProVen</div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col">problems.</div>
        <div className="col">hello@fix.studio</div>
        <div className="col">Testing & Research</div>
        <div className="col">Social Studies</div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">UX/UI Design</div>
        <div className="col">Study Hall</div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col">Instagram</div>
        <div className="col">Web Development</div>
        <div className="col">The Post</div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col">Linkedin</div>
        <div className="col"></div>
        <div className="col">Newtok</div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">Tovala</div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">LunarCrush</div>
        <div className="col"></div>
      </div>
      <div className="divider"></div>
    </div>
    </>
  );
}

export default HomePage;
