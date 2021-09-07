import Router from './routes/router';
import {ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
          <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
