import React from 'react';
import '../Styles/Home.css'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';



const Home = () => {
  const skills = [
    { name: '', backgroundImage: 'url(https://media.licdn.com/dms/image/D5612AQGxN33vY4O7FA/article-cover_image-shrink_720_1280/0/1690101139624?e=2147483647&v=beta&t=rxl1ZfMm4Ihg6HLEAlASEGwNh5Llgp--KtJ4lpwPGk0)' },
    { name: '', backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhln4-ygosRcYC8XLmLPuh_bxZXFH8xpD48w&usqp=CAU)' },
    { name: '', backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:2000/1*qF8LfAwUhl57g9T0BVvVdg.jpeg)' },
    { name: '', backgroundImage: 'url(https://res.cloudinary.com/practicaldev/image/fetch/s--4BjMqsdN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4anecy5mdl4pho8w7519.jpg)' },
    { name: '', backgroundImage: 'url(https://cdn.hashnode.com/res/hashnode/image/upload/v1616249961785/F2de7vPiW.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)' },
    { name: '', backgroundImage: 'url(https://img-c.udemycdn.com/course/750x422/5637694_579d_8.jpg)' },
    { name: '', backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ev6Tsx1p8yFeeg8P9cuXMcYF6QIaDoMxyA&usqp=CAU)' },
    { name: '', backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOD_8KGkw89ZlvorOgf_HylfhGiIVKc7G9TQ&usqp=CAU)' },
  ];

  
  const cardStyles = {
    backgroundSize: 'cover', 
    height: '100%', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end', 
    boxShadow: '0 0 10px rgba(173, 216, 230, 0.8)',
  };

  return (
    <>
    <div className="home-container">
      {/* <img src={pavaniImage} alt="Pavani's Image" className="profile-image" /> */}
      <div className="text-container">
        <p className="name"> Hi There!👋<br/>I am Pavani </p>
        <p className="slogan">I'am a Full-Stack Developer</p>
        <p className="coding-skills">Passionate about creating robust and efficient web applications. Proficient in languages such as JavaScript, React, and Node.js.</p>
      
      </div>
    </div>
        <div  className='about-wrapper'>
        <About/>
        </div>
         
         
         
         <Projects/>
         <h3 style={{ textAlign:"center", fontWeight:'bold' }}>Contact</h3>
         <hr style={{ width: '80%', maxWidth: '1000px', margin: 'auto' }} /><br></br>
         <Contact/>
    </>
  );
}

export default Home;
