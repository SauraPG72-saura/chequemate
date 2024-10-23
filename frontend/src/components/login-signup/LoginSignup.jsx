import React, { useState } from 'react';
import { Box, Button, TextField, Typography, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Email from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/Lock';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // for navigation
import Cookies from 'js-cookie';  // for handling cookies

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    abn: '',
    gst_registration: true,
    password: '',
    password_confirm: ''
  });

  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Sign Up
  const handleSignUp = () => {
    const userData = {
      username: formData.username,
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone_number: formData.phone_number,
      abn: formData.abn,
      gst_registration: formData.gst_registration,
      password: formData.password,
      password_confirm: formData.password_confirm
    };

    axios.post('http://127.0.0.1:8000/api/register', userData)
      .then(response => {
        alert('User created successfully!');
        console.log('User created successfully:', response.data);
      })
      .catch(error => {
        console.error('Error creating user:', error);
        alert('Error creating user');
      });
  };

  // Handle Login
  const handleLogin = () => {
    const loginData = {
      username: formData.username,
      password: formData.password
    };

    axios.post('http://127.0.0.1:8000/api/login', loginData)
      .then(response => {
        const token = response.data.token;
        // Save token to cookies
        Cookies.set('authToken', token, { expires: 7 });  // Token expires in 7 days
        alert('Login successful!');
        // Redirect to member portal
        navigate('/member');
      })
      .catch(error => {
        console.error('Error logging in:', error);
        alert('Invalid credentials');
      });
  };

  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '100px auto',
        padding: '40px',
        width: '600px',
        backgroundColor: '#587B7F',
        borderRadius: '12px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: '#CFEE9E' }}>
        {action}
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2,
          width: { xs: '100%', sm: '400px' }
        }}
      >
        <TextField 
          name="username"
          label="Username"
          variant="outlined"
          value={formData.username}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
          required
          sx={{ backgroundColor: '#eaeaee', borderRadius: '6px' }}
        />

        {action === "Sign Up" && (
          <>
            <TextField 
              name="first_name"
              label="First Name"
              variant="outlined"
              value={formData.first_name}
              onChange={handleInputChange}
              required
              sx={{ backgroundColor: '#eaeaee', borderRadius: '6px' }}
            />
            <TextField 
              name="last_name"
              label="Last Name"
              variant="outlined"
              value={formData.last_name}
              onChange={handleInputChange}
              required
              sx={{ backgroundColor: '#eaeaee', borderRadius: '6px' }}
            />
            <TextField 
              name="abn"
              label="ABN"
              variant="outlined"
              value={formData.abn}
              onChange={handleInputChange}
              required
              sx={{ backgroundColor: '#eaeaee', borderRadius: '6px' }}
            />
            <TextField 
              name="phone_number"
              label="Mobile Number"
              variant="outlined"
              value={formData.phone_number}
              onChange={handleInputChange}
              required
              sx={{ backgroundColor: '#eaeaee', borderRadius: '6px' }}
            />
          </>
        )}

        <TextField 
          name="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            )
          }}
          required
          sx={{ backgroundColor: '#eaeaee', borderRadius: '6px' }}
        />
        <TextField 
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formData.password}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            )
          }}
          required
          sx={{ backgroundColor: '#eaeaee', borderRadius: '6px' }}
        />
        {action === "Sign Up" && (
          <TextField 
            name="password_confirm"
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={formData.password_confirm}
            onChange={handleInputChange}
            required
            sx={{ backgroundColor: '#eaeaee', borderRadius: '6px' }}
          />
        )}
      </Box>

      <Box sx={{
        display: 'flex',
        gap: 2, marginTop: 4
      }}>
        <Button 
          variant={action === "Sign Up" ? "contained" : "outlined"} 
          onClick={() => {
            setAction("Sign Up");
            if (action === "Sign Up") {
              handleSignUp();
            }
          }}
          sx={{
            backgroundColor: action === "Sign Up" ? "#8DAB7F" : "transparent",
            color: action === "Sign Up" ? "#fff" : "#676767",
            '&:hover': { backgroundColor: '#CFEE9E' }
          }}
        >
          Sign Up
        </Button>
        <Button 
          variant={action === "Login" ? "contained" : "outlined"} 
          onClick={() => {
            setAction("Login");
            if (action === "Login") {
              handleLogin(); // Handle login on click
            }
          }}
          sx={{
            backgroundColor: action === "Login" ? "#8DAB7F" : "transparent",
            color: action === "Login" ? "#fff" : "#676767",
            '&:hover': { backgroundColor: '#394032', color: '#fff' }
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginSignup;