import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
    render (){
        return (
            <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark navbar-style'>
                <a className='navbar-brand' href='/#'>
                    eCommerce
                </a>

                <button className='Navbar-toggler bg-dark' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='toggle-navigation'>
        <span className='navbar-toggler-icon'></span>
                </button>


                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                        <Link className='nav-link' to='/'>Login</Link>
                        </li>
                        <li  className='nav-item'>
                        <Link className='nav-link' to='main'>Home</Link>
                        </li>
                        <li className='nav-item'>
                        <Link className='nav-link' to='dashboard'>Dashboard</Link>
                        </li>
                        <li className='nav-item'>
                        <Link className='nav-link' to='cart'>Cart</Link>
                        </li>

                    </ul>

                </div>
            </nav>
            </>
            )
    }
}

export default Navbar