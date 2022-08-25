import React from 'react';
import Navbar from './Navbar'
// import MainContent from './MainContent'
// import ShoppingCart from './ShoppingCart'
// import Login from './Login'
import Dashboard from './Dashboard';



class App extends React.Component {
  render () {
   return (
    <>
    <Navbar/>
     <Dashboard/>
    </>
   )
  }
}





export default App;
