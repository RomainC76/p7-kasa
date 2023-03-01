import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Routerglobal from './Pages/Routerglobal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routerglobal />
      </BrowserRouter>
    </div>
  );
}

export default App;
