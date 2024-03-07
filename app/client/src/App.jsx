// import logo from './logo.svg';
import{Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Counter from './components/02-03/Counter';
import Effectone from './components/03-03/Effectone';
import EffectTwo from './components/03-03/EffectTwo';
import Wellcome from './components/03-03/Wellcome';
import EffectThree from './components/03-03/EffectThree';
import Effectfour from './components/03-03/Effectfour';
import Registerpage from './components/06-03/Registerpage';
import Test from './components/Test';



function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Register' element={<Register/>} />
    <Route path='/counter' element={<Counter/>} />
    <Route path='/Effect-1' element={<Effectone/>} />
    <Route path='/Effect-2' element={<EffectTwo/>} />
    <Route path='/Effect-3' element={<EffectThree/>} />
    <Route path='/Effect-4' element={<Effectfour/>} />
    <Route path='/Wellcome' element={<Wellcome/>} />
    <Route path='/Registerpage' element={<Registerpage/>} />
    <Route path='/Test' element={<Test/>} />
    
    </Routes>
      
    </div>
  );
}

export default App;
