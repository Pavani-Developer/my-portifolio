import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../Styles/About.css'; 
import Git from './Git';


const About = () => {
  const skills = [
    { name: '', backgroundImage: 'url(https://media.licdn.com/dms/image/D5612AQGxN33vY4O7FA/article-cover_image-shrink_720_1280/0/1690101139624?e=2147483647&v=beta&t=rxl1ZfMm4Ihg6HLEAlASEGwNh5Llgp--KtJ4lpwPGk0)' },
    { name: '', backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhln4-ygosRcYC8XLmLPuh_bxZXFH8xpD48w&usqp=CAU)' },
    { name: '', backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:2000/1*qF8LfAwUhl57g9T0BVvVdg.jpeg)' },

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
    <div className="about-container">
      <div className='sub-aboutcontainer' >
        <h1>About Me</h1>
        <p className='about-para'>
          Hello! I'm Pavani, a passionate and creative Web-developer based in West Godavari. With a background in B.Sc Computer Science, I am dedicated to delivering high-quality solutions.
        </p>
        
        <div className="skills-container">
          {skills.map((skill, index) => (
                      <Card key={index} className="skill-card" style={{ backgroundImage: skill.backgroundImage, ...cardStyles }}>

              <CardContent>
                <Typography variant="body1" color="textPrimary">
                  {skill.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className='about-para'>
          In my work, I focus on creating visually appealing and user-friendly applications that not only meet but exceed client expectations. I believe in the power of continuous learning and staying updated with the latest industry trends to provide innovative solutions.
        </p>
        <p className='about-para'>
          When I'm not coding or designing, you can find me exploring new technologies, reading, or hiking.
        </p>
        <p className='about-para'>
          Thank you for visiting my portfolio! Feel free to explore my projects, and don't hesitate to reach out if you have any inquiries or collaboration opportunities.
        </p>
      </div>
      
    </div>
  );
}

export default About;
