import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, subject, email, message });
    
    setName('');
    setSubject('');
    setEmail('');
    setMessage('');

    setSubmitted(true);
  };

  return (
    <div >
    <Container component="main" maxWidth="sm" style={{ textAlign: 'center' ,height:'100vh',}}>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '150px' }}>
        {submitted ? (
          <>
            <Typography variant="h5">Thank You!</Typography>
            <Typography variant="subtitle1">Your message has been submitted.</Typography>
          </>
        ) : (
          <>
            <Typography variant="h5">Get In Touch</Typography>
            <Typography variant="subtitle1">Do you want to have a chat?</Typography>
            <Typography variant="subtitle1">Feel free to send me a message, I will definitely reply.</Typography>
            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                margin="normal"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                style={{ width: '100%', marginTop: '20px', backgroundColor: 'green', color: '#fff' }}
              >
                Submit
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Contact;

