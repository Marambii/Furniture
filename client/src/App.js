
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './Display/Display';
import Furniture from './Pages/Furniture';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './context/AuthContext';
import FurnitureProvider from './context/FurnitureContext';
import SingleFurniture from './Pages/SingleFurniture';
import AddFurniture from './Pages/AddFurniture';
import Profile from './Pages/Profile';
import UpdateFurniture from './Pages/UpdateFurniture';

function App() {
  return (   
    <BrowserRouter> 
     <AuthProvider>
       <FurnitureProvider>
        <Routes>
          <Route path='/' element={<Display />} >
          <Route index element = {<Home/>}/>
          <Route path="/furniture" element = {<Furniture/>}/>
          <Route path='/furniture/:id' element = {< SingleFurniture/>}/>
          <Route path='/login' element = {< Login/>}/>
          <Route path='/Register' element = {< Register/>}/>
          <Route path='/addfurniture' element = {< AddFurniture/>}/>
          <Route path='/updatefurniture/:id' element = {< UpdateFurniture/>}/>
          <Route path='/profile' element = {< Profile />}/>
          </Route>
        </Routes>
       </FurnitureProvider>
     </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
