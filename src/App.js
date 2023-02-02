import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Logement from './Pages/Logement'
import Apropos from './Pages/Apropos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
        <Logement />
        <Apropos />
      </header>
    </div>
  );
}

export default App;
