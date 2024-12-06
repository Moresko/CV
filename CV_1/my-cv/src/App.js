import './App.css';
import { FiMenu } from "react-icons/fi";
import fc from './face.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <header className="headerStart" >
        <a href="#home" className="logo">Martin <span>Mores</span></a>

        <FiMenu className='hamburger-icon'/>

        <nav className="navbarStart"> 
          <a href="#home" className="active">Domov</a>
          <a href="#education">Vzdelanie</a>
          <a href="#job" >Praca</a>
          <a href="#exp" >Znalosti</a>
          <a href="#projects" >Projejky</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      <section  className="homeP" id='home'> 
        <div className='home-info' >
          <h1>Hi, Its <span>Martin</span></h1>
          <h3 className='home-text'>I am <span></span></h3>
          <p>alsjdklasjdjklajdlkajsdlkasda
            sectiondasdasd
            alsjdklasjdjklajdlkajsdlkasdadas
            dasdasdasda
            sectiondasdasdasdasd
            asdasdda
          </p>

          <div className='soc-icons'>
            <a href='#home'><FaFacebook /></a>
            <a href='#home'><FaInstagram /></a>
            <a href='#home'><FaLinkedin /></a>
            <a href='#home'><FaGithub /></a>
          </div>

          <div className='groups'>
            <a href='#home' className='grp'>Hire</a>
            <a href='#contact' className='grp'>Kontakt</a>
          </div>
        </div>

        <div className='home-image'>
          <img src={fc} alt="Avatar"/>
        </div>

      </section>
    </div>
  );
}

export default App;
