import React from 'react';
import '../Styles/Home.css'; 
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Button from 'react-bootstrap/Button';


const Home = () => {
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=1k_L79_96jA5u_FdWUxEnMDQZy36G1dm8'; 

  return (
    <>
      <div className="home-container" id='#'>
        {/* <img src={pavaniImage} alt="Pavani's Image" className="profile-image" /> */}
        <div className="text-container">
          <p className="name"> Hi There!👋<br/>I am Pavani </p>
          <p className="slogan">I'am a Full-Stack Developer</p>
          <p className="coding-skills">Passionate about creating robust and efficient web applications. Proficient in languages such as JavaScript, React, and Node.js.</p>
          <Button 
            variant="outline-success"
            className="resume-button" 
            onClick={() => window.open(resumeUrl, '_blank')}
          >
            Get Resume
          </Button>
        </div>
      </div>
      <div className='about-wrapper'>
        <About/>
      </div>
      <Projects/>
      <h3 style={{ textAlign: "center", fontWeight: 'bold', color: 'white', fontSize: '24px' }}>Contact</h3>
      <hr style={{ width: '80%', maxWidth: '1000px', margin: 'auto' }} /><br/>
      <Contact/>
    </>
  );
}

export default Home;
