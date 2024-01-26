import { Button, CssBaseline } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          navigate('/Dashboard');
        }}
      >
        Dashboard
      </Button>

      <Button
        variant="outlined"
        onClick={() => {
          navigate('/Login');
        }}
      >
        Login
      </Button>

      <Button
        variant="outlined"
        onClick={() => {
          navigate('/Register');
        }}
      >
        Register
      </Button>

      <Button
        variant="outlined"
        onClick={() => {
          localStorage.removeItem('accessToken');
        }}
      >
        Logout
      </Button>
    </>
  );
}
