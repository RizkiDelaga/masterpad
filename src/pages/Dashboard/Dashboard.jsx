import React, { useContext } from 'react';
import ThemeModeContext from '../../provider/contexts/ThemeMode';
import { Button, CssBaseline, Paper, Switch } from '@mui/material';
import { useNavigate } from 'react-router';

export default function Dashboard() {
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);
  const navigate = useNavigate();

  return (
    <>
      <div>Dashboard</div>
      <Switch onChange={toggleThemeMode} color="primary" />
      <div>Mode : {themeMode}</div>
      <Paper elevation={0} sx={{ height: 300, border: 4, borderColor: 'secondary.main' }}>
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
