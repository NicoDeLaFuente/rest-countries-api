import logo from './logo.svg';
import './App.css';
import WrapperContainer from './components/WrapperContainer/WrapperContainer';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <WrapperContainer/>
    </ThemeProvider>
  );
}

export default App;
