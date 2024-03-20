// import './App.css';
import Container from '@mui/material/Container';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Heading from './Components/Heading';
import Box from '@mui/material/Box';
import History from './Components/History';
import Summary from './Components/Summary';
import Nav  from './Components/Nav';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';
import { GlobalProvider } from './context/GlobalState';
const theme = createTheme(
  {
    palette: {
      primary: {
        light: '#212121',
        main: '#212121',
        dark: '#212121',
        contrastText: '#fff',
      },
      secondary: {
        light: '#212121',
        main: '#212121',
        dark: '#212121',
        contrastText: '#000',
      },
    }
  }
);

function App() {
  return (
    <GlobalProvider>

    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography gutterBottom variant="h5" component="div">
        Working fine, as of march 17, 2024.
        </Typography>
      <Nav/>
      <CssBaseline />
      <main>
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
          >
          <Container maxWidth="sm">   
            <Heading/>
            <Balance/>
            <Summary/>
            <History/>
            <AddTransaction/>
        </Container>
      </Box>
      </main>
      </ThemeProvider>
    </div>
          </GlobalProvider>
  );
}

export default App;
