import React from 'react'; // Importing necessary React components
import { blue, green, purple, red } from '@mui/material/colors'; // Importing Material-UI color palette
import { ThemeProvider } from '@emotion/react'; // Importing ThemeProvider from Emotion
import { CssBaseline, createTheme } from '@mui/material'; // Importing CssBaseline and createTheme from Material-UI
import UserList from './UserList'; // Importing UserList component

// Creating custom theme using createTheme function
const theme = createTheme({
  palette:{
    primary:{
      main: purple[500], // Setting primary color to purple
    },
    secondary: {
      main: green[700] // Setting secondary color to green
    },
    edit: {
      main: blue[700] // Setting edit button color to blue
    },
    delete: {
      main: red[600] // Setting delete button color to red
    },
    adduser: {
      main: blue[800] // Setting add user button color to a darker shade of blue
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}> {/* ThemeProvider for applying custom theme */}
      <CssBaseline /> {/* CssBaseline for consistent styling across browsers */}
      <UserList /> {/* Rendering UserList component */}
    </ThemeProvider>
  );
}

export default App; // Exporting App component
