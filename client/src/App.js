
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './Display/Display';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './context/AuthContext';
import FurnitureProvider from './context/FurnitureContext';
import SingleFurniture from './Pages/SingleFurniture';
import AddFurniture from './Pages/AddFurniture';
import Profile from './Pages/Profile';

function App() {
  return (   
    <BrowserRouter> 
     <AuthProvider>
       <FurnitureProvider>
        <Routes>
          <Route path='/' element={<Display />} >
          <Route index element = {<Landing/>}/>
          <Route path="Home" element = {<Home/>}/>
          <Route path='/furniture/:id' element = {< SingleFurniture/>}/>
          <Route path='login' element = {< Login/>}/>
          <Route path='Register' element = {< Register/>}/>
          <Route path='addfurniture' element = {< AddFurniture/>}/>
          <Route path='profile' element = {< Profile />}/>
          </Route>
        </Routes>
       </FurnitureProvider>
     </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
