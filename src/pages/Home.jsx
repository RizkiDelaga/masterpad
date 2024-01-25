import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => {
          navigate('/Dashboard');
        }}
      >
        Dashboard
      </Button>

      <Button
        onClick={() => {
          navigate('/Login');
        }}
      >
        Login
      </Button>

      <Button
        onClick={() => {
          navigate('/Register');
        }}
      >
        Register
      </Button>

      <Button
        onClick={() => {
          localStorage.removeItem('accessToken');
        }}
      >
        Logout
      </Button>
    </>
  );
}
