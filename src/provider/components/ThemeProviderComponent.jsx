import React, { useContext } from 'react';
import ThemeModeContext from '../contexts/ThemeMode';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

export default function ThemeProviderComponent({ children }) {
  const { themeMode } = useContext(ThemeModeContext);

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#F05945',
      },
      secondary: {
        main: '#5EAAA8',
      },
      alternative: {
        main: '#A3D2CA',
      },
      light: {
        main: '#FFFFFF',
      },
      dark: {
        main: '#000000',
      },
      ...(themeMode === 'light'
        ? {
            background: {
              default: '#F7F3E9',
              paper: '#FFFFFF',
            },
            text: {
              primary: '#000000',
            },
          }
        : {
            background: {
              default: '#000000',
              paper: '#272727',
            },
            text: {
              primary: '#ffffff',
            },
          }),
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: { backgroundImage: 'none' },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: { backgroundImage: 'none' },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: '#F05945',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            // Default styles
            borderWidth: '2px',
            fontWeight: 'bold',

            // Hover styles
            '&:hover': {
              borderWidth: '2px',
            },

            // Active styles
            '&:active': {
              borderWidth: '2px',
            },

            // Focus styles
            '&:focus': {
              borderWidth: '2px',
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

// Primary = Main Component (Button, Navbar, Switch, etc) [No Effect When Dark Mode]
// Secondary = Miror Component (Frame, Sidebar, etc) [No Effect When Dark Mode]
