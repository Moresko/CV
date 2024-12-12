import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import fc from './face.jpg';
import vt from './vut.jpg';
import gm from './gymza.jpeg';
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import projectData from './projects.json';
import python from './python.svg';
import figma from './figma.svg';
import react from './react.svg';
import css from './css.svg';
import excel from './excel.svg';
import lanc from './lanc.svg';
import sql from './sql.svg';
import unreal from './unreal.svg';
import england from './england.svg';
import spain from './spain.svg';
import czech from './czech.svg';
import russia from './russia.svg';
import car from './car.svg';
import git from './git.svg'
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { GrUserExpert } from "react-icons/gr";
import { useLanguage } from './Context';
import { MdLanguage } from "react-icons/md";


function App() {

  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations, toggleLanguage } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      threshold: 0.6, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [hoveredImage, setHoveredImage] = useState(null);
  const images = [
    { src: react, name: 'React'   },
    { src: figma, name: 'Figma'   },
    { src: css, name: 'CSS'     },
    { src: lanc, name: 'C programming'},
    { src: python, name: 'Python' },
    { src: sql, name: 'SQL'     },
    { src: git, name: 'GIT'},
    { src: excel, name: 'Excel'     },
    { src: unreal, name: 'Unreal Engine'},
    { src: car, name: 'Vodičský preukaz B'}
  ];

  const flages = [
    { src: england, name: 'English'   },
    { src: spain, name: 'Spanish'   },
    { src: czech, name: 'Czech'     },
    { src: russia, name: 'Russian'}
  ];


  return (
    <div className="App">
      <header className="headerStart" >
        <a href="#home" className="logo">Martin <span>Mores</span></a>

        <FiMenu className='hamburger-icon' onClick={toggleMenu} />

        <nav className={`navbarStart ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" className={activeSection === "home" ? "active" : ""} onClick={closeMenu}>{translations.home} <AiOutlineHome/></a>
          <a href="#education" className={activeSection === "education" ? "active" : ""} onClick={closeMenu}>{translations.education} <IoSchoolOutline /></a>
          <a href="#job" className={activeSection === "job" ? "active" : ""} onClick={closeMenu}>{translations.work} <MdOutlineWorkOutline /></a>
          <a href="#exp" className={activeSection === "exp" ? "active" : ""} onClick={closeMenu}>{translations.skills} <GrUserExpert /></a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={closeMenu}>{translations.projects} <PiProjectorScreenChartLight /></a>
          <button className='switch' onClick={toggleLanguage}>
            {translations.leng}
          </button>
        </nav>
      </header>

      <section  className="homeP" id='home'> 
        <div className='home-info' >
          <h1>Hi, Its <span>Martin</span></h1>
          <h3 className='home-text'>Future <span></span></h3>
          <p>{translations.hometext}
          </p>

          <div className='infoAbout'>
            <div className='infoTog'>
              <FiPhone className='iconInfo'/>
              <p>+421 948 198 010</p>
            </div>
            <div className='infoTog'>
              <BsEnvelope className='iconInfo'/>
              <p>martinmores2001@gmail.com</p>
            </div>
            <div className='infoTog'>
              <AiOutlineHome className='iconInfo'/>
              <p>Limbová 23, Žilina 01007</p>
            </div>
          </div>

          <div className='soc-icons'>
            <a  href='https://www.facebook.com/martin.mores.779/' target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href='https://www.instagram.com/martinmores/' target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href='https://www.linkedin.com/in/martin-mores-1b93ab261/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href='https://github.com/Moresko' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>

        <div className='home-image'>
          <img src={fc} alt="Avatar"/>
        </div>

      </section>

      <section className='educationP' id='education'>
          <div>
            <h2 className='twoHeader'>{translations.education}  <IoSchoolOutline /></h2>
            <div className="educationBoxes">
                <div className="eduBox">
                  <div className='eduCol'>
                    <div className='eduIconTog'>
                      <img src={gm} alt="Gymza"/>
                      <h1>{translations.skOne}</h1>
                    </div>
                    <p className='eduYears'>2016 - 2020</p>
                    <p>{translations.gymza}</p>
                    <p></p>
                  </div>
                </div>
                <div className="eduBox">
                  <div className='eduCol'>
                    <div className='eduIconTog'>
                      <img src={vt} alt="Vut"/>
                      <h1>{translations.skTwo}</h1>
                    </div>
                    <p className='eduYears'>2020 - 2024</p>
                    <p className='eduYears'>{translations.vut}</p>
                    <p>{translations.bp}</p>
                    <p>
                      <a 
                        href="https://www.vut.cz/www_base/zav_prace_soubor_verejne.php?file_id=265905" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'blue', textDecoration: 'none' }}
                      >
                        https://www.vut.cz/www_base/zav_prace_soubor_verejne.php?file_id=265905
                      </a>
                    </p>
                  </div>
                </div>
            </div>
          </div>
      </section>

      <section className='jobP' id='job'>
        <div>
          <h2 className='twoHeader'>{translations.work} <MdOutlineWorkOutline /></h2>
          <div className='jobBoxes'>
            <div className='jobBox'>
              <h1>{translations.jobOneN}</h1>
              <p>{translations.jobOneT}</p>
            </div>
            <div className='jobBox'>
              <h1>{translations.jobTwoN}</h1>
              <p>{translations.jobTwoT}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='expP' id='exp'>
        <div>
          <h2 className='twoHeader'>{translations.skills} <GrUserExpert /></h2>
          <div className="svgExpIconsContainer">
            {images.map((image, index) => (
            <div key={index} className='svgExpIcon'>
              <img
                src={image.src}
                alt={image.name}
                onMouseEnter={() => setHoveredImage(image.name)}
                onMouseLeave={() => setHoveredImage(null)}
              />
              {hoveredImage === image.name && (
              <div className="tooltip">{image.name}</div>
              )}
            </div>
            ))}
          </div>
          <h2 className='twoHeader'>{translations.languages} <MdLanguage /></h2>
          <div className="svgExpIconsContainer">
            {flages.map((image, index) => (
            <div key={index} className='svgExpIcon'>
              <img
                src={image.src}
                alt={image.name}
                onMouseEnter={() => setHoveredImage(image.name)}
                onMouseLeave={() => setHoveredImage(null)}
              />
              {hoveredImage === image.name && (
              <div className="tooltip">{image.name}</div>
              )}
            </div>
            ))}
          </div>
        </div>
      </section>

      <section className='projectP' id='projects'>
        <div>
          <h2 className='twoHeader'>{translations.projects} <PiProjectorScreenChartLight /></h2>
          <div className='projectList'>
            {projectData.map((project, index) => (
              <React.Fragment key={index}>
                <div className='projectItem'>
                  <span className='projectName'>{project.name}</span>
                  <a
                    className='projectView'
                    href={project.repo}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View
                  </a>
                </div>
                {index < projectData.length - 1 && <hr />} 
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      
      {showScrollTop && (
          <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
        )}

    </div>
  );
}

export default App;
