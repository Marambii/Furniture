import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './Display/Display';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Card from './Pages/Card';

function App() {
  return (   
    <BrowserRouter> 
     <Routes>
       <Route path='/' element={<Display />} >
       <Route index element = {<Landing/>}/>
       <Route path="Home" element = {<Home/>}/>
       <Route path='Card' element = {< Card/>}/>
       
       </Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
