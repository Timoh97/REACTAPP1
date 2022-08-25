import React from 'react';
import Navbar from './Navbar';
import NoMatchPage from './NoMatchPage';
import Dashboard from './Dashboard';
import MainContent from './MainContent';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
// import {Route} from 'react-router';
import {BrowserRouter, Routes,Route} from 'react-router-dom';




class App extends React.Component {
  render () {
   return (
    

      <BrowserRouter>
           <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path='cart' element={<ShoppingCart/>}/>
        <Route path='main' element={<MainContent/>}/>
        <Route path='*' element={<NoMatchPage/>}/>
      </Routes>
       
    </BrowserRouter>
   
  


  
   )
  }
}





export default App;
