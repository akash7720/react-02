// import logo from './logo.svg';
import{Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Counter from './components/02-03/Counter';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Register' element={<Register/>} />
    <Route path='/counter' element={<Counter/>} />
    </Routes>
      
    </div>
  );
}

export default App;
