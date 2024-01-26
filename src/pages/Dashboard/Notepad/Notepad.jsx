import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export default function Notepad() {
  const navigate = useNavigate();

  return (
    <>
      <div>Notepad</div>
      <Button
        variant="contained"
        onClick={() => {
          navigate('/Dashboard/Notepad/TextEditor');
        }}
      >
        Make a Note
      </Button>
    </>
  );
}
