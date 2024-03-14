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
import UseReducer from './components/09-03/UseReducer';
import { Children, useState } from 'react';
import PropsDrilling from './components/09-03/PropsDrilling';
import ProviderCounterContext from './components/Context/ProviderCounterContext';
import FackAllProducts from './components/10-03/FackAllProducts';
import AuthContext from './components/Context/AuthContext';




function App() {
  const [students] = useState(["a", 'b', 'c', 'd'])
  const [counter] = useState(1234)
  const[age]=useState(65)
  

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
    <Route path='/useReducer' element={<UseReducer/>} />
    <Route path='/Children' element={<Children/>} />
    <Route path='/PropsDrilling' element={<PropsDrilling  students={students} counter={counter}  age={age}/>}  />
    <Route path='/ProviderCounterContext' element={<ProviderCounterContext/>}  />
    <Route path='/FackAllProducts' element={<FackAllProducts/>}  />
    <Route path='/AuthContext' element={<AuthContext/>}  />
    
    </Routes>
      
    </div>
  );
}

export default App;
