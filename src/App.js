import logo from './logo.svg';
import './App.css';
import Files from './Components/Files';
import {BrowserRouter, browsweRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
    <BrowserRouter>
        <Files></Files>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
