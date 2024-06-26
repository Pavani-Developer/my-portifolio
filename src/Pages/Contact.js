import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!subject) {
      errors.subject = 'Subject is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!message) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      // Display error messages and prevent form submission
      setFormErrors(errors);
      return;
    }

    // Send email using Email.js
    emailjs.sendForm('service_2yv3ema', 'template_ahaz5wx', e.target, 'DxqVZ28S_sD24z2Xx')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Reset the form after successful submission
        setName('');
        setSubject('');
        setEmail('');
        setMessage('');
        setFormErrors({});
        // Show success message
        alert('Your message has been sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        // Show error message
        alert('An error occurred while sending your message. Please try again later.');
      });
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <Container component="main" maxWidth="sm" style={{ textAlign: 'center', paddingTop: '20px' }} id="reachout">
      <Paper elevation={3} style={{
      padding: '20px',
      marginTop: '20px',
      boxShadow: '0 2px 16px rgba(225,1,222,2)',
      backgroundColor: '#16082B',
      color: 'white',
    }}>
      
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
                required
                error={formErrors.name}
                helperText={formErrors.name}
                name="user_name"
                InputLabelProps={{ style: { color: 'white' } }}
                

              />
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                margin="normal"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                error={formErrors.subject}
                helperText={formErrors.subject}
                name="user_subject"
                InputLabelProps={{ style: { color: 'white' } }} // Change label color to white

              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                error={formErrors.email}
                helperText={formErrors.email}
                name="user_email"
                InputLabelProps={{ style: { color: 'white' } }} // Change label color to white

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
                required
                error={formErrors.message}
                helperText={formErrors.message}
                name="user_message"
                InputLabelProps={{ style: { color: 'white' } }} // Change label color to white

              />
              <Button type="submit" variant="contained" style={{ width: '100%', marginTop: '20px', backgroundColor: 'green', color: '#fff' }}>
                Submit
              </Button>
            </form>
          </>
        </Paper>
      </Container>
    </div>
  );
};

export default ContactForm;
