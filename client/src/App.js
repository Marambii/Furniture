
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './Display/Display';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Card from './Pages/Card';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './context/AuthContext';

function App() {
  return (   
    <BrowserRouter> 
    <AuthProvider>
     <Routes>
       <Route path='/' element={<Display />} >
       <Route index element = {<Landing/>}/>
       <Route path="Home" element = {<Home/>}/>
       <Route path='Card' element = {< Card/>}/>
       <Route path='login' element = {< Login/>}/>
       <Route path='Register' element = {< Register/>}/>
       </Route>
     </Routes>
     </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
