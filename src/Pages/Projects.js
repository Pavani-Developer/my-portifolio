import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import '../Styles/Projects.css'; // Import your CSS file for styling

const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ante vel est convallis dignissim.',
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ante vel est convallis dignissim.',
  },
  {
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ante vel est convallis dignissim.',
  },
  {
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ante vel est convallis dignissim.',
  },
  {
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ante vel est convallis dignissim.',
  },
  {
    title: 'Project 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ante vel est convallis dignissim.',
  },
];

const Projects = () => {
  return (
    <Container maxWidth="lg" className="projects-container">
      <h1>Projects</h1>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="project-card">
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
