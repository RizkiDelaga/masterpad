import React, { useContext } from 'react';
import { Button, CssBaseline, Paper, Switch } from '@mui/material';
import { useNavigate } from 'react-router';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <div>Dashboard</div>

      <Paper elevation={0} sx={{ height: 300, border: 2, borderColor: 'secondary.main' }}>
        Lorem ipsum dolor sit.
      </Paper>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          navigate('/Dashboard/Notepad');
        }}
      >
        Notepad
      </Button>
    </>
  );
}
