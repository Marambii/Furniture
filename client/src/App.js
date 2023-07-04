import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './Display/Display';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Card from './Pages/Singlecard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './context/AuthContext';
import Profile from './Pages/Profile';
import Add from './Pages/Add';
import Singlecard from './Pages/Singlecard';

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
       <Route path='Profile' element = {< Profile/>}/>
       <Route path='Add' element = {< Add/>}/>
       <Route path='Singlecard' element = {< Singlecard/>}/>
       </Route>
     </Routes>
     </AuthProvider>
   </BrowserRouter>
  );
}

export default App;
