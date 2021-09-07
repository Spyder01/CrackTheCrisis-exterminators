import Router from './routes/router';
import {ThemeProvider, createTheme } from '@material-ui/core/styles';
import {RecoilRoot} from 'recoil'
import './App.css';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
          <Router />
      </ThemeProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
