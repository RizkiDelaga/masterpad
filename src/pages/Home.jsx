import { Button, CssBaseline, Paper } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Paper elevation={0}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis repellat architecto nostrum corrupti
        consectetur sint dolore, odio, quam soluta quisquam, deserunt saepe aliquam. Non officiis deserunt, harum iure
        dolorum fuga?
      </Paper>
      <Button
        variant="outlined"
        onClick={() => {
          navigate('/Dashboard');
        }}
      >
        Dashboard
      </Button>

      <Button
        onClick={() => {
          navigate('/SSOAuthentication');
        }}
      >
        Login
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
